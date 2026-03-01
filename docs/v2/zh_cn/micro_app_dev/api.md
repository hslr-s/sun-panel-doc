---
outline: [2,4]
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
| `windowConfig` | [WindowConfig](#windowconfig) | - | 窗口配置，不填使用 [默认配置](v2/zh_cn/micro_app_dev/config.html#page_config_param) |
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
set(key: string, value: any, expireSeconds?: number): Promise<void>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `key` | string | ✅ | 缓存键 |
| `value` | any | ✅ | 缓存值 |
| `expireSeconds` | number | - | 过期时间（秒），0 表示不过期 |

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

接口方法与 `localCache.user` 完全一致，调用时将 `localCache.user` 改为 `localCache.app`。

**示例：**

```typescript
await this.spCtx.api.localCache.app.set('appConfig', { theme: 'dark' });
const config = await this.spCtx.api.localCache.app.get('appConfig');
```



## 数据节点 {#dataNode}

提供用户级和应用级的数据节点管理功能。详细的权限说明请参阅 [数据节点](./data_node)，本文档仅说明API的使用方法。

### 用户数据节点 (dataNode.user)

#### dataNode.user.getByKey

根据键获取用户数据节点中 `指定key` 的数据。

```typescript
getByKey<T = any>(node: string, key: string): Promise<T>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `node` | string | ✅ | 节点名称 |
| `key` | string | ✅ | 数据键 |

**示例：**

```javascript
try {
  const theme = await this.spCtx.api.dataNode.user.getByKey('preferences', 'theme');
  console.log(theme) // "dark"
} catch (e) {
  console.error(e.message);
}
```

#### dataNode.user.getByKeys

根据多个键获取用户数据节点中 `填入所有的key` 的数据。

```typescript
getByKeys<T = Record<string, any>>(node: string, keys: string[]): Promise<T>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `node` | string | ✅ | 节点名称 |
| `keys` | string[] | ✅ | 数据键数组 |

**示例：**

```javascript
try {
  const config = await this.spCtx.api.dataNode.user.getByKeys('config', ['token', 'location']);
  console.log(config)
  // 示例打印内容：
  // {
  //   "location": {
  //     "city": "北京"
  //   },
  //   "token": 12345678
  // }
} catch (e) {
  console.error('批量获取失败: ' , e.message);
}

```

#### dataNode.user.setByKey

在用户数据节点中设置数据。

```typescript
setByKey(node: string, key: string, value: any): Promise<void>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `node` | string | ✅ | 节点名称 |
| `key` | string | ✅ | 数据键 |
| `value` | any | ✅ | 数据值 |

**示例：**

```javascript
await this.spCtx.api.dataNode.user.setByKey('preferences', 'theme', { mode: 'dark' });
```

#### dataNode.user.setByKeys

批量设置用户数据节点中的数据。

```typescript
setByKeys(node: string, items: Record<string, any>): Promise<void>
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `node` | string | ✅ | 节点名称 |
| `items` | Record<string, any> | ✅ | 数据键值对对象，键为数据键，值为对应数据 |

**示例：**

```javascript
await this.spCtx.api.dataNode.user.setByKeys('config', {
  token: 'abc123',
  location: { city: '北京' }
});
```

#### dataNode.user.delByKey

删除用户数据节点中的数据。

```typescript
delByKey(node: string, key: string): Promise<void>
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

应用级数据节点提供与用户级数据节点相同的接口，但数据范围为应用级别，所有用户共享。接口方法与 `dataNode.user` 完全一致，调用时将 `dataNode.user` 改为 `dataNode.app`。


### 错误处理
错误需要使用 `try{...}catch{...}` 进行捕获，所有的数据节点API都支持，错误类型参考：[`SpDataNodeError`](#spdatanodeerror)

示例：
```javascript
try {
  const exampleData = {
    token: 'abc123',
    location: { city: '北京' }
  };
  await this.spCtx.api.dataNode.user.setByKeys("userConfig", exampleData);
  // this._showMessage('批量储存示例数据成功');
} catch (e) {
  console.error(e.code); // 错误代码 
  // this._showMessage('批量储存失败: ' + e.message, true);
}
```

## 网络透传 {#network}

发送网络请求，支持模板变量替换（用于安全地传递敏感信息）。

### network.request

```typescript
request<T = any>(options: RequestOptions): Promise<T>
```

**参数：**

- `options`: 请求参数对象，类型为 `RequestOptions`

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `request` | [RequestParams](#requestparams) | ✅ | 请求参数对象 |
| `templateReplacements` | [TemplateReplacementRule](#templatereplacementrule)[] | - | 模板替换规则 |
| `cookieDataNodeKey` | string | - | Cookie 数据节点键，格式 `"nodeName.key"`，详见下方说明 |

::: warning 旧版(v2.0.0-dev-6及之前版本)兼容说明
旧版参数 `targetUrl`、`method`、`headers`、`body` 已移入 `request` 属性，虽做了兼容处理，但新开发请直接使用 `request` 传值。
:::
{#cookie_manage}
::: tip Cookie 自动管理 
因安全考虑和受浏览器限制，可设置 `cookieDataNodeKey` 用于自动管理第三方站点的 Cookie，每个请求接口/域名单独分配一个数据节点的key来储存不同站点的cookie
- 配置后会自动保存目标站点设置的 Cookie 到指定数据节点
- 后续请求会自动携带保存的 Cookie
- 可通过 [数据节点 API](#dataNode) 读取或修改
- **注意：不管理过期时间、路径等，仅储存和传递**

命名建议：以域名为基础，并添加 `cookie` 后缀，如 `exampleComCookie`，最终： `config.exampleComCookie`


::: details  cookie 数据节点键的内容
使用标准api调用
`this.spCtx.api.dataNode.user.getByKey('config','example_com_cookie')`

打印内容：
```json
{
  // 之后请求读取此参数传递给请求站
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
:::

**示例：**

```typescript
const response = await this.spCtx.api.network.request({
  // 实际请求参数
  request: {
    targetUrl: 'https://{{domain}}/api/data',
    method: 'GET',
    headers: {
      "Authorization": "Bearer {{token}}"
    }
  },

  // 模版参数替换
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

  // 用于储存和读取本站cookie的数据节点键名
  // 命名建议:以域名作为内容（需自行将域名中的.改为下划线），cookie作为后缀
  cookieDataNodeKey:'config.example_com_cookie' 
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

### WindowConfig {#windowConfig}

窗口配置选项。

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `width` | number \| string | `800` | 窗口宽度，数字时单位为 `px` |
| `height` | number \| string | `600` | 窗口高度，数字时单位为 `px` |
| `background` | string | [页面配置的 background](/v2/zh_cn/micro_app_dev/config.html#page_config_param) | 背景颜色 |
| `headerTextColor` | string | [页面配置的 headerTextColor](/v2/zh_cn/micro_app_dev/config.html#page_config_param) | 标题栏文字颜色 |
| `showFullscreenBtn` | boolean | `false` | 是否显示全屏按钮 |
| `resize` | boolean | `false` | 是否允许调整窗口大小 |
| `move` | boolean | `false` | 是否允许移动窗口 |

### OpenWindowOptions

打开窗口的参数。

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `componentName` | string | ✅ | 组件名称 |
| `windowConfig` | [WindowConfig](#windowConfig) | - | 窗口配置 |
| `customParam` | any | - | 自定义参数 |
| `title` | string | - | 窗口标题 |

### RequestParams {#requestparams}

请求参数对象。

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `targetUrl` | string | ✅ | 目标 URL，支持模板变量 |
| `method` | string | - | 请求方法，默认 GET |
| `headers` | object | - | 请求头 |
| `body` | string | - | 请求体，如果传对象请 `JSON.stringify(xxx)` 转换为字符串 |

### TemplateReplacementRule

模板替换规则，用于将占位符替换为实际数据。

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `placeholder` | string | ✅ | 要替换的占位符，如 <code v-pre>{{token}}</code> |
| `fields` | string[] | ✅ | 替换参数的目标字段，可选：`targetUrl`、`method`、`headers`、`body` |
| `dataNodeKey` | string | ✅ | 数据节点键，如 `"config.token"` |
::: warning 旧版(v2.0.0-dev-6及之前版本)兼容说明
旧版参数 `dataNode` 已删除，虽做了兼容处理，但新开发请直接使用 `dataNodeKey`。
:::


### WidgetInfo

小部件信息对象。

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `widgetId` | string | ✅ | 小部件 ID |
| `background` | string | - | 卡片背景颜色，为空跟随系统默认颜色 |
| `config` | Record<string, any> | ✅ | 小部件配置对象，自定义配置数据，不可填写敏感数据，敏感数据可以储存在数据节点。 |
| `gridSize` | string | - | 卡片网格尺寸，此项微应用只可读取不可设置 |
| `title` | string | ✅ | 卡片底部标题 |



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
