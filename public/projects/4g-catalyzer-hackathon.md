# 4G Catalyzer Hackathon: Synthetic Medical Ultrasound

**Tagline:** Fine-tuned Stable Diffusion on breast ultrasound to generate synthetic training data.
**Date:** Jul 2023 (1 month)
**Goal:** Hackathon hosted by Jonathan Rothberg (Butterfly Network)
**Delivery:** Gradio web app with img2img and text2img, 4-seed gallery output

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** (no public video, deck below)

## The Gist

This project fine-tuned Stable Diffusion v1.5 and v2 on breast ultrasound images from the BUSI dataset (780 images). It used DreamBooth and LoRA to generate synthetic medical images for augmenting tumor-detection training data.

The hard part was timing. This was July 2023, nine months after SD's public release. The diffusers library had to be pulled from a `0.20.0.dev0` dev build, because DreamBooth and LoRA were not yet in a stable release.

The delivered result was a live Gradio web app with img2img and text2img modes and a 4-seed gallery output, built for a hackathon hosted by Jonathan Rothberg.

## By the Numbers

- **4** model variants: SD v1.5 and v2, each with DreamBooth and LoRA
- **780** BUSI images across 3 classes (normal, benign, malignant)
- **3,000** training steps per checkpoint
- **768x768** img2img output resolution, in float16
- **4**-seed gallery output per query (live Gradio web app)

## Engineering Challenges

### Bleeding-edge tooling

This ran in July 2023, nine months after SD's release. diffusers was installed from the `0.20.0.dev0` GitHub `main` branch, because DreamBooth and LoRA support was still under development. No turnkey pipeline existed. The workflow was assembled from docs, example scripts, and checkpoint trial-and-error.

### Sequential multi-class training

Each variant needed 3 sequential rounds (normal, then benign, then malignant). Each round built on the prior checkpoint. A wrong checkpoint path meant retraining from scratch on a single GPU.

### Clinical realism

Synthetic images needed anatomical plausibility for downstream model training. Prompt engineering (tumor size, boundary clarity) and inference tuning (guidance scale 8.5 to 9.0, 20 to 25 steps) directly affected it.

## Stack

`PyTorch` `Hugging Face diffusers` `Stable Diffusion v1.5/v2` `DreamBooth` `LoRA` `xformers` `Gradio` `CUDA` `BUSI dataset` `img2img` `text2img` `sequential multi-class training` `checkpoint management`

## Links

- [GitHub](https://github.com/alcidenik0pol/4G-Catalyzer-LLM-Hackathon)
- [Deck](https://www.dropbox.com/scl/fi/wn5t0i5qyf1ww98y07sm4/Black_Mesa_Butterfly.pdf)
