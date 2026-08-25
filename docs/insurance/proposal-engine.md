---
sidebar_position: 6
id: proposal-engine
title: 04. The Proposal Engine
---

# The Proposal Engine

The Proposal Engine is where a fact-find turns into a client-ready pack. It's twelve linked modules, grouped into four sections along the left rail, so instead of juggling a dozen spreadsheets you fill each screen in once and print or export the whole thing as polished PDFs.

Open it from a client's record (**New Proposal**) to start pre-filled with their name and age, or launch it fresh from the sidebar. Every module has its own **Print / PDF** button in the top bar.

:::note
The Proposal Engine runs as a bundled module inside the app and isn't available on Windows.
:::

## Client Pack

The three modules you print and hand to the client at the start of a meeting.

### Cover Page
A clean title page: client name, your name, role and a short tagline, and your firm's logo (upload one, or it falls back to your initial). Your name and role pull automatically from your [Agent Profile in Settings](./settings) so you don't retype it on every proposal — leave the client name field blank and it shows the Policy Summary owner's name instead.

### Policy Summary
The single source of truth for every in-force policy. Drag and drop the client's Sales Quotation System (SQS) or benefit illustration PDFs directly onto the table and Skandage reads them in — you'll see a status line confirming how many policies were loaded. Each row captures death sum assured, TPD, Critical Illness, Early-Stage CI (with an **Accelerated / Additional** toggle — see the note below), waiver, accidental death, cash value, and payment term, and the table totals everything automatically. A premium contribution chart underneath shows exactly which year each policy's premiums drop off.

:::info Accelerated vs. Additional
Early-Stage CI cover is normally *accelerated* from Critical Illness — a claim reduces the CI payout by the same amount. Toggle a row to **+ Additional** only if that particular rider genuinely stacks on top of CI without reducing it. This flag is what makes the Coverage Gap numbers below correct.
:::

### Coverage Gap
A set of donut charts — Death, TPD, Critical Illness, Early-Stage CI and more — comparing cover held against a target (a multiplier of annual income, adjustable per category) built live from the Policy Summary. The Early-Stage CI card automatically splits into its accelerated and additional portions using the toggle from Policy Summary, with a plain-English note explaining what each portion means for the client. Policies that cover someone else's life (a spouse, a child) can be excluded with one click so they don't inflate the gap picture.

## Planning

The modules you build out live with the client, or beforehand as prep.

### Proposal
A year-by-year benefit schedule builder for a single plan — death benefit, premium term, policy term, and the individual riders attached to it.

### Retirement
CPF-integrated retirement modelling. Enter current age, retirement age, life expectancy, monthly income, cash savings, CPF OA and SA balances, and any housing loan deducted from OA, and Skandage projects a peak-wealth curve and tells you the age funds run out at — the two headline numbers every retirement conversation needs. Timelines can also be imported from an Excel file if you're migrating from an existing tracker.

### Accumulation
What starting early is actually worth — projects a chosen contribution compounded to a target age, useful for the "why not wait" conversation. Supports comparing two savers side by side.

### PRUWealth Timeline
Models a single premium going in and scheduled withdrawals coming out, tracking the account value all the way to age 100.

## Analysis

The modules you reach for when a specific question comes up.

### Protection Timeline
Two protection structures — for example, a whole-life plan versus a term-plus-investment combination — charted side by side across the client's whole life, so the trade-off is visual rather than a wall of numbers.

### Fund Review
A money-weighted return (XIRR) calculator for a single ILP, read straight from its policy PDFs. (This is different from the standalone [Fund Explorer](./fund-explorer), which tracks live fund prices across multiple funds and insurers rather than one client's historical PDFs.)

### F&B Analysis
Breaks down where a client's income actually goes each month against a reference benchmark, and what's realistically left over to save — the numbers behind a "you can afford more cover than you think" or "here's where the leakage is" conversation.

### Premium Financing
A historical SORA rate chart (optionally overlaid with the US Fed Funds Rate for context) paired with a net-payout simulator: key in the single premium, deposit percentage, spread over SORA, and projection years, and it calculates the net monthly payout after financing costs — including a stress-test breakeven line showing the point at which the payout would hit zero under a rate-tier scenario.

## Resources

### Resources
A curated library of articles and links — with a title, URL, category, and a short summary of what each is useful for — that you can build up over time and pull from when a client conversation calls for third-party evidence rather than just your own word.
