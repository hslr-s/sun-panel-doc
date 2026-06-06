---
outline: [1,2]
---

# 图标卡片相关
通过此页接口可以实现，添加、修改 图标卡片。 

## 创建一个新的项目卡片

### URL
> /openapi/v1/item/create

### 请求内容

:::: info 参数说明
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
onlyName | test_baidu | String | 否 | 唯一标识
iconUrl |https://xxx.cc/favicon.ico | String | 否 | 图像地址
title | Baidu | String | 否 | 标题
url | https://xxx.cc | String | 是 | 地址
lanUrl | - | String | 否 | 内网地址
description | - | String | 否 | 描述信息
itemGroupID | 1 | int | 否 | 分组ID <br> `itemGroupOnlyName` 二选一 <br> 优先使用 `itemGroupID` <br>`v1.7.*` 开始支持
itemGroupOnlyName | group1 | String | 否 | 分组唯一标识 <br> `itemGroupID` 二选一 <br> 优先使用 `itemGroupID` <br>`v1.7.*` 开始支持
isSaveIcon | true | boolean | 否 | 是否保存图标到项目本地 <br> 默认：false  <br> 如果为 true 会强制保存并更新 <br>`v1.7.*` 开始支持
::::

:::: details 内容示例
```json
{
    "iconUrl":"",
    "title": "Baidu",
    "onlyName": "test_baidu",
    "url": "https://xxx.cc",
    "lanUrl": "",
    "description": "",
    "itemGroupID": 100,// 分组ID， 与 itemGroupOnlyName 二选一
    // "itemGroupOnlyName": "sun-app",// 分组唯一标识，与 itemGroupID 二选一
    "isSaveIcon": true
}
```
::::

### 成功响应

:::: details 内容示例
```javascript
{
    "code": 0,
    "msg": "OK"
}
```
::::

### 错误响应

可能出现的错误码：`1202`，错误码具体含义 [点此查看](./error_code.md)

:::: details 内容示例
```javascript
{
    "code": 1202, 
    "msg": "..."
}
```
::::

## 根据唯一标识查询项目信息

### URL
> /openapi/v1/item/getInfoByOnlyName

### 请求内容

:::: info 参数说明
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
onlyName | test_baidu | String | 是 | 唯一标识
::::

:::: details 内容示例
```json
{
    "onlyName": "test_baidu"
}
```
::::


### 成功响应

:::: info 参数说明
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
iconUrl | - | String | 图像地址
title | Baidu | String |  标题
onlyName | test_baidu | String | 唯一标识
url | https://xxx.cc | String |  地址
lanUrl | - | String | 内网地址
description | - | String |  描述信息
description | - | String |  描述信息
itemGroupID | 1 | int | 分组ID `v1.7.*` 开始支持
itemGroupOnlyName | group1 | String | 分组唯一标识 `v1.7.*` 开始支持
::::


:::: details 内容示例
```javascript
{
    "code": 0,
    "data": {
        "iconUrl": "",
		"title": "Sun-Panel",
		"onlyName": "sun-panel008",
		"url": "https://sun-panel.top",
		"lanUrl": "",
		"description": "",
		"itemGroupID": 40,
		"itemGroupOnlyName": "neizhi-app",
    },
    "msg": "OK"
}
```
::::


### 错误响应

可能出现的错误码：`1203`，错误码具体含义 [点此查看](./error_code.md)

:::: details 内容示例
```javascript
{
    "code": 1203,
    "msg": "..."
}
```
::::



## 修改项目卡片
不需要修改的参数，无需传输。 `v1.7.*` 开始支持

### URL
> /openapi/v1/item/update

### 请求内容

