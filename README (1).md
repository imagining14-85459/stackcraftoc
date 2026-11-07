# StackCraft OC

> For nonprofit developers and municipal analysts working with multi-generational immigrant households, this tool calculates statutory affordable pricing constraints while using AI to translate informal community assets into compliant underwriting narratives.

**Team:** Someone Cool
**Members:** Kate Lay
**Lane:** 3 Fund it + your own direction
**Built at:** Claude Impact Lab: UCI × SoCal Affordable Housing, November 7, 2026

## The real user

The user is an affordable housing development director or city analyst trying to stack fragmented funding layers for working-class immigrant families. Today, they manually manage static Excel models that completely isolate non-English speaking family members from the underwriting math. When interest rates bounce or new annual state income limits drop, their fragile spreadsheets break and force them to restart from scratch.

**Before:** Advisors manually cross-reference static tables across disconnected state and federal datasets, typing single-borrower parameters into isolated English spreadsheets that lock out the family circle.
**After:** Advisors switch on a bilingual "Co-Authoring Mode" where multi-generational families actively input alternative equity assets while a color-shifting slider instantly projects macroeconomic rate shocks.

## What we built

StackCraft OC calculates maximum affordable purchase bounds under CA Health & Safety Code § 50052.5 using an isolated JavaScript calculation engine. It replaces rigid bank underwriting rows with an interactive canvas that includes an interest rate shock matrix slider, a trait-parsing eligibility sandbox for local grants, and alternative capital ledgers for Hui/Tanda informal networks.

**Demo video:** Uploaded on the hub
**Live demo:** Running locally on port 8080

## How Claude is used

- **How we built it:** Claude Code and Google Antigravity were used inside the local VS Code workspace to rapidly scaffold the responsive frontend layout containers and build out the data dictionary translation schemas.
- **What Claude does:** Claude operates exclusively as a qualitative "Interpretive Engine" that reads informal community assets (like rotating savings circles) and generates formal compliance justifications to satisfy institutional underwriting audits.
- **What a person checks:** A human housing professional must always visually audit the mathematical output layers and verify that injected regulatory parameters match physical municipal guidelines.

## Try it

```bash
git clone https://github.com/someone-cool/stackcraft-oc.git
cd stackcraft-oc
npm install
npm run dev -- --port 8080
```

Requires Node.js (v18+) and npm installed locally. To activate the dynamic AI translation context pane, add your `VITE_ANTHROPIC_API_KEY` to a local `.env.local` file; offline mock data functions automatically if keys are absent.

## Sources and assumptions

| Item | Source or assumption | Date checked |
|---|---|---|
| **$535,000 Creation Cost Baseline** | **ASSUMPTION:** Synthetic baseline deal configuration provided in hackathon parameters. | November 7, 2026 |
| **$285,000 Family Payment Cap** | **ASSUMPTION:** Synthetic low-income household buying capacity provided in brief templates. | November 7, 2026 |
| **$250,000 Base Fundraising Gap** | **ASSUMPTION:** Synthetic baseline project gap calculation derived from prompt inputs. | November 7, 2026 |
| **CA Health & Safety Code § 50052.5** | **LAW:** California statutory affordable cost backward-math limits based on household income. | November 7, 2026 |
| **Multi-Generational Array Limits** | **DATASET:** Official California HCD income brackets scaled for 2 to 7+ person households. | November 7, 2026 |
| **Santa Ana "My First Home" Program** | **PROGRAM:** City of Santa Ana Down Payment Assistance local municipal boundary constraints. | November 7, 2026 |
| **AAPI Hui / Latino Tanda Inputs** | **ASSUMPTION:** Alternative community equity credit mappings used to model informal savings circles. | November 7, 2026 |

## What is real and what is mocked

| Part | Status |
|---|---|
| **Immutable Underwriting Engine Math** | **WORKING:** Deterministic JavaScript functions compute legal backward-math values flawlessly. |
| **Interest Rate Sensitivity Slider** | **WORKING:** Interactive UI element fully models dynamic rate shifts and repaints canvas alert tones. |
| **Dual-Language Interface Toggles** | **WORKING:** Localized strings swap layout labels instantly between English, Español, and Tiếng Việt. |
| **Live HUD / CA Portal REST Integration** | **MOCKED:** Structured data dictionaries are ready for runtime ingestion but read static local tables for sandbox security. |
| **Live Claude API Compliance Narratives** | **MOCKED:** Interface components render the contextual text containers dynamically using localized mock strings. |

## Where it gets things wrong

The application lacks active runtime triggers to flag users when regional California HCD datasets are updated by the state mid-year. It does not calculate secondary commercial debt service coverage ratios or multi-tiered amortized commercial construction debt layers, leaving those to be verified manually. Where specific alternative asset validation rules remain fluid for private lenders, the structural risk timeline parameters are marked unknown.

## Next steps

- **One more week:** We would wire the active REST handlers to the live California Open Data CKAN API portal endpoints, implement automatic stale-data warning flags, and fix the downloadable PDF summaries to render tabular formats natively.
- **Next month:** The tool requires establishing a dedicated API gateway for runtime updates and running a small UI validation focus group with local community land trust counselors to refine intake ledger vocabulary.

## Data and privacy

This project uses only public or provided data. It contains no personal information about real tenants, buyers or residents. It does not file applications or contact any city or person.

## License

MIT, see the LICENSE file in this repo.
