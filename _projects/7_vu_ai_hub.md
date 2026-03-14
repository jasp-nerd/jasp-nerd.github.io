---
layout: page
title: VU AI Hub
description: Course resources, quizzes and study tips for VU Amsterdam AI students. Built with React + Vercel.
img:
importance: 2
category: web apps
github: https://github.com/jasp-nerd/vu-ai-hub
---

Open-source community platform for VU Amsterdam BSc Artificial Intelligence students — covering 20+ courses across all 3 years including specializations. Live at [vu-ai.vercel.app](https://vu-ai.vercel.app/).

**Key features:**
- Per-course detail pages with 7 tabs: Overview, Tips & Advice, Quizzes, Practice Problems, Exam Practice (essays), Resources, and AI Chat
- Interactive quizzes with scoring, difficulty levels, and explanations
- AI chat assistant per course — uses course-specific content (tips, quizzes, resources) as context, streamed via SSE through a Vercel serverless function proxying OpenRouter
- 15+ detailed markdown summaries with KaTeX math rendering for formula sheets
- Downloadable study resources (summaries, crash course notes) covering 18 courses
- Student guide section with blog, FAQ, program info, and Amsterdam city guide
- Dark mode support and contribution system for non-technical contributors

**Architecture:** React 19 / TypeScript SPA with code-split lazy-loaded routes, Vite 7 build, and Tailwind CSS 4. All content stored as static TypeScript data files (no database). Vercel serverless function (`api/chat.ts`) proxies AI chat to OpenRouter with streaming. Security headers configured in `vercel.json`.

**Tech stack:** React, TypeScript, Vite, Tailwind CSS, React Router, React Markdown, KaTeX, Vercel, OpenRouter API
