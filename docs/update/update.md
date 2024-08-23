# Update Instructions

::: danger Note
**Please make sure to back up your data before upgrading, especially the mount directories for Docker versions!!!** This is especially important when upgrading to beta versions, always back up!

If there is no effect after the update, remember to **clear the browser cache**.
<!-- [Clear Browser Cache](https://blog.csdn.net/m0_46156566/article/details/108519629) -->
:::

## Version Naming Convention

#### Rules:

`[Major Version]`.`[Minor Version]`.`[Stable/Minor Feature Update/Bug Fix]`-`[Testing/Development][Date]`

#### Examples:
- `v1.3.1-beta24-02-28` Beta version
- `v1.3.1` Stable version / Minor feature update / Bug fix

#### Version Chronological Order Example:

`v1.3.1` > `v1.3.1-beta24-02-28` > `v1.3.0` > `v1.3.0-beta24-02-20`

## Docker Version

### 1. Go to [DockerHub](https://hub.docker.com/r/hslr/sun-panel/tags) and find the corresponding version

Please note that Docker version numbers do not include `v`

![](/images/update_log/docker_hub_beta.png)

### 2. Copy the command to download

Example
```sh
# Latest stable version
docker pull hslr/sun-panel:latest

# Latest beta version
docker pull hslr/sun-panel:beta

# Other specific versions (version numbers should not have 'v' at the beginning)
docker pull hslr/sun-panel:1.4.0
docker pull hslr/sun-panel:1.4.0-beta24-02-20
```

### 3. Synology or other GUI operations
Directly select the tag you want to use for pulling, create a new container to run, and ensure the mount path is consistent with the old version. If tag filtering is not supported, run it in the following command line manner

### 4. Command line operation (Mount directory consistent with the old version)
It is recommended to create a new container to run, which can be restored in time if there are problems,
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
--name sun-panel \
hslr/sun-panel:latest
```
Replace `latest` in the above command with any existing version tag, and modify other parameters according to your own needs.

## Binary Version

::: tip
Go to Github [Releases](https://github.com/hslr-s/sun-panel/releases) to download the binary file.
:::

After downloading, cover the `web` folder and `executable binary file` in the compressed package, and run it again.

----
Related references: <a href="../usage/quick_deploy">Deployment Tutorial</a> | <a href="https://www.bilibili.com/video/BV1ke411y7B5" target="_blank">[Bilibili] Beta Update Video Tutorial</a> | <a href="https://youtu.be/wRo-azoAbsQ?si=ZNSKm89bx0yq5Puw" target="_blank">[YouTube] Beta Update Video Tutorial</a>
