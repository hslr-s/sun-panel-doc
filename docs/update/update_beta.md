
::: danger Proceed with Caution
Beta versions are testing versions before the official release and may contain serious bugs. **Always back up before upgrading!!!**

In Docker, the `latest` tag represents the official version or a stable beta version and does not update to unstable beta versions.

Examples of `beta` or `[major version]-beta date` are like `1.4.0-beta24-02-20`, all indicating beta versions.

After updating, if there are no changes, remember to [clear your browser cache](https://blog.csdn.net/m0_46156566/article/details/108519629).
:::

## Docker Versions

### 1. Visit the [Sun-Panel project page](https://hub.docker.com/r/hslr/sun-panel/tags) on DockerHub. Beta versions are indicated with a beta tag + date in the tags row.

![](/images/update_log/docker_hub_beta.png)

### 2. Copy the command to download (make sure it's not `latest`).

Example:
```
# Latest beta version
docker pull hslr/sun-panel:beta

# Replace beta24-02-20 with the specific version number
docker pull hslr/sun-panel:1.4.0-beta24-02-20
```

### 3. For Synology NAS or other visual operations
Select the tag with `beta` or `beta+date` to pull. Create a new container to run. If filtering tags is not supported, follow the command line method below.

### 4. Command Line Execution (mount directories same as official version)
It's recommended to create a new container to run. If there are issues, you can revert quickly.
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
--name sun-panel \
hslr/sun-panel:beta
```
Replace `hslr/sun-panel:beta` in the above command with the latest beta version tag. Modify other parameters as needed.


## Binary Versions

::: tip
Go to Github [Releases](https://github.com/hslr-s/sun-panel/releases) to download the binary files.
:::

After downloading, extract the `web` folder and the `executable binary file`, overwrite, and then run again.

----
For complete deployment, refer to: [Deployment Tutorial](/deploy/quick_deploy) | [Bilibili Beta Update Video Tutorial](https://www.bilibili.com/video/BV1ke411y7B5)