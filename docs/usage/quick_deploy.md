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

## Docker Run {#docker_run}

::: tip
DockerHub [Sun-Panel project homepage](https://hub.docker.com/r/hslr/sun-panel) 
:::

::: info `v1.4.0+`
If you are upgrading from version `v1.3.0` or earlier to this version, [please refer to this note](https://github.com/hslr-s/sun-panel/discussions/98)

Directory mounting `-v`, all optional, choose according to your needs:
| Local Directory | Container Directory | Description |
| --- | --- | --- |
| ~/sun-panel/conf | /app/conf | Configuration files (multi-directory) |
| /var/run/docker.sock | /var/run/docker.sock |  If you want to use Docker functionality within a container, mount this directory (Under normal circumstances, **please mount as is**) `1.5.0+` |
| ~/sun-panel/runtime | /app/runtime | Runtime logs (not recommended to mount) |
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
Replace `latest` with other version numbers ([View](https://hub.docker.com/r/hslr/sun-panel/tags)),An example has been provided for mounting the Docker directory, allowing the use of Docker within the container.

```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v /var/run/docker.sock:/var/run/docker.sock \
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


## docker-compose Run {#docker_compose}

For reference only, please modify according to your own needs. `v1.4.0 and above`

```yaml
version: "3.2"

services:
  sun-panel:
    image: "hslr/sun-panel:latest"
    container_name: sun-panel
    volumes:
      - ./conf:/app/conf
      - /var/run/docker.sock:/var/run/docker.sock # Mount the Docker socket
      # - ./runtime:/app/runtime # Mount the log directory
      # - /mnt/sata1-1:/os # Mount the hard drive (modify according to your needs)
    ports:
      - 3002:3002
    restart: always
```

Run 
```sh
docker-compose up -d
```


## Executable file to run (binary)

::: tip
Go to GitHub [Releases](https://github.com/hslr-s/sun-panel/releases) to download binary files.
:::

Example execution (Use the command line to run)

```sh
./sun-panel
```