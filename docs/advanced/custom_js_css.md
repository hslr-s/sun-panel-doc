# Custom CSS and JS

:::danger 
Please do not add js code from unknown sources to avoid being attacked!!!
:::

## Versions `v1.3.0` and earlier or upgrades

**For versions `v1.3.0` and earlier [please refer here](./custom_js_css_old.md). If you are using the Docker version and have upgraded from `v1.3.0` or earlier, [please refer here](https://github.com/hslr-s/sun-panel/discussions/98)**


## Installation of `v1.4.0-beta24-02-20+` without upgrade

If you are doing a fresh installation, your custom directory for Docker version: `./conf/custom`, for binary version: `./custom`

Specifically, reference, create related files if they don't exist
```
├── custom
│   ├── ...
│   ├── index.css // [!code focus]
│   └── index.js // [!code focus]
```