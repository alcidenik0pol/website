# Full-Stack M&A Intelligence Platform

**Tagline:** LangGraph agent that ranks M&A buyers from a plain-language thesis.
**Date:** Spring 2026 (Columbia IEOR4576E Capstone)
**Goal:** Columbia IEOR4576E Capstone
**Delivery:** $0.16/query, 243.7K tokens, 61s latency, traced via LangSmith

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** (no public video, deck below)

## The Gist

A LangGraph agent that takes a plain-language M&A thesis and returns a ranked buyer shortlist with reasoning and contact paths. A sample thesis might name acquirers for a 20M EBITDA SaaS business in DACH.

The agent uses a 7-node stateful graph with conditional routing. It runs hybrid search with reranking, and entity resolution over a 300K-company database.

The result replaces the old PitchBook filter-export-analyst workflow, which took days, with a single agent query that takes about 60 seconds. It was built as a Columbia IEOR4576E Agentic AI capstone.

## By the Numbers

- **7** nodes in the LangGraph stateful agent graph, with conditional routing
- **300K** companies in the entity-resolution database
- **~2,000** new deals ingested per week through the Firecrawl pipeline
- **$0.16** per query (243.7K tokens, 61s latency, LangSmith-traced)
- **96%** of compute cost comes from the `search_hybrid` retrieval tool

## Engineering Challenges

### Entity resolution at scale

The system relinks free-text buyer and target names, parsed from headlines, to a 300K-company database. Extraction is lossy. DeepSeek parses article titles in mixed languages and naming conventions. False matches and missed matches directly degrade the buyer shortlist quality.

### Cost dominated by retrieval

`search_hybrid` accounts for 96% of cost ($0.150 of $0.160) and 62% of latency. Agent reasoning itself is trivially cheap at about $0.005. Optimization means improving reranking precision without losing recall.

### One graph, three surfaces

Bankers, PE and VC deal teams, and founders all share one graph. The `entry_router` and `prepare_initial_context` nodes classify intent and adapt the tool loop. This avoids branching into three separate graphs.

## Stack

`LangGraph` `LangSmith` `DeepSeek` `Firecrawl` `hybrid search` `reranking` `entity resolution` `Python` `stateful graph` `conditional routing` `web scraping` `structured extraction`

## Links

- [Deck](https://www.dropbox.com/scl/fi/4wklritjuz4nmxxfg5hpr/CaptstonTopicInOrBuyer.pdf?rlkey=4enpk8ceaw5k8wpdc3xwqztdh&st=p55b8q3z&dl=0)
