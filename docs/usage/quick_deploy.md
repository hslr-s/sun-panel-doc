# Deployment Tutorial

## Default Account and Password
Username: **admin@sun.cc**

Password: **12345678**


## Command Parameters

::: info  `v1.4.0+`

| Parameter | Description |
|---|---|
| -h | View command instructions |
| -config-reset| Generate configuration file (conf/conf.ini) |
| -config-path| Create or reset the configuration file (default "./conf")|
| -password-reset | Reset the password of the first admin account |

:::

::: details Click here to view versions `v1.3.0` and earlier
| Parameter | Description |
|---|---|
| -h | View command instructions |
| -config | Generate configuration file (conf/conf.ini) |
| -password-reset | Reset the password of the first admin account |
:::

## Docker Run

::: tip
DockerHub [Sun-Panel project homepage](https://hub.docker.com/r/hslr/sun-panel) 
:::

::: info `v1.4.0+`
If you are upgrading from version `v1.3.0` or earlier to this version, [please refer to this note](https://github.com/hslr-s/sun-panel/discussions/98)

Directory mounts `-v`, all optional, choose according to your needs:
| Container Directory | Description |
|---|---|
| /app/conf | Configuration file (all-in-one directory) |
| /app/runtime | Runtime logs (not recommended to mount) |
:::

::: details Click here to view versions `v1.3.0` and earlier
Directory mounts `-v`, all optional, choose according to your needs:
| Container Directory | Description |
|---|---|
| /app/conf | Configuration file |
| /app/uploads | Uploaded files |
| /app/database | Database files |
| /app/runtime | Runtime logs (not recommended to mount) |
| /app/web/custom | Custom (js, css, etc.) only `v1.3.0` |
:::

1. Pull the latest image
```sh
docker pull hslr/sun-panel:latest
```

2. Run directly

::: info `v1.4.0+`
Replace `latest` with other version numbers ([View](https://hub.docker.com/r/hslr/sun-panel/tags))

```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
--name sun-panel \
hslr/sun-panel:latest
```
Container port default: 3002, `--restart=always` for automatic restart, `-d` for running in the background.
:::

::: details Click here to view versions `v1.3.0` and earlier
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel
:::


## Binary File Run

::: tip
Go to GitHub [Releases](https://github.com/hslr-s/sun-panel/releases) to download binary files.
:::

Example execution (Use the command line to run)

```sh
./sun-panel
```