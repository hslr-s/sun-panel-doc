# Quick Start

This guide will help you get the Hello World micro app running in 5 minutes.

:::: tip Prerequisites
- Node.js >= 18.20 must be installed on your computer
- A micro app project must be developed based on [Hello World](https://github.com/Sun-Panel/microapp-hello-world) as the underlying template
::::

## Step 1: Clone the Project

**Method 1 (Recommended)**. Based on the official template in your GitHub repository, [**"Quickly create a micro app project"**](https://github.com/new?template_name=microapp-hello-world&template_owner=Sun-Panel), then clone it down to start developing the micro app quickly.

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

**Method 2**. Clone the project template from GitHub:

```bash
# The simplest case, please develop based on this template
git clone https://github.com/Sun-Panel/microapp-hello-world.git
cd microapp-hello-world

# The most complete feature case with all code examples, suitable for learning and referencing related feature code
git clone https://github.com/Sun-Panel/All-In-One-demo.git
cd All-In-One-demo
```

## Step 2: Install Dependencies {#bundle_install}

```bash
npm install
```

## Step 3: Start the Development Server {#start_dev_server}

```bash
npm run dev
```

After it starts successfully, a web page will open automatically. Follow the prompts to copy the entry file address and import it into Sun-Panel to preview the micro app.

## Step 4: Build and Publish

```bash
npm run pack       # Build component package (production mode)
npm run pack:test  # Build test version (micro app ID automatically gets -test suffix, debug auto-enabled)
```

The build output is in the `packages/` directory. The generated `.zip` file can be uploaded directly to the [Sun-Panel App Store](https://appstore.sun-panel.top/).

## Common Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run pack` | Build and package the component package (production mode) |
| `npm run pack:test` | Build and package the component package (test mode, micro app ID automatically gets `-test` suffix, debug auto-enabled) |
| `npm run clean` | Clean build artifacts |
| `npm run update` | Update official template code |
| `npm run update:force` | Force update official template code |

For more commands, check the [package.json](https://github.com/Sun-Panel/microapp-hello-world/blob/main/package.json) under the [Hello World official template](https://github.com/Sun-Panel/microapp-hello-world).

## Next Steps

- [Project Structure](./project_structure) - Understand directories and files
- [Configuration](./config) - Modify app info
- [Component Development](./dev_guide) - Develop your first component
