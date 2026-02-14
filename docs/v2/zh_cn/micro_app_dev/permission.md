# 权限声明

微应用需要在 `app.config.js` 中声明所需权限才能使用相应的平台能力。


## 权限类型

| 权限 | 说明 |
|------|------|
| `network` | 允许应用访问网络资源 |
| `dataNode` | 允许应用使用数据节点功能 |
| `iframe` | 允许使用 iframe（需在微应用内嵌入 iframe 时声明） |


## 配置示例

```javascript
export default {
  // 基础信息
  author: 'hslr',
  microAppId: 'hslr-weather',
  version: '1.0.0',
  // ...

  // 权限配置
  permissions: [
    'network',     // 需要网络请求
    'dataNode'    // 需要数据节点
  ],

  // 网络域名白名单（使用 network 权限时必填）
  networkDomains: [
    'api.weather.com',
    'github.com'
  ]
};
```


## 注意事项

- 请务必准确声明所需权限，未声明的权限将无法使用
- 网络权限需要同时配置 `networkDomains` 白名单
- 如果微应用内使用 iframe，务必声明 `iframe` 权限，否则审核不会通过
