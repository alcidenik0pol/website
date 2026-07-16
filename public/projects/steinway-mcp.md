# Steinway & Sons: Factory MCP Server

**Tagline:** MCP server exposing 22 analytical tools over Steinway factory labor data.
**Date:** Feb 2026 to May 2026 (3 months)
**Goal:** Client: Steinway & Sons, 3 months
**Delivery:** Windows .exe + macOS app for factory supervisors, via PyInstaller + GitHub Actions

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** [Demo](https://victortenneroni.com/demo/steinway-mcp)

## The Gist

An MCP server that exposes 22 analytical tools over Steinway & Sons piano factory labor data. Floor supervisors query utilization, efficiency, and overtime through natural language instead of manual Excel reports.

The 22 functions are pure pandas, with zero MCP, LLM, or UI imports. The same codebase serves three inference paths with no duplication: a standalone MCP server, an in-process chat engine, and a Gemini MCP client.

The system shipped as a Windows .exe and a macOS app through PyInstaller and GitHub Actions. The end users are factory supervisors with no software engineering background.

## By the Numbers

- **22** pure-pandas analytical tools (1,576 lines in `mcp_tools.py`)
- **3** inference paths, zero code duplication (MCP server / in-process / Gemini client)
- **2** BC ERP exports joined on a composite key
- **2** platforms shipped: Windows .exe + macOS app (PyInstaller + GitHub Actions)
- **~2** months from scoping call to delivered .exe

## Engineering Challenges

### Pure-function boundary across 3 paths

Every tool takes DataFrames and filters and returns JSON-serializable dicts. FastMCP and Gemini function-calling consume them without adapters. A manual tool-calling loop (up to 20 iterations) was built because google-genai's auto-calling does not support in-process closures.

### Composite join key

Operation No. repeats across 4 production levels. The correct unique key (Production Order + Standard Task Code) was discovered by cross-referencing with the client's IT lead over two meetings. A wrong key silently inflates every per-operator metric.

### Silent data-quality traps

Aggregating by terminal hardware ID (shared across shifts) instead of employee ID inflated per-operator metrics. A 0.5h minimum threshold was needed to exclude 30-second scans that otherwise showed 4,500% efficiency.

## Stack

`FastMCP` `MCP` `Python` `pandas` `numpy` `Gemini 2.5 Flash` `Vertex AI` `google-genai` `Shiny` `Plotly` `PyInstaller` `GitHub Actions` `Business Central ERP`

## Links

- [GitHub](https://github.com/alcidenik0pol/columbiaprocessimprovementgrowth)
- [Demo](https://victortenneroni.com/demo/steinway-mcp)
