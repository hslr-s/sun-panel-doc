---
outline: [1,2]
---

# Icon Card Related
Through this page's API, you can add and modify icon cards.

## Create a Project

### URL
> /openapi/v1/item/create

### Request Content

::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Required | Parameter Description
--- | --- | --- | --- | ---
onlyName | test_baidu | String | No | Unique identifier
iconUrl | https://xxx.cc/favicon.ico | String | No | Image URL
title | Baidu | String | No | Title
url | https://xxx.cc | String | Yes | URL
lanUrl | - | String | No | Intranet URL
description | - | String | No | Description
itemGroupID | 1 | int | No | Group ID <br> Either `itemGroupID` or `itemGroupOnlyName` <br> `itemGroupID` is preferred <br> Supported from `v1.7.*`
itemGroupOnlyName | group1 | String | No | Group unique identifier <br> Either `itemGroupID` or `itemGroupOnlyName` <br> `itemGroupID` is preferred <br> Supported from `v1.7.*`
isSaveIcon | true | boolean | No | Whether to save the icon to the project locally <br> Default: false <br> If true, it will force save and update <br> Supported from `v1.7.*`
:::

::: details Content Example
```json
{
    "iconUrl":"",
    "title": "Baidu",
    "onlyName": "test_baidu",
    "url": "https://xxx.cc", 
    "lanUrl": "",
    "description": "",
    "itemGroupID": 100,// Group ID, either with itemGroupOnlyName
    // "itemGroupOnlyName": "sun-app",// Group unique identifier, either with itemGroupID
    "isSaveIcon": true
}
```
:::

### Successful Response

::: details Content Example
```javascript
{
    "code": 0,
    "msg": "OK"
}
```
:::

### Error Response

Possible error code: `1202`, for specific meanings of error codes, [click here](./error_code.md)

::: details Content Example
```javascript
{
    "code": 1202, 
    "msg": "..."
}
```
:::

## Query Project Information by Unique Identifier

### URL
> /openapi/v1/item/getInfoByOnlyName

### Request Content

::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Required | Parameter Description
--- | --- | --- | --- | ---
onlyName | test_baidu | String | Yes | Unique identifier
:::

::: details Content Example
```json
{
    "onlyName": "test_baidu"
}
```
:::


### Successful Response

::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Parameter Description
--- | --- | --- | ---
iconUrl | - | String | Image URL
title | Baidu | String | Title
onlyName | test_baidu | String | Unique identifier
url | https://xxx.cc | String | URL
lanUrl | - | String | Intranet URL
description | - | String | Description
itemGroupID | 1 | int | Group ID Supported from `v1.7.*`
itemGroupOnlyName | group1 | String | Group unique identifier Supported from `v1.7.*`
:::


::: details Content Example
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
:::


### Error Response

Possible error code: `1203`, for specific meanings of error codes, [click here](./error_code.md)

::: details Content Example
```javascript
{
    "code": 1203,
    "msg": "..."
}
```
:::



## Modify a Project

### URL
> /openapi/v1/item/update

### Request Content

::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Required | Parameter Description
--- | --- | --- | --- | ---
onlyName | test_baidu | String | Yes | Unique identifier
iconUrl | https://xxx.cc/favicon.ico | String | No | Image URL
title | Baidu | String | No | Title
url | https://xxx.cc | String | No | URL
lanUrl | - | String | No | Intranet URL
description | - | String | No | Description
itemGroupID | 1 | int | No | Group ID <br> Either `itemGroupID` or `itemGroupOnlyName` <br> `itemGroupID` is preferred <br> Supported from `v1.7.*`
itemGroupOnlyName | group1 | String | No | Group unique identifier <br> Either `itemGroupID` or `itemGroupOnlyName` <br> `itemGroupID` is preferred <br> Supported from `v1.7.*`
isSaveIcon | true | boolean | No | Whether to save the icon to the project locally <br> Default: false <br> If true, it will force save and update <br> Supported from `v1.7.*`
:::

::: details Content Example
```json
{
    "iconUrl":"",
    "title": "Baidu",
    "onlyName": "test_baidu",
    "url": "https://xxx.cc", 
    "lanUrl": "",
    "description": "",
    "itemGroupID": 100,// Group ID, either with itemGroupOnlyName
    // "itemGroupOnlyName": "sun-app",// Group unique identifier, either with itemGroupID
    "isSaveIcon": true
}
```
:::

### Successful Response

::: details Content Example
```javascript
{
    "code": 0,
    "msg": "OK"
}
```
:::

### Error Response

Possible error codes: `1202`, `1203`, for specific meanings of error codes, [click here](./error_code.md)

::: details Content Example
```javascript
{
    "code": 1202, 
    "msg": "..."
}
```
:::

