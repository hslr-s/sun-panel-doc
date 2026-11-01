<div align=center style="width:100%">

<img src="/images/logo.png" width="100" height="100" />

# Sun-Panel

<div class="badge-box-center">

[![Github](https://img.shields.io/badge/Github-123456?logo=github&labelColor=242424)](https://github.com/hslr-s/sun-panel) 
[![Gitee](https://img.shields.io/badge/Gitee-123456?logo=gitee&labelColor=c71d23)](https://gitee.com/hslr/sun-panel) 
[![docker](https://img.shields.io/badge/docker-123456?logo=docker&logoColor=fff&labelColor=1c7aed)](https://hub.docker.com/r/hslr/sun-panel) 
[![Bilibili](https://img.shields.io/badge/Bilibili-123456?logo=bilibili&logoColor=fff&labelColor=fb7299)](https://space.bilibili.com/27407696/channel/collectiondetail?sid=2023810) 
[![YouTube](https://img.shields.io/badge/YouTube-123456?logo=youtube&labelColor=ff0000)](https://www.youtube.com/channel/UCKwbFmKU25R602z6P2fgPYg)

</div>
<div class="badge-box-center">

[![GitHub Release](https://img.shields.io/github/v/release/hslr-s/sun-panel?color=4fb3bb)](https://github.com/hslr-s/sun-panel/releases)
[![GitHub User's stars](https://img.shields.io/github/stars/hslr-s%2Fsun-panel?style=flat&logo=github)](https://github.com/hslr-s/sun-panel)
[![github downloads](https://img.shields.io/github/downloads/hslr-s/sun-panel/total.svg?logo=github)](https://github.com/hslr-s/sun-panel/releases)
[![docker pulls](https://img.shields.io/docker/pulls/hslr/sun-panel.svg?logo=docker)](https://hub.docker.com/r/hslr/sun-panel)

</div>

A NAS, server navigation panel, easy Docker manager, Homepage, and browser start page. V2 builds on all of V1's capabilities, bringing a brand-new micro-app/widget framework, a redesigned navigation page, and richer card sizes.

</div>

![](/images/v2-dev/pc_1_micro_app.png)

## Features

- 🍉 Clean interface, powerful functionality, low resource consumption (inherited from V1)
- 🍊 Easy to use, visual operation, zero-code usage
- 🍠 One-click switch between internal and external network modes
- 🍵 Supports Docker deployment (compatible with Arm systems)
- 🎪 Supports multi-account isolation
- 🎏 Supports viewing system status
- 🫙 Supports custom JS, CSS
- 🍻 Simple usage without the need to connect to an external database
- 🍾 Rich icon styles for free combination, supports [Iconify icon library](https://icon-sets.iconify.design/)
- 🐳 Simple Docker manager, support the opening and shutdown of the container, control the container
- ✨ **Micro-App / Widget Card Framework**: unlimited playability in limited screen space, flexible install and uninstall, developers can freely build per the spec
- ✨ **Brand-new Network Environment Detection**: automatically matches the appropriate LAN / custom same-subnet address based on the current access URL
- ✨ **Custom Card Address**: participates in network environment detection for smart open or right-click menu open
- ✨ **Redesigned Navigation Page**: cross-group card dragging, mixed card sizes (`1x1`/`1x2`/`2x1`/`2x2`/`2x4`/`1x screen width`), perfect mobile widget adaptation, streamlined card DOM
- ✨ **Icon card supports remark text** (visible to logged-in users only)
- ✨ **Cross-platform binaries**: added Mac (arm64/amd64) using a pure-Go SQLite library
- ✨ **Smooth migration**: supports importing V1 icon config data, backup feature adapted
- ✨ **Batch delete for image library**
- ✨ **Enhanced version custom code**
- ✨ **Enhanced sharing feature**

## TODO

- [x] Micro-app/widget card framework
- [x] Brand-new network environment detection
- [x] Custom card address + network environment detection
- [x] Redesigned navigation page (cross-group drag, mixed sizes, mobile adaptation)
- [x] Docker manager changed to card style
- [x] All-new Docker card (real-time speed / cumulative traffic)
- [x] Icon card remark text
- [x] Mac binaries (arm64/amd64, pure-Go SQLite)
- [x] Import V1 icon config data
- [x] Backup feature adapted
- [x] Batch delete for image library
- [x] Sidebar directory (TOC)
- [x] V1 system status component adaptation
- [ ] Integrate third-party self-hosted icon library
- [ ] Batch modify icon cards

## Preview Screenshots

**Various styles, freely combined**

![](/images/v2-dev/pc_1_micro_app.png)

![](/images/v2-dev/pc_2_v1_style.png)

![](/images/v2-dev/docker.png)

![](/images/v2-dev/add_widget.png)

![](/images/v2-dev/m2.jpg){style="max-width: 500px"}

![](/images/v2-dev/m1.jpg){style="max-width: 500px"}
