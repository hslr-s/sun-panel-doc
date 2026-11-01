---
outline: [2,4]
---

# Platform API

Micro apps call various platform capabilities via `this.spCtx.api`. Some APIs are asynchronous (return a Promise), and some are synchronous (return a value directly).

:::: tip IDE Type Hints
After installing the `@sun-panel/micro-app` SDK, typing `this.spCtx.api.` in your IDE will automatically pop up type hints and code completion.
::::

## Window Management

### window.open

Open a new window.

```typescript
open(options: OpenWindowOptions): string
```

**Parameters:**

- `options`: Window config parameters, type [`OpenWindowOptions`](#openwindowoptions)

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `componentName` | string | ✅ | Component name (the key name under pages in the component config) |
| `windowConfig` | [WindowConfig](#windowconfig) | - | Window config, uses [default config](/micro_app_dev/config.html#page_config_param) if not provided |
| `customParam` | any | - | Custom parameter |
| `title` | string | - | Window title |

**Return value:** Window ID (string type)

**Example:**

```typescript
const windowId = this.spCtx.api.window.open({
  componentName: 'my-component',
  title: 'Weather Details',
  windowConfig: {
    width: 800,
    height: 600,
    isFullScreen: false
  },
  customParam: { cityId: 1001 }
});
```

## Main App Info {#mainAppInfo}

Get basic info about the main app, such as version number, PRO status, etc. More fields may be added later (such as the current user account).

### mainAppInfo.get

Get basic main app info.

```typescript
get(): Promise<MainAppInfo>
```

**Return value:** [`MainAppInfo`](#mainappinfo) object

**Example:**

```typescript
const info = await this.spCtx.api.mainAppInfo.get();
console.log('Main app version:', info.version);      // e.g.: "1.1.0"
console.log('Is PRO:', info.isPro);                  // true or false
```

## Timer {#timer}

A timer interface provided by the main app. In micro app scenarios, you **must** use this interface to create timers, and directly calling native `window.setTimeout` / `window.setInterval` is **prohibited**.

> ⚠️ **Mandatory Rule (related to memory leaks)**
>
> - The main app performs **lifecycle tracking** on timers created via `api.timer`: when the card or window where the micro app resides (such as the right-click "Edit / Config / Preview" window) closes and the component unmounts, the main app will **force `clearTimeout` / `clearInterval`** on all timers created by that instance. However, as a development rule, you still need to destroy created timers in the component's lifecycle function `onDisconnected()`.
> - If you directly call native `window.setInterval`, etc., the main app cannot obtain its handle, so it **cannot track it nor recycle it on close**. The timer will run indefinitely in the background. After repeatedly opening windows, a large accumulation occurs, manifesting as a "memory leak where countless components are running in the background, especially when using timer functions."
> - Conclusion: **All timing logic must go through `api.timer`; if you've used native timers, please change them to `api.timer`.**

### timer.setTimeout

Create a timer that executes the callback after a specified delay.

```typescript
setTimeout(handler: TimerHandler, timeout?: number, ...args: any[]): number
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `handler` | TimerHandler | ✅ | Function executed when the timer expires |
| `timeout` | number | - | Delay time (milliseconds), default 0 |
| `...args` | any[] | - | Additional parameters passed to the callback function |

**Return value:** Timer ID (number), used for `clearTimeout`

**Example:**

```typescript
const timerId = this.spCtx.api.timer.setTimeout(() => {
  console.log('Executed after 2 seconds');
}, 2000);

// Cancel the timer
this.spCtx.api.timer.clearTimeout(timerId);
```

### timer.setInterval

Create a timer that repeatedly executes the callback at specified intervals.

```typescript
setInterval(handler: TimerHandler, timeout?: number, ...args: any[]): number
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `handler` | TimerHandler | ✅ | Function executed each time the timer expires |
| `timeout` | number | - | Interval time (milliseconds), default 0 |
| `...args` | any[] | - | Additional parameters passed to the callback function |

**Return value:** Timer ID (number), used for `clearInterval`

**Example:**

```typescript
const intervalId = this.spCtx.api.timer.setInterval(() => {
  console.log('Poll once every 5 seconds');
}, 5000);

// Stop polling
this.spCtx.api.timer.clearInterval(intervalId);
```

### timer.clearTimeout

Cancel a timer created by `setTimeout`.

```typescript
this.spCtx.api.timer.clearTimeout(id: number): void
```

### timer.clearInterval

Cancel a timer created by `setInterval`.

```typescript
this.spCtx.api.timer.clearInterval(id: number): void
```

## Local Cache

Based on IndexedDB, provides user-level and app-level caching.

### User-level Cache (localCache.user)

#### localCache.user.get

Get a user cache value.

```typescript
get(key: string): Promise<any>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | ✅ | Cache key |

**Example:**

```typescript
const value = await this.spCtx.api.localCache.user.get('userInfo');
```

#### localCache.user.set

Set a user cache value.

```typescript
set(key: string, value: any, expireSeconds?: number): Promise<void>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | ✅ | Cache key |
| `value` | any | ✅ | Cache value |
| `expireSeconds` | number | - | Expiration time (seconds), 0 means no expiration |

**Example:**

```typescript
await this.spCtx.api.localCache.user.set('userInfo', { name: 'John' }, 3600);
```

#### localCache.user.del

Delete a user cache.

```typescript
del(key: string): Promise<void>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | ✅ | Cache key |

**Example:**

```typescript
await this.spCtx.api.localCache.user.del('userInfo');
```

#### localCache.user.clear

Clear all user caches.

```typescript
clear(): Promise<void>
```

**Example:**

```typescript
await this.spCtx.api.localCache.user.clear();
```

#### localCache.user.getKeys

Get all user cache keys.

```typescript
getKeys(): Promise<string[]>
```

**Return value:** Array of cache keys

**Example:**

```typescript
const keys = await this.spCtx.api.localCache.user.getKeys();
```

### App-level Cache (localCache.app)

The app-level cache provides the same interface as the user-level cache, but the data scope is app-level, shared by all users.

The interface methods are exactly the same as `localCache.user`. When calling, change `localCache.user` to `localCache.app`.

**Example:**

```typescript
await this.spCtx.api.localCache.app.set('appConfig', { theme: 'dark' });
const config = await this.spCtx.api.localCache.app.get('appConfig');
```

## Data Node {#dataNode}

Provides user-level and app-level data node management. For detailed permission descriptions, see [Data Node](./data_node). This document only explains the API usage. You need to declare the `dataNode` permission in [Permission Config](/micro_app_dev/permission).

### User Data Node (dataNode.user)

#### dataNode.user.getByKey

Get the data of a `specified key` in the user data node based on the key.

```typescript
getByKey<T = any>(node: string, key: string): Promise<T>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `node` | string | ✅ | Node name |
| `key` | string | ✅ | Data key |

**Example:**

```javascript
try {
  const theme = await this.spCtx.api.dataNode.user.getByKey('preferences', 'theme');
  console.log(theme) // "dark"
} catch (e) {
  console.error(e.message);
}
```

#### dataNode.user.getByKeys

Get the data of `all filled keys` in the user data node based on multiple keys.

```typescript
getByKeys<T = Record<string, any>>(node: string, keys: string[]): Promise<T>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `node` | string | ✅ | Node name |
| `keys` | string[] | ✅ | Array of data keys |

**Example:**

```javascript
try {
  const config = await this.spCtx.api.dataNode.user.getByKeys('config', ['token', 'location']);
  console.log(config)
  // Example output:
  // {
  //   "location": {
  //     "city": "Beijing"
  //   },
  //   "token": 12345678
  // }
} catch (e) {
  console.error('Batch fetch failed: ' , e.message);
}
```

#### dataNode.user.setByKey

Set data in the user data node.

```typescript
setByKey(node: string, key: string, value: any): Promise<void>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `node` | string | ✅ | Node name |
| `key` | string | ✅ | Data key |
| `value` | any | ✅ | Data value |

**Example:**

```javascript
await this.spCtx.api.dataNode.user.setByKey('preferences', 'theme', { mode: 'dark' });
```

#### dataNode.user.setByKeys

Batch set data in the user data node.

```typescript
setByKeys(node: string, items: Record<string, any>): Promise<void>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `node` | string | ✅ | Node name |
| `items` | Record<string, any> | ✅ | Data key-value object, key is the data key, value is the corresponding data |

**Example:**

```javascript
await this.spCtx.api.dataNode.user.setByKeys('config', {
  token: 'abc123',
  location: { city: 'Beijing' }
});
```

#### dataNode.user.delByKey

Delete data in the user data node.

```typescript
delByKey(node: string, key: string): Promise<void>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `node` | string | ✅ | Node name |
| `key` | string | ✅ | Data key |

**Example:**

```javascript
await this.spCtx.api.dataNode.user.delByKey('preferences', 'theme');
```

### App Data Node (dataNode.app)

The app-level data node provides the same interface as the user-level data node, but the data scope is app-level, shared by all users. The interface methods are exactly the same as `dataNode.user`. When calling, change `dataNode.user` to `dataNode.app`.

### Error Handling

Errors need to be caught using `try{...}catch{...}`. All data node APIs support this. Error type reference: [`SpDataNodeError`](#spdatanodeerror)

Example:
```javascript
try {
  const exampleData = {
    token: 'abc123',
    location: { city: 'Beijing' }
  };
  await this.spCtx.api.dataNode.user.setByKeys("userConfig", exampleData);
  // this._showMessage('Batch store example data success');
} catch (e) {
  console.error(e.code); // Error code
  // this._showMessage('Batch store failed: ' + e.message, true);
}
```

## Network Passthrough {#network}

Send network requests, supporting template variable replacement (for safely passing sensitive info). You need to declare the `network` permission in [Permission Config](/micro_app_dev/permission).

### network.request

```typescript
request<T = any>(options: RequestOptions): Promise<T>
```

**Parameters:**

- `options`: Request parameter object, type `RequestOptions`

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `request` | [RequestParams](#requestparams) | ✅ | Request parameter object |
| `templateReplacements` | [TemplateReplacementRule](#templatereplacementrule)[] | - | Data node template replacement rules (replace sensitive data) |
| `cookieDataNodeKey` | string | - | Cookie data node key, format `"nodeName.key"`, see details below |

:::: warning Old version (v2.0.0-dev-6 and earlier) compatibility notes
The old parameters `targetUrl`, `method`, `headers`, `body` have been moved into the `request` property. Although compatibility handling is in place, new development should directly use `request` to pass values.
::::
{#cookie_manage}
:::: tip Cookie Auto Management
For security reasons and browser limitations, you can set `cookieDataNodeKey` to automatically manage third-party site cookies. Each request interface/domain gets a separate data node key to store different sites' cookies:
- After config, the target site's set cookies are automatically saved to the specified data node
- Subsequent requests automatically carry the saved cookies
- Can be read or modified via the [Data Node API](#dataNode)
- **Note: Does not manage expiration time, path, etc., only stores and passes**

Naming suggestion: Based on the domain, add a `cookie` suffix, such as `exampleComCookie`, final: `config.exampleComCookie`

:::: details cookie data node key content
Use standard API call:
`this.spCtx.api.dataNode.user.getByKey('config','example_com_cookie')`

Output:
```json
{
  // Subsequent requests read this parameter and pass it to the request site
  "cookies": "debug_session=session_88881; debug_token=test123456",
  "meta": {
    "debug_session": {
      "path": "/"
    },
    "debug_token": {
      "httpOnly": true,
      "path": "/"
    }
  },
  "updatedAt": "2026-03-01T11:16:32+08:00"
}
```
::::

**Example:**

```typescript
const response = await this.spCtx.api.network.request({
  // Actual request parameters
  request: {
    targetUrl: 'https://{{domain}}/api/data',
    method: 'GET',
    headers: {
      "Authorization": "Bearer {{token}}"
    }
  },

  // Template parameter replacement
  templateReplacements: [
    {
      placeholder: '{{token}}',
      fields: ['headers'],
      dataNodeKey: 'config.token'
    },
    {
      placeholder: '{{domain}}',
      fields: ['targetUrl'],
      dataNodeKey: 'config.domain'
    }
  ],

  // Data node key name for storing and reading this site's cookies
  // Naming suggestion: use domain as content (replace . in domain with _), cookie as suffix
  cookieDataNodeKey:'config.example_com_cookie'
});
```

Error handling:

```typescript
try {
  const response = await this.spCtx.api.network.request(options);
  console.log(response);
} catch (error) {
  switch (error.type) {
    case 'microApp':
      // Micro app error (insufficient permission, etc.)
      break;
    case 'targetUrl':
      // Error returned by the target site
      break;
    default:
      console.error(error);
  }
}
```

## Widget Management

### widget.save

Save widget config info.

```typescript
save<T = any>(data: WidgetInfo): Promise<T>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | [WidgetInfo](#widgetinfo) | ✅ | Widget info object |

**Example:**

```javascript
await this.spCtx.api.widget.save({
  ...this.spCtx.widgetInfo,
  config: {
    showLogo: this.showLogo,
    customText: this.customText
  },
});
```

## System Monitor {#systemMonitor}

`This API is currently only available to official micro apps` - Get server system resource monitoring data (CPU, memory, disk, network). Supports two usage modes: **polling subscription** and **active fetch**. You need to declare the `systemMonitor` permission in [Permission Config](/micro_app_dev/permission).

> ⚠️ **Mandatory Rule (related to memory leaks)**
>
> - Subscriptions created via `systemMonitor.register` are **lifecycle tracked** by the main app: when the card / window where the micro app resides closes and the component unmounts, the main app will **force `unregister`** all subscriptions, avoiding continuous background polling.
> - Therefore, polling monitoring **must go through `api.systemMonitor.register`**, and proactively `unregister` in `onDisconnected`; do not use other means to implement background polling yourself (the main app cannot recycle it, causing memory leaks).

### systemMonitor.register

Register a monitoring data subscription. The system automatically fetches data at the specified interval and returns it via the callback function.

```typescript
register(config: MonitorRegistrationConfig): string
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `config` | [MonitorRegistrationConfig](#monitorregistrationconfig) | ✅ | Registration config |

**Return value:** Subscription ID (string), used to cancel the subscription later.

**Example:**

```javascript
// Register monitoring, fetch once every 5 seconds, monitoring CPU, memory, disk, network simultaneously
const subscriptionId = this.spCtx.api.systemMonitor.register({
  types: ['cpu', 'memory', 'disk', 'network'],
  interval: 5000,
  diskPaths: ['/'],  // Disk monitoring needs to specify the mount path array
  callback: (data) => {
    // CPU info
    if (data.cpu) {
      console.log('CPU usage:', data.cpu.usages);
    }
    // Memory info
    if (data.memory) {
      console.log('Memory usage:', data.memory.usedPercent + '%');
    }
    // Disk info (may have multiple partitions)
    if (data.disk) {
      data.disk.forEach(disk => {
        console.log(`Disk ${disk.mountpoint}: ${disk.usedPercent.toFixed(1)}%`);
      });
    }
    // Network info (may have multiple interfaces)
    if (data.network) {
      data.network.forEach(net => {
        console.log(`Network ${net.name}: Sent ${net.bytesSent}, Received ${net.bytesRecv}`);
      });
    }
  }
});
```

### systemMonitor.unregister

Cancel a monitoring data subscription.

```typescript
unregister(id: string): void
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | ✅ | Subscription ID (value returned by register) |

**Example:**

```javascript
// Cancel subscription
this.spCtx.api.systemMonitor.unregister(subscriptionId);
```

### systemMonitor.fetchData

Actively fetch monitoring data of a specified type (one-time request, no subscription created).

```typescript
fetchData(config: { types?: MonitorType[], type?: MonitorType, diskPaths?: string[] }): Promise<MonitorDataResp | null>
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `config.types` | [MonitorType](#monitortype)[] | - | Array of monitoring types |
| `config.type` | [MonitorType](#monitortype) | - | Single monitoring type (choose one with types) |
| `config.diskPaths` | string[] | - | Disk mount path array (only needed when querying disk type) |

**Return value:** [`MonitorDataResp`](#monitordataresp) or `null`

**Example:**

```javascript
// Actively fetch CPU and network data
const data = await this.spCtx.api.systemMonitor.fetchData({
  types: ['cpu', 'network']
});

if (data) {
  console.log('CPU:', data.cpu);
  console.log('Network:', data.network);
}

// Fetch disk data (need to specify mount path array)
const diskData = await this.spCtx.api.systemMonitor.fetchData({
  type: 'disk',
  diskPaths: ['/']
});

if (diskData && diskData.disk) {
  diskData.disk.forEach(disk => {
    console.log(`Disk ${disk.mountpoint}:`);
    console.log(`  Total: ${(disk.total / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`  Used: ${(disk.used / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`  Usage: ${disk.usedPercent.toFixed(1)}%`);
  });
}

// Monitor disk via subscription (update every 10 seconds)
const diskSubId = this.spCtx.api.systemMonitor.register({
  types: ['disk'],
  interval: 10000,
  diskPaths: ['/'],
  callback: (data) => {
    if (data.disk) {
      data.disk.forEach(disk => {
        console.log(`[${disk.mountpoint}] Usage: ${disk.usedPercent.toFixed(1)}%`);
      });
    }
  }
});

// Monitor multiple disk partitions simultaneously
const multiDiskSubId = this.spCtx.api.systemMonitor.register({
  types: ['disk'],
  interval: 5000,
  diskPaths: ['/', '/home', '/data'],  // Monitor multiple mount points
  callback: (data) => {
    if (data.disk) {
      data.disk.forEach(disk => {
        console.log(`Disk ${disk.mountpoint}: ${disk.usedPercent.toFixed(1)}%`);
      });
    }
  }
});
```

### systemMonitor.getSystemInfo

Get basic system info (hostname, OS, architecture, uptime, system load). This interface fetches once, no subscription created.

```typescript
getSystemInfo(): Promise<SystemInfo | null>
```

**Return value:** [`SystemInfo`](#systeminfo) or `null`

**Example:**

```javascript
// Get system info
const sysInfo = await this.spCtx.api.systemMonitor.getSystemInfo();

if (sysInfo) {
  console.log('Hostname:', sysInfo.hostname);
  console.log('OS:', sysInfo.os);
  console.log('Platform:', sysInfo.platform, sysInfo.platformVer);
  console.log('Architecture:', sysInfo.arch);
  console.log('Uptime:', Math.floor(sysInfo.uptime / 86400), 'days');
  console.log('System load:', sysInfo.load1, sysInfo.load5, sysInfo.load15);
}
```

## Data Types

> The following type definitions all come from the `@sun-panel/micro-app` SDK and can be auto-completed in your IDE.

### MainAppInfo {#mainappinfo}

Basic main app info.

| Property | Type | Description |
|----------|------|-------------|
| `version` | string | Main app version number (backend version) |
| `isPro` | boolean | Whether the main app is in PRO status |

### WindowConfig {#windowConfig}

Window config options.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `width` | number \| string | `800` | Window width, in `px` when a number |
| `height` | number \| string | `600` | Window height, in `px` when a number |
| `background` | string | [Page config background](/micro_app_dev/config.html#page_config_param) | Background color |
| `backgroundDark` | string | [Page config backgroundDark](/micro_app_dev/config.html#page_config_param) | Background color in dark mode |
| `headerTextColor` | string | [Page config headerTextColor](/micro_app_dev/config.html#page_config_param) | Header text color |
| `headerTextColorDark` | string | [Page config headerTextColorDark](/micro_app_dev/config.html#page_config_param) | Header text color in dark mode |
| `showFullscreenBtn` | boolean | `false` | Whether to show the fullscreen button |
| `resize` | boolean | `false` | Whether to allow resizing the window |
| `move` | boolean | `false` | Whether to allow moving the window |

### OpenWindowOptions

Parameters for opening a window.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `componentName` | string | ✅ | Component name |
| `windowConfig` | [WindowConfig](#windowConfig) | - | Window config |
| `customParam` | any | - | Custom parameter |
| `title` | string | - | Window title |

### RequestParams {#requestparams}

Request parameter object.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `targetUrl` | string | ✅ | Target URL, supports template variables |
| `method` | string | - | Request method, default GET |
| `headers` | object | - | Request headers |
| `body` | string | - | Request body, if passing an object please `JSON.stringify(xxx)` to convert to a string |

### TemplateReplacementRule

Template replacement rule, used to replace placeholders with data from data nodes, avoiding sensitive data leaking to the frontend.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `placeholder` | string | ✅ | Placeholder to replace, such as <code v-pre>{{token}}</code> |
| `fields` | string[] | ✅ | Target fields for replacement, options: `targetUrl`, `method`, `headers`, `body` |
| `dataNodeKey` | string | ✅ | Data node key, such as `"config.token"` |
:::: warning Old version (v2.0.0-dev-6 and earlier) compatibility notes
The old parameter `dataNode` has been removed. Although compatibility handling is in place, new development should directly use `dataNodeKey`.
::::

### WidgetInfo

Widget info object.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `widgetId` | string | ✅ | Widget ID |
| `config` | Record<string, any> | ✅ | Widget config object, custom config data, do not fill with sensitive data; sensitive data can be stored in the data node |
| `background` | string | - | Card background color, follows system default color when empty |
| `gridSize` | string | - | Card grid size, this item can only be read by the micro app, not set |
| `title` | string | - | Card bottom title, read-only, cannot be set |

### MonitorType {#monitortype}

Monitoring data type.

| Value | Description |
|-------|-------------|
| `'cpu'` | CPU usage |
| `'memory'` | Memory usage |
| `'disk'` | Disk usage |
| `'network'` | Network traffic statistics |

### MonitorRegistrationConfig {#monitorregistrationconfig}

Monitoring subscription config.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `types` | [MonitorType](#monitortype)[] | ✅ | Array of monitoring types |
| `callback` | (data: [MonitorDataResp](#monitordataresp)) => void | ✅ | Data callback function |
| `interval` | number | ✅ | Update interval (milliseconds), minimum 1000 |
| `diskPaths` | string[] | - | Disk mount path array (only needed when querying disk type) |

### MonitorDataResp {#monitordataresp}

Monitoring data response.

| Property | Type | Description |
|----------|------|-------------|
| `cpu` | CPUInfo | CPU info (returned when request includes cpu) |
| `memory` | MemoryInfo | Memory info (returned when request includes memory) |
| `disk` | DiskInfo[] | Disk info array (returned when request includes disk) |
| `network` | NetIOCountersInfo[] | Network traffic array (returned when request includes network) |

### CPUInfo

| Property | Type | Description |
|----------|------|-------------|
| `coreCount` | number | CPU core count |
| `cpuNum` | number | CPU logical processor count |
| `model` | string | CPU model |
| `usages` | number[] | Each core's usage (percentage) |

### MemoryInfo

| Property | Type | Description |
|----------|------|-------------|
| `total` | number | Total memory (bytes) |
| `used` | number | Used memory (bytes) |
| `free` | number | Free memory (bytes) |
| `usedPercent` | number | Usage (percentage) |

### DiskInfo

| Property | Type | Description |
|----------|------|-------------|
| `title` | string | Disk title |
| `mountpoint` | string | Mount path |
| `total` | number | Total capacity (bytes) |
| `used` | number | Used (bytes) |
| `free` | number | Free (bytes) |
| `usedPercent` | number | Usage (percentage) |

### NetIOCountersInfo

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Network interface name |
| `bytesSent` | number | Bytes sent |
| `bytesRecv` | number | Bytes received |

### SystemInfo {#systeminfo}

Basic system info.

| Property | Type | Description |
|----------|------|-------------|
| `hostname` | string | Hostname |
| `os` | string | Operating system |
| `platform` | string | Platform (ubuntu, centos, etc.) |
| `platformVer` | string | Platform version |
| `arch` | string | Architecture (amd64, arm64, etc.) |
| `uptime` | number | Uptime (seconds) |
| `bootTime` | number | Boot time (Unix timestamp) |
| `load1` | number | 1-minute load |
| `load5` | number | 5-minute load |
| `load15` | number | 15-minute load |
| `fetchedAt` | number | Data fetch time (Unix timestamp) |

## Error Types

### SpNetworkRequestError

Network request error.

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Fixed to `'SpNetworkRequestError'` |
| `type` | `'microApp' \| 'targetUrl' \| 'unknown'` | Error type |
| `response` | [`HttpResponse`](#HttpResponse) \| `AxiosResponse` | Response object |

### SpDataNodeError

Data node error.

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Fixed to `'SpDataNodeError'` |
| `code` | `string \| number` | Error code: `NO_PERMISSION`, `UNKNOWN` |

### HttpResponse {#HttpResponse}

HTTP response type, compatible with AxiosResponse structure.

| Property | Type | Description |
|----------|------|-------------|
| `data` | any | Response data |
| `status` | number | HTTP status code |
| `statusText` | string | Status text |
| `headers` | Record<string, any> | Response headers |
| `config` | any | Request config (optional) |
| `request` | any | Original request object (optional) |

## Notes

1. **Asynchronous operations**: Most APIs are asynchronous, it is recommended to use `async/await` to handle them
2. **Error handling**: Use try-catch to catch exceptions and distinguish error sources based on `error.type`
3. **User-level and app-level**: User-level data is only visible to the current user, app-level data is shared by all users
4. **Permission requirements**: Using network and data node features requires declaring the corresponding permissions in `app.config.js`
