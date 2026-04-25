# 🌟 VeriLux — Luxury Cosmetics Authentication Platform

> **One platform. Every luxury product. 100% authenticated.**

🌐 **Live Demo:** [https://verilux-one.vercel.app/](https://verilux-one.vercel.app/)

---

## 📋 Project Details

| 🏷️ Project | Luxury Cosmetics Authentication Platform |
|------------|------------------------------------------|
| 👩‍💻 Creator | Parakala Lakshmi Hariti |
| 🌐 Live Link | [verilux-one.vercel.app](https://verilux-one.vercel.app/) |
| 🚀 Deployed On | Vercel |

---

## 💡 About the Project

**VeriLux** is a luxury cosmetics authentication and marketplace platform that guarantees every product sold is 100% genuine. Instead of trusting seller claims blindly, customers can verify any product's authenticity in seconds — using batch codes, NFC taps, or holographic seal scans — before and after purchase.

Every listing includes everything a customer needs to trust their buy — the batch signature, origin facility, manufacture date, blockchain passport link, ingredient trace, and supply chain map. When ready, a single click redirects to a secure, verified checkout.

---

## ❗ The Problem Being Solved

Consumers purchasing skincare and cosmetics through online marketplaces live in fear:

- 😰 **Counterfeit products** flood online marketplaces with no platform-level checks
- 📦 **Expired inventory** is resold with falsified or missing manufacture dates
- 🧪 **Tampered packaging** — refilled containers and diluted formulas pass undetected
- 🔍 **No batch verification** — platforms never cross-check products against manufacturer databases
- 🌟 **No holographic authentication** — anyone can print a fake label with no tamper detection
- 🏭 **Zero manufacturing transparency** — customers have no access to origin or supply chain data

VeriLux addresses all of this with a four-layer authentication system that makes counterfeiting provably impossible.

---

## ✨ What VeriLux Does

| Feature | Description |
|---------|-------------|
| 🌐 Batch Verification | Cross-references GS1 global databases to confirm origin, expiry, and GTIN |
| 🔗 Digital Passport | Immutable blockchain record of every product's full lifecycle, on-chain |
| 🌟 Holo-Seals | Cryptographic holographic seals applied at source — destructible on tamper |
| 📡 NFC Tap-to-Verify | Tap any NFC-enabled phone to the product for instant passport retrieval |
| 🧪 Chemical Trace | Verifies each ingredient's source matches the brand's registered formula |
| 🗺️ Supply Chain Map | Visual timeline of every step from raw material to customer delivery |
| 🛍️ Curated Marketplace | Only pre-authenticated luxury products are listed — no unverified sellers |
| ✅ Auto Failure Handling | Failed verification shows exact reason and auto-initiates refund |
| 📱 Responsive Design | Works seamlessly on desktop, tablet, and mobile |

---

## 🖥️ Pages

### 🏠 Home Page
The landing page of VeriLux. Features a bold hero section, an overview of The VeriLux Standard (Batch Verification, Digital Passport, Holo-Seals), and clear CTAs to verify a product or browse the marketplace.

### 🔍 Verify Page
The authentication engine. Customers scan a holographic seal, tap via NFC, or manually enter a batch code. The engine queries all four verification layers simultaneously and returns a full authenticated passport or a precise failure reason — in seconds.

### 🛍️ Marketplace Page
The curated collection. Every listing displays the product's verification badge (Sealed & Verified, Blockchain Logged, GS1 Synced) alongside full details. Network Active status confirms the blockchain is live.

### 📜 Product Passport Page
The full provenance record for each product. Shows batch signature, origin facility, manufacture date, smart contract address, ingredient chemical trace, and supply chain map — all in one place.

---

## 🃏 Product Card At a Glance

Each marketplace card shows:

```
┌──────────────────────────────────────────────┐
│  🧴 Crème de la Mer         [Moisturizer]    │
│  🏢 La Mer                                   │
│  📦 60ml / 2oz    💰 $380.00                 │
│                                              │
│  🌟 Miracle Broth™ — the moisturizer that    │
│  started it all. Heals dryness and           │
│  powerfully restores radiance.               │
│                                              │
│  [VIEW PASSPORT →]   ✅ Sealed & Verified    │
└──────────────────────────────────────────────┘
```

---

## ⚙️ How It Works

Products are registered in VeriLux's authentication engine before going live on the marketplace. When a customer scans or inputs a batch code, the engine cross-references the GS1 global database, queries the product's on-chain smart contract, validates the holo-seal cryptographic token, and checks the NFC chip signal — all simultaneously. Results are returned in real time. Login state persists via browser storage across sessions.

---

## 🔄 Verification Flow

```
📦 Receive Product
       │
       ▼
📱 Scan Holo-Seal / NFC Tap / Enter Batch Code
       │
       ▼
🔍 VeriLux Engine Runs 4-Layer Check
  ├── 🌐 GS1 Database — origin, expiry, GTIN
  ├── 🔗 Blockchain — full provenance history
  ├── 🌟 Holo-Seal — cryptographic token match
  └── 📡 NFC Signal — chip ID confirmation
       │
       ▼
✅ AUTHENTICATED — Full passport displayed
❌ FLAGGED — Exact failure reason + auto refund
```

---

## 🛍️ Verified Products

| 🧴 Product | 🏢 Brand | 💰 Price | ✅ Status | 🔑 Batch Code |
|-----------|---------|---------|----------|--------------|
| Crème de la Mer | La Mer | $380 | Sealed & Verified | `LM-0925-NX` |
| Advanced Night Repair | Estée Lauder | $115 | Blockchain Logged | `ANR-1124-SE` |
| Facial Treatment Essence | SK-II | $235 | GS1 Synced | `SKII-0825-FT` |

---

## 📊 Platform Stats

```
🌐 4 Verification Layers     🔗 Blockchain-Backed
🛍️ 3 Luxury Brands           📡 NFC Ready
✅ 100% Authenticated         📱 Fully Responsive
```

---

## 🚫 Project Scope

This is a **frontend project** — it demonstrates the full VeriLux authentication experience and marketplace interface. Product data and passport records are self-contained within the application. The Apply / Buy button redirects customers to official brand websites for the actual purchase process. Blockchain and GS1 integrations are represented through the UI layer.

---

## 🙏 Acknowledgements

Built with a passion for solving luxury authenticity in the digital age. Grateful to everyone who provided feedback, tested the platform, and believed in the idea that every consumer deserves provable product truth.

---

**⭐ VeriLux — Authenticity Guaranteed, one scan at a time.**
