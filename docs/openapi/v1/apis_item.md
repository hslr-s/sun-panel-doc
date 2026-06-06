---
outline: [1,2]
---

# Icon Card Related
Through this page's API, you can add and modify icon cards.

## Create a Project

### URL
> /openapi/v1/item/create

### Request Content

:::: info Parameter Description
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
::::

:::: details Content Example
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
::::

### Successful Response

:::: details Content Example
```javascript
{
    "code": 0,
    "msg": "OK"
}
```
::::

### Error Response

Possible error code: `1202`, for specific meanings of error codes, [click here](./error_code.md)

:::: details Content Example
```javascript
{
    "code": 1202, 
    "msg": "..."
}
```
::::

## Query Project Information by Unique Identifier

### URL
> /openapi/v1/item/getInfoByOnlyName

### Request Content

:::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Required | Parameter Description
--- | --- | --- | --- | ---
onlyName | test_baidu | String | Yes | Unique identifier
::::

:::: details Content Example
```json
{
    "onlyName": "test_baidu"
}
```
::::


### Successful Response

:::: info Parameter Description
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
::::


:::: details Content Example
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


### Error Response

Possible error code: `1203`, for specific meanings of error codes, [click here](./error_code.md)

:::: details Content Example
```javascript
{
    "code": 1203,
    "msg": "..."
}
```
::::



## Modify a Project

### URL
> /openapi/v1/item/update

### Request Content

:::: info Parameter Description
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
::::

:::: details Content Example
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
::::

### Successful Response

:::: details Content Example
```javascript
{
    "code": 0,
    "msg": "OK"
}
```
::::

### Error Response

Possible error codes: `1202`, `1203`, for specific meanings of error codes, [click here](./error_code.md)

:::: details Content Example
```javascript
{
    "code": 1202, 
    "msg": "..."
}
```
::::

## Batch Modify Projects
Batch multiple modification requests into a single call. Supported from `v2.0.0-dev-13+`

### URL
> /openapi/v1/item/batchUpdate

### Request Content

:::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Required | Parameter Description
--- | --- | --- | --- | ---
items | - | Array | Yes | Array of project cards, at least 1 item
items[].onlyName | test_baidu | String | Yes | Unique identifier
items[].iconUrl | https://xxx.cc/favicon.ico | String | No | Image URL
items[].title | Baidu | String | No | Title
items[].url | https://xxx.cc | String | No | URL
items[].lanUrl | - | String | No | Intranet URL
items[].description | - | String | No | Description
items[].itemGroupID | 1 | int | No | Group ID <br> Either `itemGroupID` or `itemGroupOnlyName` <br> `itemGroupID` is preferred
items[].itemGroupOnlyName | group1 | String | No | Group unique identifier <br> Either `itemGroupID` or `itemGroupOnlyName` <br> `itemGroupID` is preferred
items[].isSaveIcon | true | boolean | No | Whether to save the icon to the project locally <br> Default: false <br> If true, it will force save and update
::::

:::: details Content Example
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

### Response Data
Other items will not be affected even if some fail. When all succeed, `failCount` is 0 and `failItems` is an empty array.

:::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Parameter Description
--- | --- | --- | ---
successCount | 1 | int | Number of successfully updated items
failCount | 1 | int | Number of failed items
failItems | - | Array | List of failed items
failItems[].onlyName | test_baidu | String | Unique identifier of the failed item
failItems[].error | item not found | String | Failure reason
::::

:::: details Content Example
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

### Error Response
Possible error code: `1001` (parameter format error), for specific meanings of error codes, [click here](./error_code.md)

:::: details Content Example
```javascript
{
    "code": 1001, 
    "msg": "..."
}
```
::::