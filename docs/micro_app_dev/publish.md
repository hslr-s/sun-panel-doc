# Build and Publish

This document introduces the build, packaging, and publishing process of micro apps.

## Build Process

The micro app build process is as follows:

```
1. Generate config file → 2. Vite build → 3. Package into .zip
```

### 1. Generate Config File

Read config from `config/app.config.js` and automatically generate the `app.json` file:

- **Online run** (`npm run dev`): `microAppId` gets a `-dev` suffix
- **Test mode** (`npm run pack:dev` / `npm run pack:test`): Automatically adds a `-test` suffix to `microAppId` and automatically enables `debug`
- **Production mode** (`npm run pack`): Uses the original `microAppId`, `debug` passes through the config value (controlled by `config/app.config.js`; set to `false` for official release)

### 2. Vite Build

- Build source code to the `dist/` directory
- Copy files from the `public/` directory directly to the root

### 3. Package into .zip

Package `app.json`, `main.js`, and static resources, output to the `packages/` directory:

```
packages/
└── hslr-hello-world-1.0.0.zip
    ├── app.json              # App config
    ├── main.js               # Component entry
    ├── logo.png             # App icon
    └── sun-panel-logo.png   # Sun Panel Logo
```

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run pack` | Package component package (production mode, no suffix) |
| `npm run pack:dev` | Package component package (test mode, `-test` suffix) |
| `npm run pack:test` | Package component package (test mode, `-test` suffix) |
| `npm run gen` | Generate config file (production mode) |
| `npm run gen:test` | Generate config file (test mode) |

## Test/Production Environment Distinction

```javascript
// Online run (npm run dev) → -dev suffix
const isDevServer = import.meta.env.DEV && !import.meta.env.PROD;
// Package test (pack:dev / pack:test) → -test suffix
const isTestBuild = import.meta.env.PROD && import.meta.env.MODE === 'development';

const microAppId = isDevServer ? `${config.microAppId}-dev`
  : isTestBuild ? `${config.microAppId}-test`
  : config.microAppId;
```

It can also be determined via config:

```javascript
const isDevMode = MicroAppPackage.appConfig.dev;
```

## Publishing Process

The platform is still in development. The standard publishing process is as follows:

```
Register as developer → Develop and test → Package test → Submit for review → Publish to app store
```

:::: tip
During the development and testing phase, the registration step can be temporarily omitted. Directly use the locally packaged `.zip` file for testing.
::::
