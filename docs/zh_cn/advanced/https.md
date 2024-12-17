# 启用HTTPS

 `v1.6.1` 及以后版本开始支持。开启 HTTPS 需要在项目的[**配置文件**](./config.md)中修改或者添加相关配置。开启前请自行备好SSL证书文件和私钥文件。




> [!warning] 旧版本升级重要说明
> 从 `v1.6.1` 之前版本升级后不存在此配置，需要自行添加相关配置。
>
> 1. [可选，默认为3003] 在配置文件的 `[base]` 配置块中添加 `https_port=3003` ，示例：
> ```ini {3}
> [base]
> # ... （此处省略其他配置项）
> https_port=3003 # 添加此行 // [!code focus]
> # ... （此处省略其他配置项）
> ```
>
> 2. 在配置文件最底部或者（任意一个配置块末尾的空白处）**完整添加**以下代码：
> ```ini
> [cert]
> # Certificate file path
> cert_path=  
> # Certificate private key file path
> key_path=  
> ```
> (解释：在配置文件中添加一个新的配置块 `[cert]`，在里面添加了两个配置项，分别是 `cert_path` 和 `key_path`，分别代表证书文件路径和私钥文件路径。)
>
> 完整的配置文件可以参考项目中 **`conf.example.ini`** 文件

根据自身需求修改下方深色代码块中的配置项，示例：

```ini {9,19,21}
# ======================
# Basic configuration
# ======================
[base]
# Web run port. Default:3002
http_port=3002
# Web run https port. Default:3003
# This port is enabled only after you configure the [cert] certificate path
https_port=3003  // [!code focus]
# Web run address Default: 0.0.0.0
http_address=0.0.0.0
# ... （此处省略其他配置项）

# ==============================
# SSL certificate configuration
# ==============================
[cert]
# Certificate file path
cert_path=./cert/localhost.pem # 路径根据自身需求填写  // [!code focus]
# Certificate private key file path
key_path=./cert/localhost-key.pem # 路径根据自身需求填写  // [!code focus]

# ... （此处省略其他配置项）
```


如果证书目录配置项为空将不会启用 `HTTPS`