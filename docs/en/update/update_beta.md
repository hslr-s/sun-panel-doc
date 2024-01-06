::: danger Proceed with Caution
The beta version is a testing version before the official release and may contain serious bugs. Please upgrade with caution!

Currently, the beta version is only released as a Docker version, and binary files are not separately released. The `latest` tag inside the Docker image represents the official version or a stable beta version and will not be updated with unstable beta versions.

The beta tag is named `[major version]-beta[date]`, for example, `1.1.0-beta23-11-24`.

After updating, if you see no changes, remember to [clear your browser cache](https://blog.csdn.net/m0_46156566/article/details/108519629).

:::

## Docker Version

### 1. Visit the [Sun-Panel project page on DockerHub](https://hub.docker.com/r/hslr/sun-panel/tags), and beta versions will have the beta label + date in the tags section.

![](/images/update_log/docker_hub_beta.png)

### 2. Copy the command to download (ensure it's not the latest version)

Example:
```sh
docker pull hslr/sun-panel:1.1.0-beta23-11-24
```

### 3. For Synology NAS or other graphical interfaces
Select the tag with `beta + date` directly for pulling. Create a new container and run it. If you cannot filter tags, use the command-line method below.

### 4. Run via Command Line (Mount directories same as the official version)
It is recommended to create a new container for running. In case of issues, you can quickly revert.
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel:1.1.0-beta23-11-24
```
Replace `hslr/sun-panel:1.1.0-beta23-11-24` in the above command with the latest beta version tag. Modify other parameters according to your requirements.

For a complete deployment guide, refer to: <a href="/deploy/quick_deploy">Deployment Tutorial</a> | <a href="https://www.bilibili.com/video/BV1ke411y7B5" target="_blank">Bilibili Beta Update Video Tutorial</a>