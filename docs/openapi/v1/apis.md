---
outline: [2,3]
---

# Open API `V1` <Badge type="warning" text="beta" />

> Newly added in `v1.4.0-beta24-04-11+`, if you are a developer, you can implement Sun-Panel functionalities by calling the API.

> [!IMPORTANT]
> All interfaces adopt the POST request method. API requests require token authentication. Please use the `admin account` to obtain the token in the `OpenAPI` application in `Sun-Panel`.

## Header Parameters
Parameter | Example | Description
--- | --- | ---
token |  ieyqw0x9nngzukrrmivx84hj7l2xkr1t| -


## API Interfaces
### Create Project

#### URL
> /openapi/v1/item/create

#### Request Content

::: info Parameter Description
Parameter | Example | Type | Required | Description
--- | --- | --- | --- | ---
iconUrl |https://baidu.com/favicon.ico | String | Yes | Image URL
title | Baidu | String | Yes | Title
onlyName | test_baidu | String | No | Unique identifier
url | https://baidu.com | String | Yes | URL
lanUrl | - | String | No | Intranet URL
description | - | String | No | Description
:::

::: details Content Example
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

#### Successful Response Example

::: details Content Example
```javascript
{
	"code": 0,
	"msg": "OK"
}
```
:::

#### Possible Error Codes

| code |      msg        | Description|
|--------|----------------------|---|
| 1202   |     only name existed       |  Only name already exists |

### Query Project Information by Unique Identifier

#### URL
> /openapi/v1/item/getInfoByOnlyName

#### Request Content

::: info Parameter Description
Parameter | Example | Type | Required | Description
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


#### Successful Response Example

::: info Parameter Description
Parameter | Example | Type | Description
--- | --- | --- | ---
iconUrl | - | String | Image URL
title | Baidu | String | Title
onlyName | test_baidu | String | Unique identifier
url | https://baidu.com | String | URL
lanUrl | - | String | Intranet URL
description | - | String | Description
:::


::: details Content Example
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


#### Possible Error Codes

| code |      msg        | Description|
|--------|----------------------|---|
| 1203   |     no record           |  No record |

<!-- <Badge type="info" text="1202" /> -->