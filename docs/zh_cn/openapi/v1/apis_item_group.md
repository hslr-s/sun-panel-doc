---
outline: [1,3]
---

# 图标卡片组相关接口 

**`v1.7.*` 版本开始支持**


## 创建一个图标卡片分组

### URL
> /openapi/v1/itemGroup/create

### 请求内容

::: info 参数说明
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
title | Baidu | String | 是 | 标题
onlyName | test_baidu | String | 否 | 唯一标识
:::

::: details 内容示例
```json
{
    "title": "Group 1",
    "onlyName": "group1",
}
```
:::

### 成功响应

::: details 内容示例
```javascript
{
    "code": 0,
    "msg": "OK"
}
```
:::

### 错误响应

可能出现的错误码：`1202`，错误码具体含义 [点此查看](./error_code.md)

::: details 内容示例
```javascript
{
    "code": 1202, 
    "msg": "..."
}
```
:::

## 根据唯一标识查询项目信息

### URL
> /openapi/v1/itemGroup/getInfo

### 请求内容

::: info 参数说明
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
itemGroupID | 1 | Integer | 与 `onlyName` 二选一个填写，都填写将使用 `itemGroupID` | 组ID
onlyName | test_baidu | String | 与 `itemGroupID` 二选一个填写，都填写将使用 `itemGroupID` | 唯一标识
:::

::: details 内容示例
```json
{
    "onlyName": "group1"
}
```
:::


### 成功响应

::: info 参数说明
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
itemGroupID | 1 | Integer | 组ID
title | Baidu | String |  标题
onlyName | test_baidu | String | 唯一标识
:::


::: details 内容示例
```javascript
{
	"code": 0,
	"data": {
		"onlyName": "group1",
		"itemGroupID": 45,
		"title": "Group 1"
	},
	"msg": "OK"
}
```
:::


### 错误响应

可能出现的错误码：`1203`，错误码具体含义 [点此查看](./error_code.md)

::: details 内容示例
```javascript
{
    "code": 1203,
    "msg": "..."
}
```
:::



## 获取所有组（列表）

### URL
> /openapi/v1/itemGroup/getList

### 请求内容
\- 无需请求参数 - 

### 成功响应

::: info 参数说明
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
count | 3 | Integer | 列表项数量
list | - | Array | 列表项
list.itemGroupID | 1 | Integer | 组ID
list.title | Group 1 | String |  标题
list.onlyName | group1 | String | 唯一标识
:::


::: details 内容示例
```javascript
{
	"code": 0,
	"data": {
		"count": 3,
		"list": [
			{
				"onlyName": "group1",
				"itemGroupID": 45,
				"title": "Group 1"
			}
			{
				"onlyName": "666",
				"itemGroupID": 43,
				"title": "test"
			},
			{
				"onlyName": "sun-app",
				"itemGroupID": 38,
				"title": " APP"
			},
		]
	},
	"msg": "OK"
}
```
:::
### 错误响应

[点此查看](./error_code.md)
