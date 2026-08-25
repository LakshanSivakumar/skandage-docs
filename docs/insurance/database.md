---
sidebar_position: 3
id: database
title: 01. The Client Vault
---

# The Client Vault

Your database is the lifeblood of your business. The Client Vault is where your entire book of business lives — searchable, filterable, and editable, with nothing leaving your machine.

## 1. Importing Your Clients

You don't need to start from scratch.

* **PDF Batch Import:** Drop policy PDFs straight into the **Clients** screen and Skandage reads them to create or update client records automatically.
* **CSV / Excel Import:** Already have a tracker? Import a CSV or Excel file. Skandage matches rows to existing clients by name — if a client already exists, it adds any new policies from the file rather than overwriting what's already there, and duplicate policies are skipped rather than doubled up.
* **CSV Export:** You can export your book back out to CSV at any time from the same screen.

## 2. The Client List

The main **Clients** screen shows your whole book as a sortable table (name, status, phone, date of birth, derived age, and when you last met them). On a smaller window or on mobile, the same data shows as a card list instead.

Filter the list by:
* **Search** — matches on name.
* **Age range** — set a minimum, a maximum, or both.
* **Overdue** — clients whose last meeting is older than their own review cadence (set per-client — see below).

## 3. The Client Dossier

Click into any client to open their record. Each client stores:

* Name, date of birth, phone, email, address, and free-text notes.
* **Race** — used to target festive-greeting broadcasts appropriately (see [CRM & Engagement](./crm)).
* **Review frequency** — how often (in months) this client should be reviewed. This is what drives the "Overdue" filter.
* A list of policies, each with plan name, policy number, status, and premium (annual or single).

"Last met" isn't something you type in by hand — it's populated automatically once you connect your Google Calendar (see [Sync & Backup](./sync-backup)), matched from your actual meeting history.

From a client's record you can also tap **New Proposal** to jump straight into the [Proposal Engine](./proposal-engine) with their name and age already filled in. (This launches a bundled web module, so it isn't available on Windows.)

## 4. Cleaning Up Duplicates

Imported the same client twice from two different sources? Skandage's duplicate-merge tool walks you through it field by field — for every field that differs between the two records, you pick which value should win, rather than one record silently overwriting the other.

> **Skandage Tip:** Ask for an updated address at every annual review. It feeds directly into the [Map](./map), so a stale address means a client shows up in the wrong place — or not at all.
