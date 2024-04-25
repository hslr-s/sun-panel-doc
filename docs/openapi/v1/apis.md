---
outline: [2,3]
---

# Open API `V1`  <Badge type="warning" text="beta" />

> Added in `v1.4.0-beta24-04-11+`, if you are a developer, you can implement the corresponding functions of Sun-Panel by calling the API.

> [!IMPORTANT]
> All interfaces adopt the POST request method. API requests require token authentication. Please use the `management account` to find the `OpenAPI` application in `Sun-Panel` to obtain the token.

## Header Parameters
Parameter | Example Value | Description
--- | --- | ---
token | ieyqw0x9nngzukrrmivx84hj7l2xkr1t | -

## API Interfaces

### Create Project

#### URL
> /openapi/v1/item/create

#### Request Content

::: info Parameter Explanation
Parameter | Example Value | Parameter Type | Required | Description
--- | --- | --- | --- | ---
iconUrl | https://baidu.com/favicon.ico | String | Yes | Image URL
title | Baidu | String | Yes | Title
onlyName | test_baidu | String | No | Unique Identifier
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

#### Success Response

::: details Content Example
```javascript
{
    "code": 0,
    "msg": "OK"
}
```
:::

#### Error Response

Possible error codes: `1202`. For the specific meanings of error codes, [click here](./error_code.md).

::: details Content Example
```javascript
{
    "code": 1202,
    "msg": "..."
}
```
:::

### Retrieve Project Information by Unique Identifier

#### URL
> /openapi/v1/item/getInfoByOnlyName

#### Request Content

::: info Parameter Explanation
Parameter | Example Value | Parameter Type | Required | Description
--- | --- | --- | --- | ---
onlyName | test_baidu | String | Yes | Unique Identifier
:::

::: details Content Example
```json
{
    "onlyName": "test_baidu"
}
```
:::

#### Success Response

::: info Parameter Explanation
Parameter | Example Value | Parameter Type | Description
--- | --- | --- | ---
iconUrl | - | String | Image URL
title | Baidu | String | Title
onlyName | test_baidu | String | Unique Identifier
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

#### Error Response

Possible error codes: `1203`. For the specific meanings of error codes, [click here](./error_code.md).

::: details Content Example
```javascript
{
    "code": 1203,
    "msg": "..."
}
```
:::

### Update Project

#### URL
> /openapi/v1/item/update

#### Request Content

::: info Parameter Explanation
Parameter | Example Value | Parameter Type | Required | Description
--- | --- | --- | --- | ---
onlyName | test_baidu | String | Yes | Unique Identifier
iconUrl | https://baidu.com/favicon.ico | String | Yes | Image URL
title | Baidu | String | Yes | Title
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

#### Success Response

::: info Parameter Explanation
Parameter | Example Value | Parameter Type | Description
--- | --- | --- | ---
iconUrl | - | String | Image URL
title | Baidu | String | Title
onlyName | test_baidu | String | Unique Identifier
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

#### Error Response

Possible error codes: `1202`, `1203`. For the specific meanings of error codes, [click here](./error_code.md).

::: details Content Example
```javascript
{
    "code": 1202,
    "msg": "..."
}
```
:::
