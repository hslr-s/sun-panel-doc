---
outline: [2,3]
---

# Template Upgrade

As Sun-Panel's features iterate, the underlying template will add basic features and apply security updates to packaging and other scripts. This document guides you on how to upgrade your project from an old template version to the latest version, maintaining compatibility with the platform.

## One-Click Upgrade (Recommended) {#auto_upgrade}

Upgrade condition: Check whether your project's root directory contains the `scripts/update-template.mjs` script. If it does, one-click template upgrade is supported. If the upgrade script file does not exist or the upgrade fails, you need to upgrade manually.

The simplest way is to directly run the upgrade command:

```bash
npm run update
```

This command pulls the latest underlying files (build scripts, dependency config, etc.) from the template repository, and **will not overwrite your own business code**.

:::: tip Applicable Scenarios
One-click upgrade is suitable for versions where the underlying files have been updated but the config format has no breaking changes. If the new version introduces config format changes (such as adding required fields), you still need to manually modify the config files after the one-click upgrade. Please refer to the instructions below.
::::

## Manual Upgrade {#manual_upgrade}

When the one-click upgrade fails, or the new version introduces config format changes, you need to upgrade manually.

### Step 1: Backup the Current Project

```bash
cp -r your-app your-app-backup
```

### Step 2: Pull the Latest Template Code

Pull the latest code from the [Hello World template repository](https://github.com/Sun-Panel/microapp-hello-world), **excluding** the following files/directories, and directly overwrite the rest into your development project:

:::: danger Files and directories not to overwrite
- `src/components` - Your component code
- `config/*` - Your config files (`app.config.js`, `components.config.js`, etc.)
::::

:::: info Automatically synced files
The following files are automatically synced by `npm run update` and usually do not need manual handling:
- `build/` - Build scripts (`build.js`, `pack.js`, `generators/`)
- `scripts/` - Update scripts (`update-template.mjs`, `template-files.json`)
- `vite.config.js` - Vite config
- `eslint.config.js` - ESLint config
- `package.json` - Dependency versions (will not overwrite `scripts`, `name`, and other fields)
- `jsconfig.json`
::::

### Step 3: Review Version Change Notes

Review the latest [version change history](#changelog) to understand what config format changes this upgrade introduces, and modify the corresponding config files according to the instructions.

### Step 4: Build Verification

After the upgrade is complete, run the build command to verify the config is correct:

```bash
# Install dependencies (if any added)
npm install

# Compile language files (if applicable)
npm run build:locales

# Build the project
npm run build
```

## General Checklist

After each upgrade, it is recommended to confirm item by item:

- [ ] `config/app.config.js` `appJsonVersion` has been updated to the latest version
- [ ] All required fields in `config/app.config.js` have been filled as required
- [ ] Widget config in `config/components.config.js` has no omissions
- [ ] Translation files in the `locales/` directory contain all newly added translation keys
- [ ] `npm install` dependency installation succeeded
- [ ] `npm run build` build succeeded
- [ ] After uploading to the app store, the main platform can correctly parse it

## Rollback Plan

If serious problems occur after the upgrade, you can roll back to the backed-up old version:

```bash
# Delete the upgraded project
rm -rf your-app

# Restore the backup
mv your-app-backup your-app

# Reinstall dependencies and verify
cd your-app
npm install
npm run build
```

:::: warning Note
If you did not backup before the upgrade, you need to manually restore the modified config files. It is recommended to **backup before each upgrade**.
::::

## Version Change History {#changelog}

The following records the main changes between template versions. Please review the corresponding version's change notes when upgrading.

### v1.1 {#v1_1}

> Changes relative to v1.0

#### Major Changes

- **i18n support**: Introduces an independent `locales/` translation file system, replacing the multi-language object embedded in `appInfo` in v1.0
- **Widget metadata**: `components.config.js` adds `widgetName`, `widgetDescription`, `sort` fields

#### Config That Needs Manual Modification

**1. `config/app.config.js`**

- Add `appJsonVersion: '1.1'`
- Add the `locales` object, specifying the mapping from language code to file name
- `appInfo` uses the `$t:KEY` syntax to reference translations

:::::: code-group

```js [v1.1 new format]
export default {
  appJsonVersion: '1.1',
  // ...
  appInfo: {
    appName: '$t:APP_NAME',
    description: '$t:APP_DESCRIPTION',
    networkDescription: '$t:NETWORK_DESCRIPTION',
  },
  locales: {
    'zh-CN': 'zh-CN.json',
    'en-US': 'en-US.json',
    // 'zh-TW': 'zh-CN.json',  // Example: Traditional Chinese can point to the Simplified Chinese file
  },
};
```

```js [v1.0 old format]
export default {
  // No appJsonVersion or '1.0'
  appInfo: {
    'zh-CN': {
      appName: 'Weather',
      description: 'View weather data worldwide',
      networkDescription: 'Download necessary config data on first run'
    },
    'en-US': {
      appName: 'Weather',
      description: 'View weather data worldwide',
      networkDescription: 'Download necessary config data on first run'
    }
  },
};
```

::::::

**2. Create `locales/` translation files**

Extract the translation text embedded in `appInfo` in v1.0 into independent files:

```bash
mkdir -p locales
```

Create `locales/zh-CN.js` and `locales/en-US.js`, format referenced in the [i18n](./i18n) document.

**3. `config/components.config.js` (optional)**

Add the widget's name, description, and sort fields:

```js
export default {
  widgets: {
    'my-widget': {
      component: MyWidget,
      configComponentName: 'my-config',
      // Fields added in v1.1
      widgetName: '$t:WIDGET_NAME',
      widgetDescription: '$t:WIDGET_DESC',
      sort: 10,
      size: ['1x1', '2x2'],
    },
  },
};
```

#### Upgrade Checklist

- [ ] `appJsonVersion` changed to `'1.1'`
- [ ] Added `locales` object
- [ ] `appInfo` uses `$t:KEY` syntax
- [ ] Created translation files in the `locales/` directory
- [ ] Widget's `widgetName`/`widgetDescription` use `$t:KEY` (optional)
