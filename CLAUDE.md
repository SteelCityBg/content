# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a [Sanity Studio](https://www.sanity.io/) content management system for the Steel City Backgammon website. It is deployed to GitHub Pages at `content.steelcitybg.com`.

- **Project ID:** `tcz7hq3z`
- **Dataset:** `production`

## Commands

```bash
npm run dev          # Start local development server
npm run build        # Build for production
npm run deploy       # Deploy studio to Sanity hosting
npm run typegen      # Regenerate sanity.types.ts and schema.json after schema changes
```

## Architecture

This is a pure Sanity Studio v5 project — no custom frontend, just schema definitions and studio configuration.

**Schema types** live in `schemaTypes/` and are registered in `schemaTypes/index.ts`:

- **event** — Events with name, type (social/tournament/seminar), datetime, venue reference, descriptions, and photos
- **venue** — Venue records with address, contact info, map/website URLs, and thumbnail
- **faq** — FAQs with question text, PortableText answer, and display order
- **venueSearch** — Singleton-style document for the venue search page content (headline, body, images, form placeholder)

Events reference Venues via Sanity document references. FAQ answers and event extended descriptions use PortableText (block content arrays).

## After Schema Changes

Run `npm run typegen` to regenerate `sanity.types.ts` and `schema.json`. These generated files should be committed.

## Formatting

Prettier is configured with: no semicolons, single quotes, 100 char line width, no bracket spacing.