:::: info 参数说明
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
onlyName | test_baidu | String | 是 | 唯一标识
iconUrl |https://xxx.cc/favicon.ico | String | 否 | 图像地址
title | Baidu | String | 否 | 标题
url | https://xxx.cc | String | 否 | 地址
lanUrl | - | String | 否 | 内网地址
description | - | String | 否 | 描述信息
itemGroupID | 1 | int | 否 | 分组ID <br> `itemGroupOnlyName` 二选一 <br> 优先使用 `itemGroupID` <br>`v1.7.*` 开始支持
itemGroupOnlyName | group1 | String | 否 | 分组唯一标识 <br> `itemGroupID` 二选一 <br> 优先使用 `itemGroupID` <br>`v1.7.*` 开始支持
isSaveIcon | true | boolean | 否 | 是否保存图标到项目本地 <br> 默认：false  <br> 如果为 true 会强制保存并更新 <br>`v1.7.*` 开始支持
::::

:::: details 内容示例
```json
{
    "iconUrl":"",
    "title": "Baidu",
    "onlyName": "test_baidu",
    "url": "https://xxx.cc",
    "lanUrl": "",
    "description": "",
    "itemGroupID": 100,// 分组ID， 与 itemGroupOnlyName 二选一
    // "itemGroupOnlyName": "sun-app",// 分组唯一标识，与 itemGroupID 二选一
    "isSaveIcon": true
}
```
::::

### 成功响应

:::: details 内容示例
```javascript
{
    "code": 0,
    "msg": "OK"
}
```
::::
### 错误响应

可能出现的错误码：`1202`、`1203`，错误码具体含义 [点此查看](./error_code.md)

:::: details 内容示例
```javascript
{
    "code": 1202, 
    "msg": "..."
}
```
::::

## 批量修改项目卡片
将多个修改请求打包为一次调用。 `v2.0.0-dev-13+` 开始支持

### URL
> /openapi/v1/item/batchUpdate

### 请求内容

:::: info 参数说明
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
items | - | Array | 是 | 项目卡片数组，至少包含 1 项
items[].onlyName | test_baidu | String | 是 | 唯一标识
items[].iconUrl | https://xxx.cc/favicon.ico | String | 否 | 图像地址
items[].title | Baidu | String | 否 | 标题
items[].url | https://xxx.cc | String | 否 | 地址
items[].lanUrl | - | String | 否 | 内网地址
items[].description | - | String | 否 | 描述信息
items[].itemGroupID | 1 | int | 否 | 分组ID <br> `itemGroupOnlyName` 二选一 <br> 优先使用 `itemGroupID`
items[].itemGroupOnlyName | group1 | String | 否 | 分组唯一标识 <br> `itemGroupID` 二选一 <br> 优先使用 `itemGroupID`
items[].isSaveIcon | true | boolean | 否 | 是否保存图标到项目本地 <br> 默认：false <br> 如果为 true 会强制保存并更新
::::

:::: details 内容示例
```json
{
    "items": [
        {
            "onlyName": "test_baidu",
            "title": "Baidu",
            "url": "https://xxx.cc",
            "iconUrl": "https://xxx.cc/favicon.ico",
            "lanUrl": "",
            "description": ""
        },
        {
            "onlyName": "test_github",
            "title": "GitHub",
            "url": "https://github.com",
            "itemGroupID": 100
        }
    ]
}
```
::::

### 响应数据
不会中断其他项目的修改。全部成功时 `failCount` 为 0，`failItems` 为空数组。

:::: info 参数说明
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
successCount | 1 | int | 成功修改的项目数量
failCount | 1 | int | 失败的项目数量
failItems | - | Array | 失败项目列表
failItems[].onlyName | test_baidu | String | 失败项目的唯一标识
failItems[].error | item not found | String | 失败原因
::::

:::: details 内容示例
```javascript
{
    "code": 0,
    "data": {
        "successCount": 1,
        "failCount": 1,
        "failItems": [
            {
                "onlyName": "test_baidu",
                "error": "item not found"
            }
        ]
    },
    "msg": "OK"
}
```
::::

### 错误响应
可能出现的错误码：`1001`（参数格式错误），错误码具体含义 [点此查看](./error_code.md)

:::: details 内容示例
```javascript
{
    "code": 1001, 
    "msg": "..."
}
```
::::