# Deployment Tutorial

## Default Account and Password
Username: admin@sun.cc

Password: 12345678


## Command Parameters

::: details Click here to view `v1.4.0-beta24-04-11+`

| Parameter | Description |
|---|---|
| -h | View command instructions |
| -cfgInit | Generate configuration file (conf/conf.ini) |
| -cfgPath | Specify the directory of the program configuration file |
| -pwdReset | Reset the password of the first admin account |

:::

Versions `v1.3.0` and earlier
| Parameter | Description |
|---|---|
| -h | View command instructions |
| -config | Generate configuration file (conf/conf.ini) |
| -password-reset | Reset the password of the first admin account |


## Docker Run

::: tip
DockerHub [Sun-Panel project homepage](https://hub.docker.com/r/hslr/sun-panel) 
:::

::: details Click here to view `v1.4.0-beta24-02-20+`
If you are upgrading from version `v1.3.0` or earlier to this version, [please refer to this note](https://github.com/hslr-s/sun-panel/discussions/98)

Directory mounts `-v`, all optional, choose according to your needs:
| Container Directory | Description |
|---|---|
| /app/conf | Configuration file (all-in-one directory) |
| /app/runtime | Runtime logs (not recommended to mount) |
:::

**Versions `v1.3.0` and earlier**
Directory mounts `-v`, all optional, choose according to your needs:
| Container Directory | Description |
|---|---|
| /app/conf | Configuration file |
| /app/uploads | Uploaded files |
| /app/database | Database files |
| /app/runtime | Runtime logs (not recommended to mount) |
| /app/web/custom | Custom (js, css, etc.) `v1.3.0+` |

1. Pull the image
```sh
docker pull hslr/sun-panel
```

2. Run directly

::: details Click here to view `v1.4.0-beta24-02-20+`
Please replace the version number: `1.4.0-beta24-02-20`
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
--name sun-panel \
hslr/sun-panel:1.4.0-beta24-02-20
```
:::

**Versions `v1.3.0` and earlier**
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel


## Binary File Run

::: tip
Go to GitHub [Releases](https://github.com/hslr-s/sun-panel/releases) to download binary files.
:::

Example execution

```sh
./sun-panel
```