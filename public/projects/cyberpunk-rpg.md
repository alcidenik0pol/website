# AI-Native 3D RPG (deusexdragon)

**Tagline:** AI-native 3D RPG where LLM dialogue resolves quests and unlocks levels.
**Date:** Apr 2025 to Aug 2025 (5 months)
**Goal:** Personal project: an AI-native game prototype
**Delivery:** 3-level Webpack-built prototype, all assets AI-generated (Trellis, Suno, ElevenLabs)

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** [Demo video](https://drive.google.com/file/d/110FcmJgdU1eOwg5Pv-QXF9nvBX9XceBS/view?usp=drivesdk)

## The Gist

An AI-native 3D cyberpunk RPG where progression is entirely dialogue-driven. The player talks to NPCs to gather information, and solving the quest through dialogue unlocks the next level.

The game runs an n+1 agent topology. Each NPC has its own dialogue agent with isolated state. One central quest-resolution agent monitors events and triggers in-world changes.

All assets are AI-generated. Trellis produces the meshes, Suno the music, and ElevenLabs the voice. The shipped result is a 3-level prototype built with Webpack.

## By the Numbers

- **3** shipped levels, with about 5 NPCs each
- **6** LLM models via OpenRouter (Gemma 3 27B, Qwen 3 14B, GPT OSS 20B, DeepSeek v3/R1)
- **n+1** agent topology: per-NPC dialogue agents plus a central quest agent
- **100%** AI-generated assets (Trellis meshes, Suno music, ElevenLabs voice)
- **60** fps with frustum culling and 10-frame light-cluster updates

## Engineering Challenges

### Light clustering under shader limits

Babylon.js caps active lights per mesh. The solution uses a distance-sorted priority queue, frustum dot-product filtering, and wall-occlusion ray-casting. The light set updates every 10 frames to hold 60 fps.

### Cross-model quest evaluation

Semantic correctness (did the condition trigger?) does not surface in latency or token-count dashboards. The same prompt and history resolved on DeepSeek R1 but silently failed on Qwen 3 14B. End-to-end eval across all six models selected Gemma 3 27B for production.

### Camera collision without a physics engine

A ray-cast runs from the character to the desired camera position, then snaps to the hit point at a 0.2-unit offset. There is no physics dependency.

## Stack

`Babylon.js` `TypeScript` `Webpack 5` `TailwindCSS` `OpenRouter` `Gemma 3 27B` `Qwen 3 14B` `DeepSeek R1` `Trellis` `Suno` `ElevenLabs` `GLB/GLTF` `server-sent events` `finite state machine` `ray-casting collision`

## Links

- [GitHub](https://github.com/alcidenik0pol/deusexdragon)
- [Demo video](https://drive.google.com/file/d/110FcmJgdU1eOwg5Pv-QXF9nvBX9XceBS/view?usp=drivesdk)
