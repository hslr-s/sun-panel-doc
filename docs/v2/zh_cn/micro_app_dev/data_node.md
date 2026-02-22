# 数据节点

数据节点是微应用的持久化数据存储机制，数据根据账号和应用 ID 进行隔离存储。每个微应用可以有多个数据节点，每个数据节点可以存储多个 key 对象。**节点需要在配置文件中注册才能正常使用。**


## 基本概念

- **APP 级别**：所有用户全局使用，适合公共配置
- **USER 级别**：当前登录账号专用，账号之间数据隔离

### 公开模式

数据节点支持设置 `isPublic` 属性：
- `isPublic: true` - 公开模式下可读取
- `isPublic: false` - 仅登录用户可读写


## 权限说明

| 登录模式 / 范围 | APP (公开) | APP | USER (公开) | USER |
|----------------|------------|-----|-------------|------|
| 公开模式 | 读 | - | 读 | - |
| 普通账号 | 读 | - | 读、写 | 读、写 |
| 管理账号 | 读、写 | 读、写 | 读、写 | 读、写 |


## 配置说明

在 `app.config.js` 中配置数据节点：

```javascript
export default {
  // ... 此处已省略其他配置代码

  // 需要声明 dataNode 权限
  permissions: ['dataNode'],

  dataNodes: {
    // 城市列表 - APP级别，公开可读
    cityList: {
      scope: 'app',
      isPublic: true
    },
    // 用户选择的城市 - USER级别，公开可读
    userCity: {
      scope: 'user',
      isPublic: true
    },
    // API密钥 - APP级别，仅管理员可写
    apiKey: {
      scope: 'app',
      isPublic: false
    },
    // 用户私有数据 - USER级别
    privateData: {
      scope: 'user',
      isPublic: false
    }
  }
};
```

### 配置参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `scope` | string | 数据作用域：`'app'` 或 `'user'` |
| `isPublic` | boolean | 是否允许公开模式下读取 |


## 使用场景示例

以天气微应用为例：

| 数据 | 作用域 | 公开 | 说明 |
|------|--------|------|------|
| 城市列表 | APP | ✅ | 所有用户查看相同数据 |
| 用户选择的城市 | USER | ✅ | 各用户独立选择 |
| API 密钥 | APP | ❌ | 仅管理员配置 |
| 用户自定义设置 | USER | ❌ | 各用户独立配置 |

::: tip
如果无法确定数据范围，请完全使用 USER 级别的数据节点。
:::


## 使用方法

详细 API 调用方式请参阅 [平台 API](./api)。

```javascript
// 获取用户数据
const userCity = await this.spCtx.api.dataNode.user.getByKey('userCity', 'selected');

// 设置用户数据
await this.spCtx.api.dataNode.user.setByKey('userCity', 'selected', { city: '北京' });

// 获取应用数据
const apiKey = await this.spCtx.api.dataNode.app.getByKey('config', 'apiKey');

// 设置应用数据
await this.spCtx.api.dataNode.app.setByKey('config', 'apiKey', { key: 'xxx' });
```
