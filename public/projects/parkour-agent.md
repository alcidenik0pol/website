# Reinforcement Learning Parkour Agent

**Tagline:** Full RL system: a Unity parkour environment and a PPO agent, both built and trained from scratch.
**Date:** Nov 2025
**Goal:** Personal project: a full RL system (environment + agent + training)
**Delivery:** 28 parallel agents via gRPC, 30 runs of 2M steps, Flask dashboard comparing 32 runs

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** [Demo video](https://www.youtube.com/watch?v=geAkthimaI0&list=PLA6y7UcWH-V7lt9u1fXue51Syps4l0Gp&index=6)

## The Gist

A reinforcement learning agent learns parkour movements (run, sprint, jump, roll) across procedurally generated platforms in a Unity 3D environment. It was trained with PPO and a stochastic reward-shaping mechanism.

Both the environment and the agent were built simultaneously from scratch. The build is 23 C# scripts plus a Python training pipeline.

The core constraint was feedback. Real-time human feedback is incompatible with training at 20x acceleration, which runs about 1,054 steps per second across 28 agents. Stochastic reward shaping approximates RLHF offline instead.

The result is a full RL system, not an agent trained in someone else's gym.

## By the Numbers

- **23** C# scripts, 5,527 lines (Unity environment)
- **28** parallel agents via gRPC (~1,054 steps/sec)
- **30** training runs of 2M steps each
- **14.8x** increase in roll usage from stochastic reward shaping
- **16%** reward improvement (+67.90 to +78.52)
- **2,751** lines of Python toolchain (Flask dashboard comparing 32 runs)

## Engineering Challenges

### Environment and agent as a moving target

Environment and agent were built simultaneously, so changes to platform generation, physics, or reward broke previously trained agents. Each environment change required retraining from scratch. That cost 2M steps, or about 30 min with 28 parallel agents.

### Reward calibration as a 3-stage search

The reward function is not analytically derivable in a procedural environment. Sprint bashing, roll ignoring, and insufficient incentive each required a separate training campaign to diagnose and fix. The dual-reward structure was the third design.

### Dual-stack C# + Python

Unity ML-Agents talks to Python via gRPC, but the Editor does not inherit env vars, so a file-based fallback was needed. Serialized prefab values also override code defaults for `[SerializeField]` fields, which caused silent config bugs.

## Stack

`Unity 6` `C#` `Python` `PyTorch` `Unity ML-Agents Toolkit` `PPO` `gRPC` `TensorBoard` `Flask` `procedural generation` `reward shaping` `actor-critic` `ablation study`

## Links

- [GitHub](https://github.com/alcidenik0pol/mirrorsedgepolicygradient)
- [Demo video](https://www.youtube.com/watch?v=geAkthimaI0&list=PLA6y7UcWH-V7lt9u1fXue51Syps4l0Gp&index=6)
- [Deck](https://www.dropbox.com/scl/fi/k10n44oqfsbsuc06fppb6/RLreportv9c.pdf?rlkey=5bje12il5zbw2o9ei9bf4xuax&st=zgisxrir&dl=0)
