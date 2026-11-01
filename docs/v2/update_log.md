---
outline: [2,3]
---

# V2 Development Version Changelog

:::: danger Must Read
- The V2 development version already supports covering updates from V1 via upgrade, but the feature is still being tested. ❗️⚠️**Please do not follow this operation**⚠️❗️. Please use the v1 export backup package to restore and experience it in a newly created v2 container.
- The development version **has a development version note at the bottom**, please do not directly apply it in a public production environment.
::::

## v2.0.2-beta260912 <Badge type="warning" text="DEV" /> {#v2.0.2-beta260912}

#### New Features
- **Micro App Management**
  - [New] Micro apps support **check for updates**: automatically compare local and store versions, providing an upgrade entry and prompts for apps with updates
  - [New] Micro app **uninstall and clear data** feature: after clearing data, it automatically invalidates and cleans up frontend cache
  - [New] Added a top-level micro app management page route (`/microApp`), and improved admin permission checks, so when a page cannot be accessed due to a micro app exception, you can directly access the secondary page to delete and uninstall
- **Desktop / Layout**
  - [New] Card sizes overall enlarged, style closer to v1
  - [New] 【Major Update】Grid layout supports **even column display** and toggle config, dynamically calculating column count to adapt to screen width, while ensuring both v1 and v2 characteristics
- **Internationalization**
  - [New] Added Japanese, Korean, French, Spanish, Russian, and Traditional Chinese language support
- **Other**
  - [New]

#### Fixes/Optimizations
- [Fix] Group style import/export loss issue
- [Fix] Static wallpaper over-zoom issue
- [Fix] Data recovery exception issue
- [Optimize] Micro app window open/close transition animation
- [Fix] Display group title, close not taking effect
- [Optimize] 【Major Optimization】Theme and desktop component style adjustments, unified theme rounded corners
- [Optimize] Image grid background style, transparent icons clearly visible on white background
- [Optimize] Grid layout card drag and hover styles
- [Optimize] Hide add button in sort state
- [Optimize] TOC (table of contents) component supports scrolling when there are too many groups
- [Optimize] First screen loading speed
- [Optimize] Micro app widget list filters widgets without components, avoiding blank cards
- [Optimize] Micro app widget list, micro app management author info displayed using store nickname
- [Optimize] Removed some secondary features in favor of opening via micro app shortcuts (requires prior installation), such as: browser bookmark conversion, smart network switch testing

Thanks to the users who reported bugs: **◆◇魍憂倲ぐ**, **ルーミアの餌**

