---
outline: [1,2]
---

# Other APIs

## Get the Self-Hosted Sun-Panel Version Number
This API can generally be used for connection testing operations and is supported from Sun-Panel `v1.7.*` onwards.

### URL
> /openapi/v1/version

### Request Content

- No request parameters required -

### Successful Response

::: info Parameter Description
Parameter Name | Example Value | Parameter Type | Parameter Description
--- | --- | --- | ---
version | 1.7.0 / 1.7.0-beta24-12-20 | String | Version number
versionCode | 1 | Int | Version sequence number, this parameter is not recommended for use
:::


::: details Content Example
```javascript
{
	"code": 0,
	"data": {
		"version": "v1.7.0-beta24-12-20",
		"versionCode": 14
	},
	"msg": "OK"
}
```
:::

### Error Response

For specific details, [click here](./#response)
