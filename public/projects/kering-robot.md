# Kering Group Warehouse Robot

**Tagline:** Wheeled Pi robot that scans a 200K-SKU warehouse for Kering luxury brands.
**Date:** Sep 2025 to Apr 2026 (8 months)
**Goal:** Client: Kering (Gucci, YSL, Balenciaga, Bottega), 8 months
**Delivery:** Multi-arch Docker via GitHub Actions with Watchtower auto-pull on Pi CM4. Under 10 min code-to-robot cycle

<!-- HERO VIDEO — autoplay, muted, loop. Main element of the page. -->
**Watch:** (demo video to be added)

## The Gist

A wheeled Raspberry Pi robot that scans barcode-labeled inventory across a 200,000+ SKU footwear warehouse for Kering brands (Gucci, Saint Laurent, Balenciaga, Bottega Veneta). It replaces manual cycle counts with a camera-based detection pipeline and live remote control through a web UI and Discord.

The hardware constraints were tight. The Pi CM4 has no GPU (CPU only). It exposes only 2 USB ports for 5+ peripherals. The aisles are 49 inches wide and the shelves are 81 inches tall.

The system was delivered as a teleoperated scanning platform over an 8-month client engagement.

## By the Numbers

- **200,000+** SKU footwear warehouse served
- **16** REST endpoints in the Flask backend (472 lines)
- **$871.26** total hardware expenditure
- **<10 min** code-to-robot deploy cycle (multi-arch Docker + Watchtower)
- **6 FPS** two-stage barcode detection (Scharr gradient + pyzbar)

## Engineering Challenges

### Camera decoding failed at warehouse distance

OpenCV and pyzbar could not resolve barcode detail from the aisle center to the shelf. The team pivoted to a dedicated Zebra DS457 scanner with a 70cm read range and on-board decode. That scanner then arrived without its RS232 cable.

### USB port starvation

The system needs 5 or more USB connections (camera, motor, LiDAR, scanner, WiFi). The CM4 IO Board exposes only 2. No powered hub exists that is compatible with battery operation. This remains an unresolved constraint for full sensor integration.

### CI/CD was the only zero-friction subsystem

Multi-arch Docker via GitHub Actions and Watchtower auto-pull never required manual intervention across 7 months. Infrastructure investment pays off on constrained hardware.

## Stack

`Raspberry Pi CM4` `Python` `Flask` `React` `TypeScript` `Docker` `GitHub Actions` `Watchtower` `Tailscale` `multi-arch ARM64/AMD64` `OpenCV` `pyzbar` `RPLIDAR` `discord.py` `Vite`

## Links

- [GitHub](https://github.com/vtennero/newjersey-dynamics)
