# Custom CSS and JS

(Experimental feature, subject to potential adjustments in future releases. Please stay tuned for further update information.)

Supported versions: `1.3.0-beta24-01-17` and later. If you find the current interface unsatisfactory, want to customize global elements, or add some fun features, you can choose to customize CSS and JS.

:::danger 
Do not add JavaScript code from unknown sources to avoid security risks!!!
:::

Custom files are located in the `web/custom` directory. **If the files do not exist, you can manually create `index.js` and `index.css` in this directory.**

**For Docker, you need to mount the directory during `docker run` by adding `-v ~/docker_data/sun-panel/custom:/app/web/custom` (this is just an example, modify the path before the colon based on your environment).**

The directory structure looks like this:
```txt {10-11}
.
├── conf
├── database
├── runtime
├── sun-panel
├── uploads
└── web
    ├── assets
    ├── custom
    │   ├── index.css // [!code focus]
    │   └── index.js // [!code focus]
    ├── favicon-black.svg
    ├── favicon.ico
    ├── favicon.svg
    ├── index.html
    ├── logo.png
    └── static
```

You can then edit these two files and see the effects after refreshing the browser. If there is no effect, please clear the browser cache.

:::danger 
Do not add JavaScript code from unknown sources to avoid security risks!!!
:::