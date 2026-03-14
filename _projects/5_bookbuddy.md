---
layout: page
title: BookBuddy
description: Book tracker with AI-powered recommendations using Google Books and Gemini.
img:
importance: 1
category: web apps
github: https://github.com/jasp-nerd/BookBuddy
---

Full-stack book recommendation platform with an AI chat assistant that gives personalized suggestions based on your actual reading history. Live at [bookbuddy.jasper-ai.tech](https://bookbuddy.jasper-ai.tech/).

**Key features:**
- Personal book library with three lists: Favorites, Read, and Want to Read
- AI chatbot ("BookBuddy") powered by Gemini 2.0 Flash — injects the user's full reading profile into each request for personalized recommendations
- Genre-based recommendations: analyzes your favorites to find your top genre and fetches suggestions via Google Books API
- Review system with 1–5 star ratings, sortable by rating or date
- "Most Favorited" aggregation across all users on the homepage
- Book search with pagination, language filter, and sort options

**Architecture:** Flask REST API with SQLAlchemy + SQLite backend (book lists stored as JSON columns), React 18 frontend with React Query for caching and React Router v6. Test suite covers routes, Gemini API, reviews, and search.

**Tech stack:** Python, Flask, SQLAlchemy, React, Tailwind CSS, React Query, Google Books API, Google Gemini 2.0 Flash
