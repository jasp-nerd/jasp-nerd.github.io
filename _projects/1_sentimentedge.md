---
layout: page
title: SentimentEdge
description: Stock market sentiment dashboard with FinBERT for financial news analysis. Includes a backtesting engine for evaluating sentiment-based trading strategies.
img:
importance: 1
category: ai/ml
github: https://github.com/jasp-nerd/SentimentEdge
---

Full-stack market sentiment dashboard that ingests financial news via the Finnhub API, classifies headline sentiment using FinBERT (with optional custom-trained DistilBERT), and visualizes sentiment-price correlation on a dual-axis chart. Tracks AAPL, MSFT, GOOGL, AMZN, and TSLA by default.

**Key features:**
- FinBERT-based sentiment classification with scores mapped to a -1 to +1 scale; optional fine-tuning script on Financial PhraseBank
- Backtesting engine with 3 strategies (threshold, momentum, contrarian) — computes Sharpe ratio, max drawdown, win rate, and equity curves
- Accuracy tracker comparing daily average sentiment against next-day price direction
- Paste-a-headline analyzer for ad-hoc sentiment classification
- APScheduler-driven background data ingestion on configurable intervals
- Demo mode with realistic mock data — works out of the box with zero configuration

**Architecture:** Flask REST API (8 endpoints) with SQLAlchemy + SQLite backend, React 19 / TypeScript / Vite frontend with Recharts visualizations. Composite indexes on (symbol, published_at) and (symbol, timestamp) for query performance.

**Tech stack:** Python, PyTorch, Hugging Face Transformers, Flask, SQLAlchemy, React, TypeScript, Vite, Tailwind CSS, Recharts
