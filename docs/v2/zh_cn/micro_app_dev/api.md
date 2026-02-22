---
outline: [2,3]
---

# 平台 API

微应用通过 `this.spCtx.api` 调用平台提供的各种能力。部分 API 是异步的（返回 Promise），部分 API 是同步的（直接返回值）。

::: tip IDE 类型提示
安装 `@sun-panel/micro-app` SDK 后，在 IDE 中输入 `this.spCtx.api.` 时会自动弹出类型提示和代码补全。
:::


## 窗口管理

### window.open

打开一个新窗口。

```typescript
open(options: OpenWindowOptions): string
```

**参数：**

- `options`: 窗口配置参数，类型为 [`OpenWindowOptions`](#openwindowoptions)

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `componentName` | string | ✅ | 组件名称（组件配置下 pages 的 key 名） |
| `windowConfig` | [WindowConfig](#windowconfig) | - | 窗口配置 |
| `customParam` | any | - | 自定义参数 |
| `title` | string | - | 窗口标题 |

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
  customParam: { cityId: 1001 }
});
```



## 本地缓存

基于 IndexedDB，提供用户级和应用级的缓存功能。

### 用户级缓存 (localCache.user)

#### localCache.user.get

获取用户缓存值。

```typescript
get(key: string): Promise<any>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `key` | string | ✅ | 缓存键 |

**示例：**

```typescript
const value = await this.spCtx.api.localCache.user.get('userInfo');
```

#### localCache.user.set

设置用户缓存值。

```typescript
set(key: string, value: any, expireTimestamp?: number): Promise<void>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `key` | string | ✅ | 缓存键 |
| `value` | any | ✅ | 缓存值 |
| `expireTimestamp` | number | - | 过期时间（秒），0 表示不过期 |

**示例：**

```typescript
await this.spCtx.api.localCache.user.set('userInfo', { name: '张三' }, 3600);
```

#### localCache.user.del

删除用户缓存。

```typescript
del(key: string): Promise<void>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `key` | string | ✅ | 缓存键 |

**示例：**

```typescript
await this.spCtx.api.localCache.user.del('userInfo');
```

#### localCache.user.clear

清空所有用户缓存。

```typescript
clear(): Promise<void>
```

**示例：**

```typescript
await this.spCtx.api.localCache.user.clear();
```

#### localCache.user.getKeys

获取所有用户缓存的键。

```typescript
getKeys(): Promise<string[]>
```

**返回值：** 缓存键数组

**示例：**

```typescript
const keys = await this.spCtx.api.localCache.user.getKeys();
```

### 应用级缓存 (localCache.app)

应用级缓存提供与用户级缓存相同的接口，但数据范围为应用级别，所有用户共享。

接口方法与 `localCache.user` 完全一致：

- `get(key: string): Promise<any>`
- `set(key: string, value: any, expireTimestamp?: number): Promise<void>`
- `del(key: string): Promise<void>`
- `clear(): Promise<void>`
- `getKeys(): Promise<string[]>`

**示例：**

```typescript
await this.spCtx.api.localCache.app.set('appConfig', { theme: 'dark' });
const config = await this.spCtx.api.localCache.app.get('appConfig');
```



## 数据节点

提供用户级和应用级的数据节点管理功能。

### 用户数据节点 (dataNode.user)

#### dataNode.user.getByKey

根据键获取用户数据节点中的数据。

```typescript
getByKey<T = any>(node: string, key: string): Promise<T>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `node` | string | ✅ | 节点名称 |
| `key` | string | ✅ | 数据键 |

**示例：**

```javascript
const userData = await this.spCtx.api.dataNode.user.getByKey('preferences', 'theme');
```

#### dataNode.user.getByKeys

根据多个键获取用户数据节点中的数据。

```typescript
getByKeys<T = any>(node: string, keys: string[]): Promise<T>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `node` | string | ✅ | 节点名称 |
| `keys` | string[] | ✅ | 数据键数组 |

**示例：**

```javascript
const config = await this.spCtx.api.dataNode.user.getByKeys('config', ['token', 'location']);
```

#### dataNode.user.setByKey

在用户数据节点中设置数据。

```typescript
setByKey<T = any>(node: string, key: string, value: Record<string, any>): Promise<T>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `node` | string | ✅ | 节点名称 |
| `key` | string | ✅ | 数据键 |
| `value` | Record<string, any> | ✅ | 数据值 |

**示例：**

```javascript
await this.spCtx.api.dataNode.user.setByKey('preferences', 'theme', { mode: 'dark' });
```

#### dataNode.user.delByKey

删除用户数据节点中的数据。

```typescript
delByKey<T = any>(node: string, key: string): Promise<T>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `node` | string | ✅ | 节点名称 |
| `key` | string | ✅ | 数据键 |

**示例：**

```javascript
await this.spCtx.api.dataNode.user.delByKey('preferences', 'theme');
```

### 应用数据节点 (dataNode.app)

应用级数据节点提供与用户级数据节点相同的接口，但数据范围为应用级别，所有用户共享。

接口方法与 `dataNode.user` 完全一致：

