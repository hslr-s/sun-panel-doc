---
outline: [2,3]
---


# Open API `V1` <Badge type="warning" text="beta" />

> `v1.4.0-beta24-04-11+` New addition. If you are a developer, you can achieve Sun-Panel's corresponding functions by calling the API.

> [!IMPORTANT]
> All interfaces use POST request method. API requests require token authentication. Please use the `management account` to find the `OpenAPI` application in `Sun-Panel` to obtain the token.

## Header Parameters
Parameter Name | Example Value | Parameter Description
--- | --- | ---
token | ieyqw0x9nngzukrrmivx84hj7l2xkr1t | -

## Response Parameter Description {#response}

Parameter Name | Parameter Type | Example Value | Parameter Description
--- | --- | --- | ---
code | Int | 0 | Error code: 0 represents success, others please refer to [Error Codes](error_code.md)
msg | string | OK | Error message, please refer to [Error Codes](error_code.md)
data | any | - | Specific data

## Example of a Successful Response Format
```json
{
    "code": 0, 
    "msg": "ok",
    "data": ... // Specific data
}
```

## Example of an Error Response Format
```json
{
    "code": 1000, 
    "msg": "ok"
}
```
