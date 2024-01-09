# Deployment Tutorial

## Default Account and Password
Username: admin@sun.cc

Password: 12345678

## Command Line Parameters
| Parameter | Description |
| --- | --- |
| -h | View command instructions |
| -config | Generate the configuration file (conf/conf.ini) |
| -password-reset | Reset the password for the first user |

## Docker Run

::: tip
DockerHub [Sun-Panel Project Page](https://hub.docker.com/r/hslr/sun-panel) 
:::

Directory mounting `-v`, choose according to your needs:
| Container Directory | Description |
| --- | --- |
| /app/conf | Configuration file |
| /app/uploads | Uploaded files |
| /app/database | Database files |
| /app/runtime | Runtime logs (not recommended for mounting) |

1. Pull the image
```sh
docker pull hslr/sun-panel
```

2. Directly download and run
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel
```

## Binary File Run

::: tip
Go to GitHub [Releases](https://github.com/hslr-s/sun-panel/releases) to download binary files.
:::

Example execution

```sh
./sun-panel
```