## v2.0.1-dev-3 <Badge type="warning" text="DEV" /> {#v2.0.1-dev-3}
:::: tip
- For micro app development, please pull the latest version of the [Hello World demo project](https://github.com/Sun-Panel/microapp-hello-world). Existing projects need to re-run `npm install`.
::::
#### Fixes/Optimizations
- [Fix] Issue where widgets could not display properly on mobile
- [Optimize] v1 migration backup directory

## v2.0.1-dev-2 <Badge type="warning" text="DEV" /> {#v2.0.1-dev-2}
:::: tip
- For micro app development, please pull the latest version of the [Hello World demo project](https://github.com/Sun-Panel/microapp-hello-world). Existing projects need to re-run `npm install`.
- Added a complete-feature demo project [All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo)
::::

#### New Features
- [New] Directory component added support for **single group mode** display, clicking a directory item switches the active group
- [New] Fully refactored **import/export (share) feature**: supports exporting/importing `.zip` share files, with optional import of icon images
- [New] Micro apps support main page components, added "**Quick Launch**" micro app list
- [New] Micro app management list, development version micro apps support quick update/import
- [New] Micro app cards added development mode tag, avoiding developer confusion between official and development versions
- [New] Style config added "Reset" button (clock/content area/footer/Logo/network mode/TOC/wallpaper)
- [New] Backup/restore supports backing up installed micro app info

#### Fixes/Optimizations
- [Fix] Micro app installation save parameter issue (critical BUG)
- [Fix] Container network send/receive data display error `（Thanks to Q group 【小茗同学】 for the feedback）`
- [Fix] Bug where widget right-click menu showed in public mode
- [Optimize] Optimized title and icon shadow styles
- [Optimize] Micro app management / personal center text adjustments
- [Fix] Fixed other known BUGs, improved stability

## v2.0.1-dev-1 <Badge type="warning" text="DEV" /> {#v2.0.1-dev-1}
:::: tip
- For micro app development, please pull the latest version of the [Hello World demo project](https://github.com/Sun-Panel/microapp-hello-world). Existing projects need to re-run `npm install`.
- Added a complete-feature demo project [All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo)
::::

#### New Features
- [New] Full support for micro apps built on the microApp 1.1 framework **(developers need to add the author to the WeChat group to learn about new version features)**
- [New] Support for video wallpapers, including video file preview and upload
- [New] Get system info interface (used with official micro apps)
- [New] Unified media type detection and optimized wallpaper loading (supports images and videos)
- [New] Added TOC sidebar directory navigation
- [New] Added fullscreen and close button hover effects
- [New] Simplified the add widget process and hid the config button
- [New] Micro app version compatibility check
- [New] Micro app window dark mode support
- [New] Micro app widget list supports widget title and description info display

#### Fixes/Optimizations
- [Fix] Fixed path handling (Windows system unrecognized issue) and unhandled upload file errors
- [Fix] Fixed issue where edit template popup content was truncated
- [Fix] Micro app widget card edit window overflowing screen on mobile
- [Fix] Fixed search box shortcut key mis-trigger issue
- [Fix] Fixed other known BUGs, improved stability

## v2.0.0-dev-13 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-13}
:::: tip
- For micro app development, please pull the latest version of the [Hello World demo project](https://github.com/Sun-Panel/microapp-hello-world). Existing projects need to re-run `npm install`.
- Added a complete-feature demo project [All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo)
::::

- **Micro App Store**
  - [New] Adapted micro app store, can directly install micro apps

- **UI/UX Optimizations**
  - [Optimize] Right-click menu rounded corners and layout style `[Thanks to @liteyais for the design]`
  - [New] Card edit / micro app preview supports transparent blur following wallpaper background preview
  - [Optimize] URL button group style `[Thanks to @liteyais for the design]`
  - [Optimize] Card size selector and layout style `[Thanks to @liteyais for the design]`

- **OpenAPI**
  - [New] OpenAPI re-enabled after adapting v1
  - [New] Batch modify card interface, refer to [documentation](/openapi/v1/apis_item.html#batch-modify-item-cards) for details

- **Other**
  - [New] Settings module, integrating import/export and OpenAPI features
  - [New] Quick jump to login authorized account
  - [Optimize] Edit template layout scrolling issue
  - [Fix] Card size and group default value logic error
  - [Fix] Navigation page max width limited to 1200px issue, changed to 2000px
  - [Fix] Invalid card parameters causing an undeletable bug

## v2.0.0-dev-12 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-12}
:::: tip
- For micro app development, please pull the latest version of the [Hello World demo project](https://github.com/Sun-Panel/microapp-hello-world). Existing projects need to re-run `npm install`.
- Added a complete-feature demo project [All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo)
::::

- Micro App
  - [Fix] Issue where micro app list froze due to missing zh-CN language in appInfo config
  - [Fix] Public mode, network passthrough unable to use data from data nodes
  - [Fix] Other details

## v2.0.0-dev-11 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-11}
:::: tip
- For micro app development, please pull the latest version of the [Hello World demo project](https://github.com/Sun-Panel/microapp-hello-world). Existing projects need to re-run `npm install`.
- Added a complete-feature demo project [All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo)
::::

- [New] Micro app widget supports 4x4 layout
- [Fix] Micro app widget title Bug

- [New] Micro app template (Hello World) ESLint config and code formatting rules, supporting code error annotations, reminders, etc.
- [Removed] Save widget API title setting. Title no longer allowed to be modified, automatically uses the micro app's name.

## v2.0.0-dev-10 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-10}
:::: tip
- For micro app development, please pull the latest version of the [Hello World demo project](https://github.com/Sun-Panel/microapp-hello-world). Existing projects need to re-run `npm install`.
- Added a complete-feature demo project [All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo)
::::

- **[Fix] `v2.0.0-dev-v9` backup restore feature unusable BUG**

## v2.0.0-dev-9 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-9}

- [New] Micro app frontend debug mode: [Micro App Management] -> enable [Developer Mode], for micro apps under development, add `debug:true` in the config file `config/app.config.js`. Upgrade install or re-import micro app to enable
- [New] Backup/restore feature, supports restoring using v1 backup package files, supports covering v1 version covering update, but strongly recommend backing up once on v1 before upgrading.
- [Optimize] Widget display list
- [Optimize] Merged gallery and public gallery, non-admin accounts can also view files uploaded to the public gallery
- [Optimize] Some micro app framework details
- [Fix] Card edit modifying group not taking effect (Thanks to QQ: 人生的游戏世界[240****086] for reporting)
- [Fix] Micro app not displaying author name issue

## v2.0.0-dev-7 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-7}
:::: tip
- For micro app development, please pull the latest version of the [Hello World demo project](https://github.com/Sun-Panel/microapp-hello-world). Existing projects need to re-run `npm install`.
- Added a complete-feature demo project [All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo)
::::

- [New] Built-in window open website window supports fullscreen
- [Optimize] Window base component features
- [Optimize] Micro app page window title display and card title display
- [Optimize] Micro app `app.json/app.config.js` added [debug mode](/micro_app_dev/config) parameter
- [Optimize] Micro app backend corresponding network passthrough, data node log debugging (requires enabling debug mode)
- [Optimize] Micro app rewrote network passthrough method, adjusted parameter format (compatible with old format), supports cookie management [Network Passthrough](/micro_app_dev/api#network)
- [Optimize] Other details

## v2.0.0-dev-6 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-6}
> For micro app development, please pull the latest version of the [Hello World demo project](https://github.com/Sun-Panel/microapp-hello-world). Existing projects need to re-run `npm install`. Added a complete-feature demo project [All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo), (network passthrough and window management not yet developed, other features completed)

- [New] Micro app added user-level and app-level delete data node by key feature, and adjusted related API routes and frontend call methods
- [Fix] Micro app fixed batch get data node key data format error issue [Data Node API Usage Documentation](/micro_app_dev/api.html#dataNode)
- [Fix] Micro app user-level and app-level delete data node by key feature causing deletion of entire data node bug
- [Fix] Micro app cache manager unable to store user-level data bug

## v2.0.0-dev-3 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-3}
- [Fix] When adding micro app, guide page edit box cannot input BUG
- [Fix] Card click add custom address causing page freeze BUG
- [Fix] Offline install method updating a micro app causing all other micro apps to be lost BUG
- [Optimize] App management night mode not adapted (26-02-19)
- [Optimize] Standard card style beautification

## v2.0.0-dev-1 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-1}

> Only partial content written

- [New] Refactored navigation page layout, supporting cards of different sizes within the same group.
- [New] Micro app / widget card framework, enhancing infinite playability in limited screen space, with flexible installation and uninstallation. Developers who love development can freely develop according to the specifications.
- [New] Card custom addresses, which can participate in network environment identification for smart opening or right-click menu opening.
- [New] Brand new network environment detection solution, which can match the appropriate LAN address, custom address within the same network segment based on the current page access address.
- [New] Mac (removed cgo version sqlite database)
