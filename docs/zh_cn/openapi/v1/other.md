---
outline: [1,2]
---

# 其他接口


## 获取自托管的Sun-Panel版本号
一般可以用于连接测试的操作，此api从Sun-Panel `v1.7.*` 开始支持

### URL
> /openapi/v1/version

### 请求内容

\- 无需请求参数 - 

### 成功响应

::: info 参数说明
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
version | 1.7.0 / 1.7.0-beta24-12-20 | String | 版本号
versionCode | 1 | Int |  版本序号，此参数不推荐使用
:::


::: details 内容示例
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

### 错误响应

具体 [点此查看](./#response)


