# Deploy on 1Panel

## Install 1Panel

Prerequisite: Install 1Panel panel first. For details, see [1Panel Official Documentation](https://1panel.cn/)

## Install sun-panel

Search for "sun-panel" in the "App Store" and click to install.

![](/images/deploy/1panel/search.png)

Select the version you want to install and check the required options.

![](/images/deploy/1panel/install1.webp)

(Optional) If you want to use container monitoring, you need to check "Edit compose file" and add the following code snippet in the file editor at the bottom to grant the container access to docker.sock:

```yml
- /var/run/docker.sock:/var/run/docker.sock
```

![](/images/deploy/1panel/install2.webp)

Fill in the configuration options and click Install.

## Access and Usage

- Access via browser using the configured **domain name** or `ip:port` format
- For default username and password, refer to: [Default Deployment Guide](/usage/quick_deploy.html)
