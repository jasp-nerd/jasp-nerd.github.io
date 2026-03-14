---
layout: page
title: AI Text Detector
description: Fine-tuned DistilBERT classifier (66M params) for detecting AI-generated text, achieving 98% validation accuracy.
img:
importance: 2
category: ai/ml
github: https://github.com/jasp-nerd/ai-text-detector
---

Fine-tuned DistilBERT (66M parameters) on the GPT-wiki-intro dataset (~150k human vs. AI-generated text pairs) for binary text origin classification, achieving 98% validation accuracy after 3 epochs.

**Key features:**
- Full ML pipeline: AdamW optimizer with linear warmup (10% steps), gradient clipping, mixed-precision training (float16), and best-model checkpointing by validation accuracy
- Apple Silicon MPS GPU acceleration support
- Gradio web interface with live confidence scores, probability bar chart, and example texts
- CLI prediction mode and importable Python API (`from predict import TextDetectorPredictor`)
- Documented limitations: domain-specific to Wikipedia-style text, unreliable on short texts (<100 chars), trained on GPT-2 era output

Developed as part of AI literacy research at VU Amsterdam, with a focus on responsible deployment.

**Tech stack:** Python, PyTorch, Hugging Face Transformers, Gradio, scikit-learn
