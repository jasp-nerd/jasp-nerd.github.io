---
layout: page
title: Canvas Course Downloader
description: Chrome extension to bulk-download all files, assignments, and resources from Canvas LMS courses. Published on the Chrome Web Store.
img:
importance: 1
category: tools
github: https://github.com/jasp-nerd/canvas-course-downloader
---

Chrome extension (Manifest V3) that bulk-downloads everything from your Canvas LMS courses — no API tokens needed, uses session cookies. Works on any Canvas instance including self-hosted. Published on the Chrome Web Store and compatible with Chrome, Edge, Brave, and Firefox.

**Key features:**
- Downloads 9 content types: files, pages, assignments, discussions, announcements, modules, syllabus, grades (CSV export), and linked/embedded files
- Hidden file extraction — parses HTML from pages and assignments to find files not listed in the Canvas file browser
- Multi-course batch download with course selector grouped by term
- ZIP bundling (DEFLATE compression), incremental mode tracking previously downloaded files
- 4 built-in presets: Full Archive, Files Only, Text Content Only, Linked Files Only
- Configurable throttling (50–5000ms), conflict handling (uniquify/overwrite/skip), and folder prefixes
- Export manifest with metadata (date, file counts, source URL, version)
- Keyboard shortcut (Ctrl+Shift+D / Cmd+Shift+D)

**Architecture:** Pure vanilla JavaScript with no dependencies beyond JSZip. Content scripts handle Canvas page detection (Instructure domains + DOM fingerprinting), REST API communication with retry/exponential backoff and pagination, and UI injection into Canvas breadcrumbs. Background service worker manages a sequential download queue.

**Tech stack:** JavaScript, Chrome Extensions API (Manifest V3), JSZip, Canvas REST API
