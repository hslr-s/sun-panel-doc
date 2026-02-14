---
outline: [2,3]
---
# 微应用 API 文档

本文档描述了微应用可用的 API 接口及其使用方法。

## API

以下API，全部封装在 `this.spCtx.api` 下，调用时`this.spCtx.api.xxx`

### 窗口管理

提供窗口打开、关闭、显示/隐藏等功能。

#### window.open

打开一个新窗口。

```typescript
open(options: [OpenWindowOptions](#openwindowoptions)): string
```

**参数：**

- `options`: 窗口配置参数，类型为 [`OpenWindowOptions`](#openwindowoptions)，包含：
  - `componentName`（必需）：组件名称，(组件配置下 pages 的 key 名)
  - `windowConfig`（可选）：窗口配置，类型为 [`WindowConfig`](#windowconfig)
  - `customParam`（可选）：自定义参数
  - `title`（可选）：窗口标题

**返回值：** 窗口 ID（string 类型）

**示例：**

```typescript
const windowId = this.spCtx.api.window.open({
  componentName: 'my-component',
  title: '天气详情',
  windowConfig: {
    width: 800,
    height: 600,
    isFullScreen: false
  },
  customParam: { cityId:1001 }
});
```

### 缓存管理

基于`IndexedDB`。提供用户级和应用级的缓存功能，支持数据的存储、获取、删除等操作。可在浏览器调试窗口中 IndexedDB 菜单中查看。

#### 用户级缓存 (localCache.user)

##### localCache.user.get

获取用户缓存值。

```typescript
get(key: string): Promise<any>
```

**参数：**

- `key`: 缓存键

**返回值：** 缓存值（Promise\<any\>）

**示例：**

```typescript
const value = await this.spCtx.api.localCache.user.get('userInfo');
```

##### localCache.user.set

设置用户缓存值。

```typescript
set(key: string, value: any, expireTimestamp?: number): Promise<void>
```

**参数：**

- `key`: 缓存键
- `value`: 缓存值
- `expireTimestamp`: 过期时间（秒），0 表示不过期，默认为不过期

**返回值：** Promise\<void\>

**示例：**

```typescript
await this.spCtx.api.localCache.user.set('userInfo', { name: '张三' }, 3600); // 1小时后过期
```

##### localCache.user.del

删除用户缓存。

```typescript
del(key: string): Promise<void>
```

**参数：**

- `key`: 缓存键

**返回值：** Promise\<void\>

**示例：**

```typescript
await this.spCtx.api.localCache.user.del('userInfo');
```

##### localCache.user.clear

清空所有用户缓存。

```typescript
clear(): Promise<void>
```

**返回值：** Promise\<void\>

**示例：**

```typescript
await this.spCtx.api.localCache.user.clear();
```

##### localCache.user.getKeys

获取所有用户缓存的键。

```typescript
getKeys(): Promise<string[]>
```

**返回值：** 缓存键数组（Promise\<string[]\>）

**示例：**

```typescript
const keys = await this.spCtx.api.localCache.user.getKeys();
```

#### 应用级缓存 (localCache.app)

应用级缓存提供与用户级缓存相同的接口，但数据范围为应用级别，所有用户共享。

接口方法与 `localCache.user` 完全一致：

- `get(key: string): Promise<any>`
- `set(key: string, value: any, expireTimestamp?: number): Promise<void>`
- `del(key: string): Promise<void>`
- `clear(): Promise<void>`
- `getKeys(): Promise<string[]>`

**示例：**

```typescript
// 设置应用级缓存
await this.spCtx.api.localCache.app.set('appConfig', { theme: 'dark' }, 86400);

// 获取应用级缓存
const config = await this.spCtx.api.localCache.app.get('appConfig');
```

### 数据节点 {#data_node}

提供用户级和应用级的数据节点管理功能，支持按键存储、获取和删除数据。

#### 用户数据节点 (dataNode.user)

##### dataNode.user.getByKey

根据键获取用户数据节点中的数据。

```typescript
getByKey<T = any>(node: string, key: string): Promise<T>
```

**参数：**

- `node`: 节点名称
- `key`: 数据键

**返回值：** 数据值（Promise\<T\>）

**示例：**

```js
try {
  const userData = await this.spCtx.api.dataNode.user.getByKey('preferences', 'theme');
  console.log('userData:', userData)
} catch (error) {
  console.error('[Card] Failed to get userData:', error.code, error.message)
}
```

##### dataNode.user.getByKeys

根据多个键获取用户数据节点中的数据。

```typescript
getByKeys<T = any>(node: string, keys: string[]): Promise<T>
```

**参数：**

- `node`: 节点名称
- `keys`: 数据键数组

**返回值：** 数据值（Promise\<T\>）

**示例：**

```js
try {
  const config = await this.spCtx.api.dataNode.user.getByKeys('config', ['token', 'location', 'domain']);
  console.log('config:', config)
} catch (error) {
  console.error('[Card] Failed to get config:', error.code, error.message)
}
```

##### dataNode.user.setByKey

在用户数据节点中设置数据。

```typescript
setByKey<T = any>(node: string, key: string, value: Record<string, any>): Promise<T>
```

**参数：**

- `node`: 节点名称
- `key`: 数据键
- `value`: 数据值

**返回值：** 设置后的数据（Promise\<T\>）

**示例：**

```js
try {
  const result = await this.spCtx.api.dataNode.user.setByKey('preferences', 'theme', { mode: 'dark' });
  console.log('result:', result)
} catch (error) {
  console.error('[Card] Failed to set data:', error.code, error.message)
}
```

##### dataNode.user.delByKey

删除用户数据节点中的数据。

```typescript
delByKey<T = any>(node: string, key: string): Promise<T>
```

**参数：**

- `node`: 节点名称
- `key`: 数据键

**返回值：** 删除的数据（Promise\<T\>）

**示例：**

```js
try {
  const deleted = await this.spCtx.api.dataNode.user.delByKey('preferences', 'theme');
  console.log('deleted:', deleted)
} catch (error) {
  console.error('[Card] Failed to delete data:', error.code, error.message)
}
```

#### 应用级数据节点 (dataNode.app)

应用级数据节点提供与用户级数据节点相同的接口，但数据范围为应用级别，所有用户共享。

接口方法与 `dataNode.user` 完全一致：

- `getByKey<T = any>(node: string, key: string): Promise<T>`
- `getByKeys<T = any>(node: string, keys: string[]): Promise<T>`
- `setByKey<T = any>(node: string, key: string, value: Record<string, any>): Promise<T>`
- `delByKey<T = any>(node: string, key: string): Promise<T>`

**示例：**

```js
// 设置应用级数据
try {
  await this.spCtx.api.dataNode.app.setByKey('config', 'globalSettings', { maxUsers: 100 });
  console.log('App data set successfully')
} catch (error) {
  console.error('[Card] Failed to set app data:', error.code, error.message)
}

// 获取应用级数据
try {
  const settings = await this.spCtx.api.dataNode.app.getByKey('config', 'globalSettings');
  console.log('settings:', settings)
} catch (error) {
  console.error('[Card] Failed to get app data:', error.code, error.message)
}
```

### 网络透传

提供网络请求功能，支持单个请求和模板替换功能。

#### network.request

发送单个网络请求，支持模板变量替换。

```typescript
request<T = any>(params: any): Promise<T>
```

**参数：**

- `params`: 请求参数对象

**返回值：** 响应数据（Promise\<T\>）

**示例：**
```js
// 定义请求参数对象
const requestOptions = {
  targetUrl: 'https://{{domain}}/v7/weather/now?location={{location}}',
  method: 'GET',
  headers: {
    "X-QW-Api-Key": "{{token}}"
  },
  templateReplacements: [
    {
      placeholder: '{{token}}',
      fields: ['headers'],
      dataNode: 'config.token'
    },
    {
      placeholder: '{{location}}',
      fields: ['targetUrl'],
      dataNode: 'config.location'
    },
    {
      placeholder: '{{domain}}',
      fields: ['targetUrl'],
      dataNode: 'config.domain'
    }
  ],
};

await this.spCtx.api.network.request(requestOptions).then((response) => {
  console.log('request AxiosResponse:', response)
}).catch((error) => {
  console.log("返回的 AxiosResponse 原始对象", error.response)
  // 判断错误类型
  switch (error.type) {
    case 'microApp':
      // 微应用错误权限不足等...还没有请求到三方站点
      break;
    case 'targetUrl':
      // 三方目标站点返回的错误
      break;
    default:
      console.error('AxiosResponse:', error);
      break;
  }
})
```

### Widget 管理

提供 Widget 信息的保存功能。

#### widget.save

保存 Widget 信息。

```typescript
save<T = any>(data: WidgetInfo): Promise<T>
```

**参数：**

- `data`: Widget 信息对象，类型为 [`WidgetInfo`](#widgetinfo)

**返回值：** 保存结果（Promise\<T\>）

**示例：**
```js
this.spCtx.api.widget.save({
  ...this.widgetInfo,
  config: {
    ...this.widgetInfo.config,
    showLogo: this.showLogo,
    textOption: this.textOption,
    customText: this.customText,
    useSystemBgColor: this.useSystemBgColor
  },
});
```


## 错误类型

### MicroAppNetworkRequestError

微应用网络请求错误类。

**属性：**

| 属性 | 类型 | 说明 |
|------|------|------|
| `name` | string | 错误名称，固定为 `'MicroAppNetworkRequestError'` |
| `type` | `'microApp' \| 'targetUrl' \| 'unknown'` | 错误类型 |
| `response` | AxiosResponse \| undefined | 响应对象（可选） |

<!-- **构造函数：** -->

<!-- ```typescript
constructor(message: string, type: 'microApp' | 'targetUrl' | 'unknown' = 'unknown', response?: any)
``` -->

### MicroDataNodeError

数据节点错误类。

**属性：**

| 属性 | 类型 | 说明 |
|------|------|------|
| `name` | string | 错误名称，固定为 `'MicroDataNodeError'` |
| `code` | string \| number | 错误码 `NO_PERMISSION`,`UNKNOWN` |
| `response` | AxiosResponse \| undefined | 响应对象（可选） |

<!-- **构造函数：** -->

<!-- ```typescript
constructor(message: string, code: string | number, response?: any)
``` -->

## 数据类型

### WindowConfig

窗口配置选项。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `height` | number | 否 | 窗口高度 |
| `width` | number | 否 | 窗口宽度 |
| `left` | number | 否 | 窗口左侧位置 |
| `top` | number | 否 | 窗口顶部位置 |
| `isFullScreen` | boolean | 否 | 是否全屏 |
| `background` | string | 否 | 背景颜色 |

### OpenWindowOptions

打开窗口的参数。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `componentName` | string | 是 | 组件名称 |
| `windowConfig` | [`WindowConfig`](#windowconfig) | 否 | 窗口配置 |
| `customParam` | any | 否 | 自定义参数 |
| `title` | string | 否 | 窗口标题 |

### TemplateReplacementRule

模板替换规则，用于将占位符替换为实际数据。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `placeholder` | string | 是 | 要替换的占位符，如 `{{token}}` |
| `fields` | string[] | 是 | 替换参数的目标字段，可选：`targetUrl`、`method`、`headers`、`body` |
| `dataNode` | string | 是 | 数据节点路径，如 `"config.token"` |

**示例：**

```typescript
{
  placeholder: '{{token}}',
  fields: ['headers'],
  dataNode: 'config.accessToken'
}
```

### WidgetInfo

Widget 信息对象。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `widgetId` | string | 是 | Widget ID |
| `background` | string | 否 | 背景颜色 |
| `config` | Record\<string, any\> | 是 | 配置对象 |
| `gridSize` | string | 是 | 网格大小 |
| `title` | string | 是 | 标题 |

**示例：**

```typescript
{
  widgetId: 'widget-123',
  background: '#ffffff',
  config: {
    refreshInterval: 60,
    showHeader: true
  },
  gridSize: '1x1',
  title: 'My Widget'
}
```

## 注意事项

1. **异步操作**：大部分 API 都是异步的，返回 Promise，建议使用 `async/await` 或 `.then()` 处理
2. **错误处理**：建议使用 try-catch 捕获异常，并区分错误类型
3. **缓存过期**：设置缓存时，注意合理设置过期时间，避免数据过期
4. **用户级与应用级**：用户级数据仅对当前用户可见，应用级数据对所有用户共享，根据场景选择合适的存储级别
