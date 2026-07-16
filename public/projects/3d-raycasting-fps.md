# 3D Raycasting FPS Engine (cube3d)

**Tagline:** A complete FPS engine and playable game, implemented from scratch in C using only MinilibX for X11 pixel access.
**Date:** Apr 2024 to Sep 2024 (6 months)
**Goal:** 42 School final project: norm-constrained C
**Delivery:** 3 Makefile targets (mandatory, bonus, full game), 110 source files, single-header architecture

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** [Demo video](https://www.youtube.com/watch?v=kX3IMoM1J2w)

## The Gist

A complete FPS engine and playable game, implemented from scratch in C using only MinilibX for X11 pixel access. It uses the DDA raycasting algorithm with floor casting and sprite billboarding to reproduce the Helldivers tension loop: escalating spawns, lethal airstrikes, and extraction under fire.

The build follows the 42 School norm. The norm bans `for` loops and caps functions at 5 local variables. That constraint forces the 9,400-line codebase into small functions across 110 source files, all sharing one 987-line header.

## By the Numbers

- **9,400** lines of C, engine built from scratch
- **110** source files sharing a single 987-line header
- **624** XPM textures loaded at runtime
- **3** Makefile targets: mandatory, bonus, and full game
- **50**-channel OpenAL audio manager with MP3 decoding
- **200** concurrent enemies max, with 0.5% per-frame hit probability

## Engineering Challenges

### DDA floating-point corners

When a ray passes near a grid corner, floating-point imprecision can step into the wrong cell. An epsilon check at `1e-6` detects near-equal side distances and resolves the ambiguity by checking both adjacent cells. Without it, walls render with gaps or extended edges.

### Collision decoupled from rendering

The naive approach reuses raycasting results for collision, which couples visual resolution to gameplay physics. This engine uses a separate 11-point path interpolation with a 0.8-unit buffer. It runs its own grid checks at movement time, not render time.

### Single-header at 9,400 lines

The 42 norm bans `for` loops and VLAs, and caps locals at 5 per function. All 110 `.c` files share one 987-line header. The code splits into numbered files (from `raycasting00.c` to `raycasting09.c`) with disciplined naming to stay organized at scale.

## Stack

`C` `MinilibX (X11)` `OpenAL` `mpg123` `DDA raycasting` `floor casting` `sprite billboarding` `XPM textures` `fixed-point arithmetic` `XORShift64 PRNG` `linked list ray storage` `function-pointer script system` `Makefile` `single-header architecture`

## Links

- [GitHub](https://github.com/alcidenik0pol/cube3d)
- [Demo video](https://www.youtube.com/watch?v=kX3IMoM1J2w)
