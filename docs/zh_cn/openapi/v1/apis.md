---
outline: [2,3]
---

# Open API `V1` (开放的API接口) <Badge type="warning" text="beta" />

> `v1.4.0-beta24-04-11+` 新增，如果您是一位开发者，您可以通过调用API的方式来实现Sun-Panel相应的功能。

> [!IMPORTANT]
> 所有接口均采用 POST 请求方式。API请求需要token认证，请使用 `管理账号` 在 `Sun-Panel` 中找到 `OpenAPI` 应用去获取token

## Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
token |  ieyqw0x9nngzukrrmivx84hj7l2xkr1t| -


## API接口

### 创建项目

#### URL
> /openapi/v1/item/create

#### 请求内容

::: info 参数说明
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
iconUrl |https://baidu.com/favicon.ico | String | 是 | 图像地址
title | Baidu | String | 是 | 标题
onlyName | test_baidu | String | 否 | 唯一标识
url | https://baidu.com | String | 是 | 地址
lanUrl | - | String | 否 | 内网地址
description | - | String | 否 | 描述信息
:::

::: details 内容示例
```json
{
    "iconUrl":"",
    "title": "Baidu",
    "onlyName": "test_baidu",
    "url": "https://baidu.com",
    "lanUrl": "",
    "description": ""
}
```
:::

#### 成功响应

::: details 内容示例
```javascript
{
	"code": 0,
	"msg": "OK"
}
```
:::

#### 错误响应

可能出现的错误码：`1202`，错误码具体含义 [点此查看](./error_code.md)

::: details 内容示例
```javascript
{
	"code": 1202, 
	"msg": "..."
}
```
:::

### 根据唯一标识查询项目信息

#### URL
> /openapi/v1/item/getInfoByOnlyName

#### 请求内容

::: info 参数说明
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
onlyName | test_baidu | String | 是 | 唯一标识
:::

::: details 内容示例
```json
{
    "onlyName": "test_baidu"
}
```
:::


#### 成功响应

::: info 参数说明
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
iconUrl | - | String | 图像地址
title | Baidu | String |  标题
onlyName | test_baidu | String | 唯一标识
url | https://baidu.com | String |  地址
lanUrl | - | String | 内网地址
description | - | String |  描述信息
:::


::: details 内容示例
```javascript
{
	"code": 0,
	"data": {
		"iconUrl": "",
		"title": "Baidu",
		"onlyName": "test_baidu",
		"url": "https://baidu.com",
		"lanUrl": "",
		"description": ""
	},
	"msg": "OK"
}
```
:::


#### 错误响应

可能出现的错误码：`1203`，错误码具体含义 [点此查看](./error_code.md)

::: details 内容示例
```javascript
{
	"code": 1203,
	"msg": "..."
}
```
:::



### 修改项目

#### URL
> /openapi/v1/item/update

#### 请求内容

::: info 参数说明
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
onlyName | test_baidu | String | 是 | 唯一标识
iconUrl |https://baidu.com/favicon.ico | String | 是 | 图像地址
title | Baidu | String | 是 | 标题
url | https://baidu.com | String | 是 | 地址
lanUrl | - | String | 否 | 内网地址
description | - | String | 否 | 描述信息
:::

::: details 内容示例
```json
{
    "iconUrl":"",
    "title": "Baidu",
    "onlyName": "test_baidu",
    "url": "https://baidu.com",
    "lanUrl": "",
    "description": ""
}
```
:::

#### 成功响应

::: info 参数说明
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
iconUrl | - | String | 图像地址
title | Baidu | String |  标题
onlyName | test_baidu | String | 唯一标识
url | https://baidu.com | String |  地址
lanUrl | - | String | 内网地址
description | - | String |  描述信息
:::


::: details 内容示例
```javascript
{
	"code": 0,
	"data": {
		"iconUrl": "",
		"title": "Baidu",
		"onlyName": "test_baidu",
		"url": "https://baidu.com",
		"lanUrl": "",
		"description": ""
	},
	"msg": "OK"
}
```
:::
#### 错误响应

可能出现的错误码：`1202`、`1203`，错误码具体含义 [点此查看](./error_code.md)

::: details 内容示例
```javascript
{
	"code": 1202, 
	"msg": "..."
}
```
:::