- `getByKey<T = any>(node: string, key: string): Promise<T>`
- `getByKeys<T = any>(node: string, keys: string[]): Promise<T>`
- `setByKey<T = any>(node: string, key: string, value: Record<string, any>): Promise<T>`
- `delByKey<T = any>(node: string, key: string): Promise<T>`

详细说明请参阅 [数据节点](./data_node)。



## 网络透传

发送网络请求，支持模板变量替换（用于安全地传递敏感信息）。

### network.request

```typescript
request<T = any>(options: RequestOptions): Promise<T>
```

**参数：**

- `options`: 请求参数对象，类型为 `RequestOptions`

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `targetUrl` | string | ✅ | 目标 URL，支持模板变量 |
| `method` | string | - | 请求方法，默认 GET |
| `headers` | object | - | 请求头 |
| `body` | string | - | 请求体，如果传对象请 `JSON.stringify(xxx)` 转换为字符串 |
| `templateReplacements` | [TemplateReplacementRule](#templatereplacementrule)[] | - | 模板替换规则 |

**示例：**

```typescript
const response = await this.spCtx.api.network.request({
  targetUrl: 'https://{{domain}}/api/data',
  method: 'GET',
  headers: {
    "Authorization": "Bearer {{token}}"
  },
  templateReplacements: [
    {
      placeholder: '{{token}}',
      fields: ['headers'],
      dataNode: 'config.token'
    },
    {
      placeholder: '{{domain}}',
      fields: ['targetUrl'],
      dataNode: 'config.domain'
    }
  ],
});
```

错误处理：

```typescript
try {
  const response = await this.spCtx.api.network.request(options);
  console.log(response);
} catch (error) {
  switch (error.type) {
    case 'microApp':
      // 微应用错误（权限不足等）
      break;
    case 'targetUrl':
      // 目标站点返回的错误
      break;
    default:
      console.error(error);
  }
}
```



## 小部件管理

### widget.save

保存小部件配置信息。

```typescript
save<T = any>(data: WidgetInfo): Promise<T>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `data` | [WidgetInfo](#widgetinfo) | ✅ | 小部件信息对象 |

**示例：**

```javascript
await this.spCtx.api.widget.save({
  ...this.spCtx.widgetInfo,
  config: {
    showLogo: this.showLogo,
    customText: this.customText
  },
});
```



## 数据类型

> 以下类型定义均来自 `@sun-panel/micro-app` SDK，可在 IDE 中自动补全。

### WindowConfig

窗口配置选项。

| 属性 | 类型 | 说明 |
|------|------|------|
| `height` | number | 窗口高度 |
| `width` | number | 窗口宽度 |
| `left` | number | 窗口左侧位置 |
| `top` | number | 窗口顶部位置 |
| `isFullScreen` | boolean | 是否全屏 |
| `background` | string | 背景颜色 |

### OpenWindowOptions

打开窗口的参数。

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `componentName` | string | ✅ | 组件名称 |
| `windowConfig` | WindowConfig | - | 窗口配置 |
| `customParam` | any | - | 自定义参数 |
| `title` | string | - | 窗口标题 |

### TemplateReplacementRule

模板替换规则，用于将占位符替换为实际数据。

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `placeholder` | string | ✅ | 要替换的占位符，如 `{{token}}` |
| `fields` | string[] | ✅ | 替换参数的目标字段，可选：`targetUrl`、`method`、`headers`、`body` |
| `dataNode` | string | ✅ | 数据节点路径，如 `"config.token"` |

### WidgetInfo

小部件信息对象。

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `widgetId` | string | ✅ | 小部件 ID |
| `background` | string | - | 背景颜色 |
| `config` | Record<string, any> | ✅ | 配置对象 |
| `gridSize` | string | ✅ | 网格大小 |
| `title` | string | ✅ | 标题 |



## 错误类型

### SpNetworkRequestError

网络请求错误。

| 属性 | 类型 | 说明 |
|------|------|------|
| `name` | string | 固定为 `'SpNetworkRequestError'` |
| `type` | `'microApp' \| 'targetUrl' \| 'unknown'` | 错误类型 |
| `response` | [`HttpResponse`](#HttpResponse) \| `AxiosResponse` | 响应对象 |

### SpDataNodeError

数据节点错误。

| 属性 | 类型 | 说明 |
|------|------|------|
| `name` | string | 固定为 `'SpDataNodeError'` |
| `code` | `string \| number` | 错误码：`NO_PERMISSION`, `UNKNOWN` |

### HttpResponse {#HttpResponse}

HTTP 响应类型，兼容 AxiosResponse 结构。

| 属性 | 类型 | 说明 |
|------|------|------|
| `data` | any | 响应数据 |
| `status` | number | HTTP 状态码 |
| `statusText` | string | 状态文本 |
| `headers` | Record<string, any> | 响应头 |
| `config` | any | 请求配置（可选） |
| `request` | any | 原始请求对象（可选） |



## 注意事项

1. **异步操作**：大部分 API 都是异步的，建议使用 `async/await` 处理
2. **错误处理**：使用 try-catch 捕获异常，并根据 `error.type` 区分错误来源
3. **用户级与应用级**：用户级数据仅对当前用户可见，应用级数据对所有用户共享
4. **权限要求**：使用网络和数据节点功能需在 `app.config.js` 中声明相应权限
