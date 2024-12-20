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

## 响应的参数说明 {#response}

参数名 |参数类型| 示例值 | 参数描述
--- | --- | --- | ---
code | Int | 0 |  错误码: 0 代表成功，其他请参考 [错误码](error_code.md)
msg | string | OK | 错误信息， 请参考 [错误码](error_code.md)
data | any | - | 具体数据

## 成功响应的通用格式示例
```json
{
    "code": 0, 
    "msg": "ok",
    "data": ... // 具体数据
}
```

## 错误相应的通用格式示例
```json
{
    "code": 1000, 
    "msg": "ok"
}
```