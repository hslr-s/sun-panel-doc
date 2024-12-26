# Enable HTTPS

Starting from version `v1.7.*`, HTTPS support is available. To enable HTTPS, you need to modify or add relevant configurations in your project's [**configuration file location**](./config.md). Please prepare your SSL certificate files and private key files before proceeding.

---

> [!warning] Important Note for Upgrading from Older Versions
> If you upgrade from a version prior to `v1.6.1`, this configuration does not exist, and you need to add it manually.
>
> 1. [Optional, defaults to 3003] Add `https_port=3003` in the `[base]` configuration block of the configuration file, example:
> ```ini {3}
> [base]
> # ... (Other configuration items are omitted here)
> https_port=3003 # Add this line // [!code focus]
> # ... (Other configuration items are omitted here)
> ```
>
> 2. At the very bottom of the configuration file or (at the end of any configuration block in a blank space) **completely add** the following code:
> ```ini
> [cert]
> # Certificate file path
> cert_path=  
> # Certificate private key file path
> key_path=  
> ```
> (Explanation: A new configuration block `[cert]` is added to the configuration file, with two configuration items `cert_path` and `key_path`, representing the paths to the certificate file and the private key file, respectively.)
>
> For a complete configuration file, you can refer to the **`conf.example.ini`** file in the project.

Modify the configuration items in the dark code block below according to your needs, example:

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
# ... (Other configuration items are omitted here)

# ==============================
# SSL certificate configuration
# ==============================
[cert]
# Certificate file path
cert_path=./cert/localhost.pem # Fill in the path according to your needs // [!code focus]
# Certificate private key file path
key_path=./cert/localhost-key.pem # Fill in the path according to your needs // [!code focus]

# ... (Other configuration items are omitted here)
```

If the certificate directory configuration item is empty, `HTTPS` will not be enabled.
