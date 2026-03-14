---
layout: page
title: VU Education Lab AI Assistant
description: Chrome extension that turns any webpage into summaries, quizzes and teaching tips. Live on the Chrome Web Store.
img:
importance: 2
category: tools
github: https://github.com/jasp-nerd/VU-Education-Lab-AI-Assistant-for-Teachers
---

Chrome extension (Manifest V3) built for VU Amsterdam educators as a pilot project with the Centre for Teaching and Learning. Select any webpage or in-browser PDF and generate summaries, quizzes, explanations, teaching suggestions, or custom prompts — with streaming AI responses in English or Dutch.

**Key features:**
- 5 AI-powered tools: Summarize, Quiz Generator, Explain, Teaching Suggestions, Custom Prompts
- Real-time streaming responses via Server-Sent Events (SSE) from Azure OpenAI
- Web page and PDF content extraction from any active browser tab
- Bilingual interface (EN/NL) with i18n via JSON locale files; AI responses match the selected language
- Draggable floating window (iframe-based) that can be positioned anywhere on the page
- Google OAuth 2.0 authentication restricted to VU domains (@vu.nl, @student.vu.nl, @amsterdamumc.nl, @acta.nl)
- Automatic token refresh every 30 minutes via background service worker
- GDPR compliant — no data storage, EU-based processing, API keys server-side

Currently live on the [Chrome Web Store](https://chromewebstore.google.com/detail/vu-education-lab-ai-assis/mehgkempbebagedafdmlkojjlmkbcgno) and rolling out as a pilot across university departments.

**Tech stack:** JavaScript, Chrome Extensions API (Manifest V3), Azure OpenAI API, Azure App Service, Google OAuth 2.0
