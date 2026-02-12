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
  - `componentName`（必需）：组件名称
  - `windowConfig`（可选）：窗口配置，类型为 [`WindowConfig`](#windowconfig)
  - `customParam`（可选）：自定义参数
  - `title`（可选）：窗口标题

**返回值：** 窗口 ID（string 类型）

**示例：**

```typescript
const windowId = spCtx.window.open({
  componentName: 'MyComponent',
  title: '我的窗口',
  windowConfig: {
    width: 800,
    height: 600,
    isFullScreen: false
  },
  customParam: { userId: 123 }
});
```

#### window.close

关闭指定窗口。

```typescript
close(windowId: string): boolean
```

**参数：**

- `windowId`: 窗口 ID

**返回值：** 是否成功关闭（boolean 类型）

**示例：**

```typescript
const success = spCtx.window.close(windowId);
```

#### window.toggle

切换窗口的显示/隐藏状态。

```typescript
toggle(windowId: string): boolean
```

**参数：**

- `windowId`: 窗口 ID

**返回值：** 是否成功切换（boolean 类型）

**示例：**

```typescript
const success = spCtx.window.toggle(windowId);
```

### 缓存管理

提供用户级和应用级的缓存功能，支持数据的存储、获取、删除等操作。

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
const value = await spCtx.localCache.user.get('userInfo');
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
await spCtx.localCache.user.set('userInfo', { name: '张三' }, 3600); // 1小时后过期
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
await spCtx.localCache.user.del('userInfo');
```

##### localCache.user.clear

清空所有用户缓存。

```typescript
clear(): Promise<void>
```

**返回值：** Promise\<void\>

**示例：**

```typescript
await spCtx.localCache.user.clear();
```

##### localCache.user.getKeys

获取所有用户缓存的键。

```typescript
getKeys(): Promise<string[]>
```

**返回值：** 缓存键数组（Promise\<string[]\>）

**示例：**

```typescript
const keys = await spCtx.localCache.user.getKeys();
```

##### localCache.user.getWithCache

获取数据并缓存（如果缓存不存在则调用 API）。

```typescript
getWithCache<T>(key: string, apiCall: () => Promise<T>, expireTimestamp?: number): Promise<T>
```

**参数：**

- `key`: 缓存键
- `apiCall`: API 调用函数
- `expireTimestamp`: 过期时间（秒）

**返回值：** 数据值（Promise\<T\>）

**示例：**

```typescript
const data = await spCtx.localCache.user.getWithCache(
  'userData',
  () => fetchUserData(),
  1800 // 30分钟
);
```

#### 应用级缓存 (localCache.app)

应用级缓存提供与用户级缓存相同的接口，但数据范围为应用级别，所有用户共享。

接口方法与 `localCache.user` 完全一致：

- `get(key: string): Promise<any>`
- `set(key: string, value: any, expireTimestamp?: number): Promise<void>`
- `del(key: string): Promise<void>`
- `clear(): Promise<void>`
- `getKeys(): Promise<string[]>`
- `getWithCache<T>(key: string, apiCall: () => Promise<T>, expireTimestamp?: number): Promise<T>`

**示例：**

```typescript
// 设置应用级缓存
await spCtx.localCache.app.set('appConfig', { theme: 'dark' }, 86400);

// 获取应用级缓存
const config = await spCtx.localCache.app.get('appConfig');
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

```typescript
const userData = await spCtx.dataNode.user.getByKey('preferences', 'theme');
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

```typescript
const userData = await spCtx.dataNode.user.getByKeys('preferences', ['theme', 'language']);
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

```typescript
const result = await spCtx.dataNode.user.setByKey('preferences', 'theme', { mode: 'dark' });
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

```typescript
const deleted = await spCtx.dataNode.user.delByKey('preferences', 'theme');
```

#### 应用级数据节点 (dataNode.app)

应用级数据节点提供与用户级数据节点相同的接口，但数据范围为应用级别，所有用户共享。

接口方法与 `dataNode.user` 完全一致：

- `getByKey<T = any>(node: string, key: string): Promise<T>`
- `getByKeys<T = any>(node: string, keys: string[]): Promise<T>`
- `setByKey<T = any>(node: string, key: string, value: Record<string, any>): Promise<T>`
- `delByKey<T = any>(node: string, key: string): Promise<T>`

**示例：**

```typescript
// 设置应用级数据
await spCtx.dataNode.app.setByKey('config', 'globalSettings', { maxUsers: 100 });

// 获取应用级数据
const settings = await spCtx.dataNode.app.getByKey('config', 'globalSettings');
```

### 网络透传

提供网络请求功能，支持单个请求、批量请求和智能批量请求。

#### network.request

发送单个网络请求。

```typescript
request<T = any>(params: [AdvancedProxyRequest](#advancedproxyrequest)): Promise<T>
```

**参数：**

- `params`: 请求参数，类型为 [`AdvancedProxyRequest`](#advancedproxyrequest)，包含：
  - `targetUrl`（必需）：目标 URL
  - `method`（可选）：请求方法（GET/POST/PUT/DELETE/PATCH）
  - `headers`（可选）：请求头
  - `body`（可选）：请求体
  - `timeout`（可选）：超时时间

**返回值：** 响应数据（Promise\<T\>）

**示例：**

```typescript
const response = await spCtx.network.request({
  targetUrl: 'https://api.example.com/users',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer token123'
  }
});
```

#### network.batchRequest

批量发送网络请求。

```typescript
batchRequest<T = any>(params: [AdvancedBatchProxyRequest](#advancedbatchproxyrequest)): Promise<T>
```

**参数：**

- `params`: 批量请求参数，类型为 [`AdvancedBatchProxyRequest`](#advancedbatchproxyrequest)，包含：
  - `requests`（必需）：请求列表（[`AdvancedProxyItem`](#advancedproxyitem)[]）
  - `parallel`（可选）：是否并行执行

**返回值：** 响应数据（Promise\<T\>）

**示例：**

```typescript
const response = await spCtx.network.batchRequest({
  requests: [
    { url: 'https://api.example.com/users', method: 'GET' },
    { url: 'https://api.example.com/posts', method: 'GET' },
    { url: 'https://api.example.com/comments', method: 'GET' }
  ],
  parallel: true
});
```

#### network.smartBatchRequest

智能批量请求（自动分批）。

```typescript
smartBatchRequest<T = any>(requests: [AdvancedProxyItem](#advancedproxyitem)[], batchSize?: number): Promise<T[]>
```

**参数：**

- `requests`: 请求列表，类型为 [`AdvancedProxyItem`](#advancedproxyitem)[]
- `batchSize`: 每批数量（可选）

**返回值：** 响应数据数组（Promise\<T[]\>）

**示例：**

```typescript
const responses = await spCtx.network.smartBatchRequest([
  { url: 'https://api.example.com/data/1', method: 'GET' },
  { url: 'https://api.example.com/data/2', method: 'GET' },
  { url: 'https://api.example.com/data/3', method: 'GET' },
  // ... 更多请求
], 10); // 每批 10 个请求
```

### Widget 管理

提供 Widget 信息的保存功能。

#### widget.save

保存 Widget 信息。

```typescript
save<T = any>(data: WidgetInfo): Promise<T>
```

**参数：**

- `data`: Widget 信息对象，类型为 WidgetInfo

**返回值：** 保存结果（Promise\<T\>）

**示例：**

```typescript
const result = await spCtx.widget.save({
  id: 'widget-123',
  name: 'My Widget',
  config: { /* 配置项 */ }
});
```

---

## 错误类型

### MicroAppNetworkRequestError

微应用网络请求错误类。

**属性：**

| 属性 | 类型 | 说明 |
|------|------|------|
| `name` | string | 错误名称，固定为 `'MicroAppNetworkRequestError'` |
| `type` | `'microApp' \| 'targetUrl' \| 'unknown'` | 错误类型 |
| `response` | AxiosResponse \| undefined | 响应对象（可选） |

**构造函数：**

```typescript
constructor(message: string, type: 'microApp' | 'targetUrl' | 'unknown' = 'unknown', response?: any)
```

### MicroDataNodeError

数据节点错误类。

**属性：**

| 属性 | 类型 | 说明 |
|------|------|------|
| `name` | string | 错误名称，固定为 `'MicroDataNodeError'` |
| `code` | string \| number | 错误码 |
| `response` | AxiosResponse \| undefined | 响应对象（可选） |

**构造函数：**

```typescript
constructor(message: string, code: string | number, response?: any)
```

---

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

### PageInitializedParam

页面初始化参数。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `widgetInfo` | WidgetInfo | 否 | 组件信息 |
| `customParam` | any | 是 | 自定义参数 |

### AdvancedProxyRequest

高级代理请求参数。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `targetUrl` | string | 是 | 目标 URL |
| `method` | 'GET' \| 'POST' \| 'PUT' \| 'DELETE' \| 'PATCH' | 否 | 请求方法 |
| `headers` | Record\<string, string\> | 否 | 请求头 |
| `body` | any | 否 | 请求体 |
| `timeout` | number | 否 | 超时时间（毫秒） |

### AdvancedProxyItem

高级代理请求项。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `url` | string | 是 | 请求 URL |
| `method` | string | 否 | 请求方法 |
| `headers` | Record\<string, string\> | 否 | 请求头 |
| `body` | any | 否 | 请求体 |

### AdvancedBatchProxyRequest

批量代理请求参数。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `requests` | [`AdvancedProxyItem`](#advancedproxyitem)[] | 是 | 请求列表 |
| `parallel` | boolean | 否 | 是否并行执行 |

### SaveDataNodeRequest

保存数据节点请求。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `node` | string | 是 | 节点名称 |
| `data` | any | 是 | 数据内容 |

### GetDataNodeRequest

获取数据节点请求。

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `node` | string | 是 | 节点名称 |

## 注意事项

1. **异步操作**：大部分 API 都是异步的，返回 Promise，建议使用 `async/await` 或 `.then()` 处理
2. **错误处理**：建议使用 try-catch 捕获异常，并区分错误类型
3. **缓存过期**：设置缓存时，注意合理设置过期时间，避免数据过期
4. **批量请求**：使用批量请求时，注意控制并发数量，避免服务器压力过大
5. **用户级与应用级**：用户级数据仅对当前用户可见，应用级数据对所有用户共享，根据场景选择合适的存储级别
