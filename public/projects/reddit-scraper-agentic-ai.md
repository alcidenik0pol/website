# Reddit Scraper to Business Idea Generator

**Tagline:** 3-agent LangGraph pipeline that turns Reddit complaints into ranked business ideas.
**Date:** Feb 2026 (Columbia Agentic AI course)
**Goal:** Columbia Agentic AI course
**Delivery:** FastAPI + Next.js 15 on Cloud Run via Cloud Build, with WebSocket streaming

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** [Live deployment](https://agenticaicolumbia-fb.web.app/)

## The Gist

A 3-agent LangGraph pipeline that scrapes Reddit via the public JSON API, classifies and clusters complaints, and generates ranked business ideas grounded in real user evidence.

The pipeline runs Orchestrator, then Analyst, then Hypothesis. Each agent has its own system prompt and bound tools. Agents pass data through a shared store rather than the LLM context, which keeps context bounded regardless of post volume.

The app deployed as FastAPI and Next.js 15 on Cloud Run, with WebSocket streaming for real-time agent lifecycle events.

## By the Numbers

- **3** agents in the LangGraph StateGraph (Orchestrator, Analyst, Hypothesis)
- **10** parallel classification workers (ThreadPoolExecutor + Gemini 2.5 Flash)
- **2** model tiers: Flash for classify and cluster, Pro for hypothesis only
- **100** requests per 10 min, with a 6-sec minimum interval (Reddit rate limit)
- **1** live deployment on Cloud Run via Cloud Build, with WebSocket streaming

## Engineering Challenges

### Reddit API circumvention

The public JSON API blocks cloud-provider IPs. The workaround required an IPVanish SOCKS5 proxy for residential routing, 100 requests per 10 min throttling with a 6-sec minimum interval, and a `requests.Session` retry strategy. The proxy URL is stored in Google Secret Manager.

### Agent data flow without context overflow

The naive approach passes all posts through the LLM context and overflows at scale. Tools write to a shared store and a structured logger instead. The graph sends only pointers and summaries to the LLM, so context stays bounded regardless of post volume.

### Two-tier model orchestration

All classify and cluster calls use Flash (cheap). Only hypothesis generation uses Pro. The split is enforced at the tool level through a `use_fast` parameter, which makes it cost-aware orchestration rather than just model selection.

## Stack

`LangGraph` `Gemini 2.5 Flash/Pro` `Vertex AI` `scikit-learn` `KMeans` `FastAPI` `Next.js 15` `WebSockets` `Google Cloud Run` `Cloud Build` `Secret Manager` `Radix UI` `Python` `ThreadPoolExecutor`

## Links

- [GitHub](https://github.com/alcidenik0pol/project-2-agentic-ai)
- [Live deployment](https://agenticaicolumbia-fb.web.app/)
