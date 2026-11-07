# StackCraft OC — Strategic Underwriting & Community Advocacy Canvas

**Built at:** Claude Impact Lab: UCI × SoCal Affordable Housing  
**Date:** November 7, 2026  
**Team:** Someone Cool  
**Developer:** Kate Lay (Solo Builder)  
**Lane:** 3 — Fund It + Your Own Direction  

> **"Empowering immigrant families to co-author compliant affordable housing stacks."**

---

## 1. Project Paradigm & The Core Problem

Affordable homeownership projects in Orange County, CA almost never "pencil" on their own using standard bank tools. Because low-income purchase prices are statutorily capped by income constraints (housing costs must stay strictly between 30% to 35% of a household's gross earnings), the purchase price cannot rise to cover modern infill creation costs. This architectural math creates a devastating six-figure fundraising gap per unit. 

Today, small teams of nonprofit developers, development directors, and municipal analysts manually assemble these capital stacks by hand using massive, fragile Excel models. When interest rates shift, or when state data drops, these models break. Furthermore, traditional institutional tools completely isolate the non-English speaking family circles from the actual financial underwriting of their future homes.

**StackCraft OC** solves this by shifting the application away from a cold B2B spreadsheet into a dynamic, bilingual **Community Capital Advocacy Canvas**. It enforces the statutory backward-math of **CA Health & Safety Code § 50052.5** to calculate supportable pricing, while structurally integrating the informal survival wealth frameworks utilized by working-class immigrant communities.

---

## 2. Core Architectural Components

### 🧮 The Inverse Underwriting Ledger
Traditional bank forms start with what an individual can borrow and tell them what home to buy. StackCraft OC's **Inverse Ledger** starts with the fixed **Total Creation Cost** ($535,000 baseline) [1] and subtracts statutory affordable limits to isolate the exact remaining **Base Fundraising Gap**. It explicitly counts fragmented community assets—such as Multi-Generational Income, Sweat Equity hours, and informal credit networks—as direct dollar-for-dollar asset reductions of the public gap.

### 📈 The Interest Rate Shock Matrix
With the home price legally capped by income bounds, any upward macro movement in mortgage interest rates cannibalizes a low-income family's borrowing power and directly swells the fundraising gap. StackCraft OC implements an interactive **Interest Rate Shock Slider** (4.5% to 8.5%). Moving the slider dynamically stresses the capital stack by 0.25% increments and aggressively shifts UI accent colors (green to red alert), visually proving project vulnerability to donors and city councils.

### 🌐 Toggleable Bilingual Co-Authoring View
Intake meetings shouldn't gatekeep numbers behind an English-only interface. Toggling **Co-Authoring Mode** morphs the workspace into a shared, side-by-side bilingual workspace (**English mapped alongside Tiếng Việt, Español, Korean, or Tagalog**). This allows a housing coordinator and an immigrant family circle to actively review, edit, and co-author the viability of their own stack together in real time.

### 🧠 Community Capital Interpretive Engine (AI Integration)
To eliminate compliance errors, **AI is completely isolated from all math functions**, which are handled by a deterministic JavaScript calculation engine. Instead, Claude operates as a qualitative **Interpretive Engine**. It ingests the family's raw survival assets and dynamically translates them into formal, audit-ready compliance text (e.g., translating a "Vietnamese Hui rotating pool" into a *“Structured Community Asset Distribution Framework with verifiable co-signers under § 50052.5”*), preventing institutional gatekeepers from rejecting alternative equity assets.

---

## 3. Quick Start (Try It Locally)

Follow these exact steps to run the interactive sandbox application container locally on a laptop:

```bash
# 1. Clone the repository
git clone https://github.com
cd stackcraft-oc

# 2. Install project dependencies
npm install

# 3. Force execution on a clear development port to bypass active EADDRINUSE slots
npm run dev -- --port 8080
```
* **Prerequisites:** Node.js (v18+) and npm installed globally.
* **Environment Variables:** Create a local `.env.local` file and add `VITE_ANTHROPIC_API_KEY=your_key` to activate live contextual jargon tooltips. Mock data payloads step in automatically if keys are absent.

---

## 4. Technical Telemetry, Sources & Assumptions

### Production & Verification Data Mapping

| Item | Source or Legal Framework | Context & Verifiability |
| :--- | :--- | :--- |
| **$535,000 Creation Cost Baseline** | **ASSUMPTION:** Synthetic example deal configuration provided in brief guidelines. | Checked: Nov 7, 2026 |
| **$285,000 Affordable Purchase Cap** | **ASSUMPTION:** Synthetic low-income capacity provided in hackathon parameters. | Checked: Nov 7, 2026 |
| **CA Health & Safety Code § 50052.5** | **LAW:** California statutory affordable cost backward-math framework. | Verified |
| **Multi-Generational Multipliers** | **DATASET:** Official California HCD Orange County income thresholds (2 to 7+ person arrays). | Verified |
| **Santa Ana "My First Home" DPA** | **PROGRAM:** City of Santa Ana Down Payment Assistance local municipal border locks. | Verified |
| **AAPI Hui / Latino Tanda Inputs** | **ASSUMPTION:** Alternative community rotating savings credit inputs. | Model Entry |

### System Status: Real vs. Mocked

| Component / Sub-System | Status Tracker |
| :--- | :--- |
| **Isolated Underwriting Arithmetic Core** | **WORKING** — Programmatic JavaScript executes statutory backward-math flawlessly. |
| **Interactive Stress-Testing Slider** | **WORKING** — Color-shifting grid reacts instantaneously to rate variables. |
| **UI String Translation Modules** | **WORKING** — Clean, real-time UI localization toggling across languages. |
| **Live Portal REST Ingestion Layer** | **MOCKED** — Configured for CKAN API endpoints; reads local offline tables for speed. |
| **Claude API Narrative Stream** | **MOCKED** — Tooltip layout wires are active; streams custom static text if keys are blank. |

---

## 5. Where It Gets Things Wrong & Next Steps

* **What it misses:** The system currently lacks automated cron-jobs to alert analysts when California HCD parameters refresh mid-year. It does not calculate secondary commercial debt service coverage metrics for complex multi-tiered multifamily layouts. 
* **What we would do with one more week:** Connect active live REST handlers to the state portal datasets, implement automated date-stale warning flags, and build clean dual-language tabular structures inside the downloadable PDF brief layouts.

---

## 6. Data, Privacy & License

This workspace leverages only public or provided synthetic data models. It contains zero personally identifiable information (PII) regarding real tenants, buyers, or Orange County residents. It does not submit live municipal documentation or contact external agencies.

Distributed under the **MIT License**. See `LICENSE` for details.
