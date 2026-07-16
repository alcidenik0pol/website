# Meta Aria: AI Cloth Detection

**Tagline:** AR cloth-detection pipeline for Meta's Aria glasses, presented to a Reality Labs VP.
**Date:** Dec 2023 (3-day workshop)
**Goal:** Meta Reality Labs Workshop (PhD-only cohort)
**Delivery:** 4-section Next.js app on Vercel, demoed to the VP of Reality Labs Research

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** (no public video, deck below)

## The Gist

An AR-powered cloth shopping app built during a 3-day Meta Reality Labs research workshop at Meta HQ. Aria glasses capture a feed, and the pipeline detects clothing on the person the user looks at.

The pipeline fuses eye tracking and GPT-4V for detection, cross-references purchase history through LangChain, searches SheIn for matches, and generates try-on images with Stable Diffusion and ControlNet.

The constraint was the hardware. Aria was a research prototype with sparse docs, and the workshop cohort was PhD-only. The author was selected for engineering skill despite not being a PhD candidate. The work was presented to the VP of Reality Labs Research.

## By the Numbers

- **6** models in the multi-modal pipeline (WhisperX, GPT-4V, LangChain, Detectron2, SD, ControlNet)
- **3** sensor streams fused (RGB, audio, eye gaze) via nanosecond timestamps
- **3**-day deadline on research-prototype hardware
- **4**-section Next.js app deployed on Vercel
- Presented to the **VP of Reality Labs Research**

## Engineering Challenges

### Voice-vision alignment across sensors

Three Aria streams (RGB, audio, eye gaze CSV) run on different time domains. Finding the style required a chain of lookups. The pipeline maps a word in the ASR output to the correct video frame, then to the nearest gaze datapoint, then to a 2D projection. Each step needed nanosecond-precision timestamp correlation across all three streams.

### Eye gaze to pixel projection

Mapping 3D gaze (yaw and pitch from MPS) to a 2D pixel required a transform chain. Gaze at fixed depth maps to the CPF frame, then to the sensor frame, then to camera projection through calibration intrinsics. The red cross overlay had to land on the right person for GPT-4V.

### ControlNet color bias

Stable Diffusion inpainting generated gray or muted clothing regardless of the prompt. The fix required explicit negative prompting and color repetition to produce vibrant results.

## Stack

`Project Aria SDK` `VRS format` `PyTorch` `WhisperX` `GPT-4 Vision` `LangChain` `Detectron2` `Stable Diffusion` `ControlNet` `Next.js` `React` `Supabase` `AWS S3` `Vercel` `Google Colab`

## Links

- [GitHub](https://github.com/alcidenik0pol/meta-aria-workshop)
- [Deck](https://github.com/alcidenik0pol/meta-aria-workshop/blob/main/presentation-deck/Aria4%20Final%20Presentation.pdf)
