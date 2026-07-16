# Yitu Tech: SSD Object Detection on KITTI

**Tagline:** SSD object detection trained from scratch, ranked 10/30 at the Yitu hackathon.
**Date:** Feb 2019 (3-day hackathon)
**Goal:** Hackathon at Yitu Tech Singapore, ranked 10/30
**Delivery:** AWS EC2 GPU training, COCO eval pipeline over 5,320 test images, ranked 10/30

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** (no public video)

## The Gist

A team of 3 NUS engineers trained an SSD MobileNet V1 model from scratch at the Yitu Tech Singapore AI Hackathon. The benchmark was a modified KITTI 2D dataset with 6,448 training images and 5,320 test images, for 2-class detection of cars and pedestrians.

The hard constraint was strict. No pre-trained weights and no external data were allowed. With only 6,448 samples, the team relied on hand-tuned data augmentation and hyperparameter search.

The model ranked 10th out of 30 teams. Training and COCO evaluation ran on an AWS EC2 GPU.

## By the Numbers

- **10th** of 30 teams (Yitu Tech Singapore AI Hackathon)
- **6,448** training images (modified KITTI 2D)
- **5,320** test images (modified KITTI 2D)
- **2** detected classes: cars and pedestrians
- **20,000** training steps, batch size 24, no pre-trained weights
- **6** anchor-box layers, scales 0.2 to 0.95
- **5,320** test images run through the COCO eval pipeline on AWS EC2 GPU

## Engineering Challenges

Training SSD from scratch with no pre-trained weights and no external data meant only 6,448 samples were available. That required hand-tuned data augmentation and hyperparameter search.

Class imbalance between cars and pedestrians demanded careful adjustment of hard example mining parameters. The goal was to control the foreground-to-background ratio within a single weighted mAP metric.

Anchor-box scales and aspect ratios across 6 feature-map layers were hand-configured for recall at multiple object scales.

The submission pipeline ran batch inference across all 5,320 test images. It applied per-class confidence thresholding and NMS, with an IoU threshold of 0.6 and a maximum of 100 detections per class.

## Stack

`Python` `TensorFlow` `SSD MobileNet V1` `TF Object Detection API` `RMSProp` `TFRecord` `Protocol Buffers` `COCO metrics` `NMS` `hard example mining` `AWS EC2` `GPU` `PIL` `numpy`

## Links

- (No public repo. 2019 hackathon; code retained by the team.)
