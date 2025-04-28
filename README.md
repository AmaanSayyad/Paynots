# Paynotes Documentation

Welcome to **Paynotes** — a simple and powerful platform to create, manage, and share crypto income flows. Built for individual creators, freelancers, and fundraisers, Paynotes enables structured crypto payments with Account Abstraction and AI automation on the Polygon network.

---

# Introduction

**Paynotes** helps you:
- Create dedicated payment flows for different purposes.
- Attach existing wallets or create smart AA wallets easily.
- Share flows via custom links, QR codes, or embedded widgets.
- Track and manage incoming funds efficiently.
- Use AI agents to automate routing, tagging, and optimization.

> **Simplify your crypto income with Paynotes.**

---

# Motivation

- Inspired by Monobank's "Jar" system: flexible money containers for any purpose.
- Lack of Web3-native personal funding tools for creators and freelancers.
- Desire for smarter management using AI agents.

Paynotes brings crypto payments closer to how modern individuals operate online.

---

# How it Works

1. **Connect Wallet**
   - Use MetaMask, WalletConnect, or create a Paynotes AA Wallet.

2. **Create a Flow**
   - Set name, description, and destination wallet.
   - Configure optional policies like auto-save, income split, or tax tags.

3. **Share**
   - Get a link, QR code, or embeddable widget.
   - Add it to your website, blog, Twitter bio, etc.

4. **Manage**
   - Track incoming payments per flow.
   - Use AI agents to auto-categorize and optimize flows.

---

# Core Features

- **Multi-network support** (Polygon PoS, zkEVM)
- **Flexible wallet management** (attach external or create smart wallets)
- **Embeddable links and QR codes**
- **Simple branding customization**
- **AI Agent Automation**

---

# Smart Contracts Overview

- `PaynoteFactory.sol` — deploys new flows.
- `PaynoteFlow.sol` — manages incoming funds and policies.
- `AAWalletFactory.sol` — creates smart AA wallets.

Contracts are designed for:
- Minimal gas costs.
- Easy extension for flow metadata.
- Plug-in AI hooks.

Deployed on:
- Polygon PoS
- Polygon zkEVM

---

# AI Agent Capabilities (Coming Soon)

- **Income Router**: Auto-split incoming payments.
- **Tax Classifier**: Detect taxable vs donation income.
- **Embed Helper**: Generate social-optimized embeds.
- **Fraud Monitor**: Flag suspicious flow activities.


---

# Roadmap

- [x] MVP Launch (Polygon PoS)
- [ ] zkEVM Full Support
- [ ] Mobile Wallet Integration
- [ ] Advanced AI Agent Marketplace
- [ ] Public API and SDK


---

Happy building with Paynotes 🚀
