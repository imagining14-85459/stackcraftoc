// StackCraft OC AI proxy. The API key lives here (read from .env), never in the web page.
// Run: npm start  ->  http://localhost:8787
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.dirname(fileURLToPath(import.meta.url)); // keep server.mjs in the same folder as the HTML file
const PAGES = ['stackcraft-oc.html', 'stackcraftoc.html', 'index.html'];
const {
  ANTHROPIC_API_KEY,
  ANTHROPIC_MODEL = 'claude-haiku-5-5',
  PORT = '8787',
  ALLOWED_ORIGINS = '',            // comma-separated, only needed if the page is hosted on a different origin
  MAX_PROMPT_CHARS = '8000',
  MAX_OUTPUT_TOKENS = '700',
  RATE_LIMIT_PER_MIN = '20',
} = process.env;

if (!ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY is empty. Paste your key into .env and run "npm start" again.');
  process.exit(1);
}

const allowed = new Set(ALLOWED_ORIGINS.split(',').map(s => s.trim()).filter(Boolean));
const hits = new Map(); // ip -> timestamps (in-memory, resets on restart)

function limited(ip) {
  const now = Date.now(), win = (hits.get(ip) || []).filter(t => now - t < 60_000);
  win.push(now); hits.set(ip, win);
  return win.length > +RATE_LIMIT_PER_MIN;
}

function originOk(req) {
  const o = req.headers.origin;
  if (!o) return true;                                   // same-origin GETs and non-browser tools
  if (allowed.has(o)) return true;
  try { return new URL(o).host === req.headers.host; } catch { return false; }
}

function send(res, code, body, extra = {}) {
  res.writeHead(code, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...extra });
  res.end(JSON.stringify(body));
}

function readBody(req, max = 32_768) {
  return new Promise((resolve, reject) => {
    let n = 0; const chunks = [];
    req.on('data', c => { n += c.length; if (n > max) { reject(new Error('too large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function handleAI(req, res) {
  const cors = req.headers.origin ? { 'Access-Control-Allow-Origin': req.headers.origin, Vary: 'Origin' } : {};
  if (!originOk(req)) return send(res, 403, { error: 'origin not allowed' });
  if (limited(req.socket.remoteAddress || 'x')) return send(res, 429, { error: 'slow down' }, cors);
  let prompt;
  try { prompt = JSON.parse(await readBody(req)).prompt; } catch { return send(res, 400, { error: 'bad request' }, cors); }
  if (typeof prompt !== 'string' || !prompt.trim() || prompt.length > +MAX_PROMPT_CHARS) return send(res, 400, { error: 'bad prompt' }, cors);

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: ANTHROPIC_MODEL, max_tokens: +MAX_OUTPUT_TOKENS, messages: [{ role: 'user', content: prompt }] }),
    });
    if (!r.ok) { console.error('Anthropic API', r.status, (await r.text()).slice(0, 300)); return send(res, 502, { error: 'upstream ' + r.status }, cors); }
    const j = await r.json();
    const text = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    send(res, 200, { text }, cors);
  } catch (e) {
    console.error('proxy error', e.message);
    send(res, 502, { error: 'upstream unreachable' }, cors);
  }
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/api/ai') {
    if (req.method === 'OPTIONS') {
      if (!originOk(req)) return send(res, 403, { error: 'origin not allowed' });
      res.writeHead(204, { 'Access-Control-Allow-Origin': req.headers.origin || '', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' });
      return res.end();
    }
    if (req.method === 'POST') return handleAI(req, res);
    return send(res, 405, { error: 'POST only' });
  }
  if (req.method === 'GET' && (url.pathname === '/' || PAGES.includes(url.pathname.slice(1)))) {
    try {
      let html;
      for (const name of PAGES) { try { html = await readFile(path.join(ROOT, name)); break; } catch {} }
      if (!html) throw new Error('no page');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'X-Content-Type-Options': 'nosniff' });
      return res.end(html);
    } catch { return send(res, 500, { error: 'Put stackcraft-oc.html in the same folder as server.mjs' }); }
  }
  send(res, 404, { error: 'not found' });
}).listen(+PORT, () => console.log(`StackCraft OC on http://localhost:${PORT}  (model: ${ANTHROPIC_MODEL})`));
