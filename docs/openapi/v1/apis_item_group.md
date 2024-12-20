---
outline: [1,3]
---

# Icon card group related apis

**`v1.7.*` version is supported**

## Query Project Information by Unique Identifier

### URL
> /openapi/v1/itemGroup/getInfo

### Request Content

::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Required | Parameter Description
--- | --- | --- | --- | ---
itemGroupID | 1 | Integer | Either `itemGroupID` or `onlyName` must be filled, if both are filled, `itemGroupID` will be used | Group ID
onlyName | test_baidu | String | Either `itemGroupID` or `onlyName` must be filled, if both are filled, `itemGroupID` will be used | Unique identifier
:::

::: details Content Example
```json
{
    "onlyName": "group1"
}
```
:::


### Successful Response

::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Parameter Description
--- | --- | --- | ---
itemGroupID | 1 | Integer | Group ID
title | Baidu | String | Title
onlyName | test_baidu | String | Unique identifier
:::


::: details Content Example
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



## Get All Groups (List)

### URL
> /openapi/v1/itemGroup/getList

### Request Content
\- No request parameters required - 

### Successful Response

::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Parameter Description
--- | --- | --- | ---
count | 3 | Integer | Number of list items
list | - | Array | List items
list.itemGroupID | 1 | Integer | Group ID
list.title | Group 1 | String | Title
list.onlyName | group1 | String | Unique identifier
:::


::: details Content Example
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
			},
			{
				"onlyName": "666",
				"itemGroupID": 43,
				"title": "test"
			},
			{
				"onlyName": "sun-app",
				"itemGroupID": 38,
				"title": "APP"
			}
		]
	},
	"msg": "OK"
}
```
:::
### Error Response

[Click here to view](./error_code.md)
