---
sidebar_position: 4
id: map
title: 02. The Map
---

# The Map

Stop wasting time crisscrossing the island for appointments. The **Map** screen plots every client with a known address on a live map of Singapore.

## 1. Reading the Map

* Client markers **cluster** automatically as you zoom out, so a dense area like the CBD collapses into a single count instead of a wall of overlapping pins — zoom in and they split apart again.
* Your own address shows as a distinct **home base** marker, geocoded from the address in your [Settings](./settings) profile.
* The map needs an internet connection to draw its tiles (it isn't cached for fully offline use) — your client data itself stays local either way.

## 2. Finding Who's Nearby

Rather than searching by radius, the side panel lists every client currently **within the visible map area** ("In View"), sorted by distance from the center of your screen. Pan or zoom the map and the list updates to match — going to Tampines for a review? Pan the map there and the panel shows you who else is close by, closest first.

The search bar at the top does two things: type a client's name to jump straight to their pin, or type an address or area to geocode it and pan the map there.

## 3. Acting on a Client

Select a client's pin (or their row in the "In View" list) to open a quick card with two actions:
* **WhatsApp** — message them directly.
* **Navigate** — opens Google Maps for turn-by-turn directions from wherever you are.

## 4. Automatic "Last Met" Tracking

The Map doesn't just show *where* your clients are — combined with [Google Calendar sync](./sync-backup), it's also how Skandage knows *when* you last saw them. Calendar events are matched to clients by attendee email, full name, or a unique first name; anything ambiguous (two clients who share a first name, say) is queued for you to confirm rather than guessed at. That "last met" date is what powers the **Overdue** filter back in the [Client Vault](./database).

> **Skandage Tip:** A pin only appears if the client has a valid, geocoded address. If someone's missing from the map, check their address is filled in on their [client record](./database).
