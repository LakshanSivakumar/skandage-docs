---
sidebar_position: 10
id: sync-backup
title: 08. Sync & Backup
---

# Sync & Backup

Because Skandage is offline-first, there's no server holding a copy of your data for you. This page covers the two ways your data crosses devices — and what that means for backups.

## 1. iCloud Sync (Mac & iPad)

If you use Skandage on more than one Apple device, turn on **iCloud Sync** in [Settings](./settings) on each of them. It syncs your entire client database, saved fund blends, and Proposal Engine data through your own personal iCloud account — there's no Skandage server in the loop. Sync compares modification times and keeps the newer version, so make a habit of hitting **Sync Now** before you switch devices, not just after.

:::note
iCloud Sync is Mac and iPad only — there's currently no equivalent for Windows.
:::

## 2. Google Calendar (Meeting History)

Connecting a Google Calendar in Settings is what powers "last met" throughout the app. Skandage reads one calendar you nominate and matches past events to clients by attendee email, full name, or a first name unique enough not to be ambiguous. Anything genuinely uncertain — two clients sharing a first name, say — is queued for you to confirm rather than guessed at automatically. This runs at most once a day on its own, or on demand with **Scan for meetings** in Settings.

Only read access to your calendar is requested, and nothing is written back to it.

## 3. Backing Up Your Data

Your client database is a single encrypted file (`.skandb`) that lives on your hard drive. **iCloud Sync is currently the supported way to keep a live copy elsewhere** — if you're on a single device with sync turned off, back up that file the same way you'd back up any other important file on your machine (Time Machine, a manual copy to external storage, and so on).

> **Skandage Tip:** If you're moving to a new Mac or PC, set up iCloud Sync on the new machine *before* wiping the old one, and confirm the sync completed, rather than relying on a manual file copy.
