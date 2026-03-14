---
layout: page
title: Media Bias Detector
description: Chrome extension proof-of-concept that highlights potentially biased phrases in news articles.
img:
importance: 3
category: ai/ml
github: https://github.com/jasp-nerd/media-bias-detector
---

Chrome extension proof-of-concept (Manifest V3) that scans news articles for emotionally loaded language and highlights potentially biased phrases in real time. Designed as a concept demonstration for AI-assisted media literacy.

**Key features:**
- Real-time keyword highlighting — content script scans page text against a curated list of biased/emotionally loaded phrases and highlights matches inline
- On-demand page analysis via extension popup
- Pure vanilla JavaScript with no external dependencies or build tools

**Tech stack:** JavaScript, Chrome Extensions API (Manifest V3)
