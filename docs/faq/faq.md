# FAQ

::: info 
If the following issues still do not solve your problem, you can seek help through the [community](/introduce/author_groups.html).
:::

## How long does the login session last? It always makes me log in frequently.

In versions `v1.4.0` and earlier, the login session lasts for 72 hours. If you access the system within these 72 hours, the session will renew for another 72 hours. Starting from version `v1.4.0`, the default duration has been changed to 168 hours (7 days). The renewal mechanism is still in place, and you can also configure the expiration duration yourself in the [configuration file](../advanced/config.md). Open the configuration file and find `token_expires=168` under the `base` section. Change `168` to the number of hours you want to set. Save the file and restart the project for the changes to take effect.

## Is Import and Export a Backup Feature?

Import and export are not backup features. They can only export the basic configuration of the icon cards in JSON format, not the image files. Currently, the project does not have a built-in backup feature, but it will be considered in the future.

## Data Loss After Docker Version Upgrade

1. In version v1.4.0, the Docker mounting directory was streamlined. Please strictly follow the tutorial to upgrade.
2. Incorrect mounting directory. Please check the path and distinguish between uppercase and lowercase letters.


## Docker Card Display Issues in the Project {#docker_card_abnormal}

Please use the `docker` management tool to check if the container bound to the card has been deleted, or if the container has been upgraded. If the container has been upgraded, the old container ID bound to the card will no longer be available. In versions `v1.5.2` and above (for security reasons, login is required), it will attempt to automatically rebind. If it does not rebind automatically, you can manually edit the card and reselect the container.

## Reasons that may cause the docker function to not work properly {#docker_run_error}

1. In the container running environment, please confirm whether `docker.sock` has been mounted. For details, refer to the [Deployment Guide](../usage/quick_deploy#docker_run). If the visual tool does not support mounting, please use the command line (ssh) to run it.
2. Please check if the system has granted permission to use docker for this project.
3. Specific solutions can be found based on the error messages.


## Linux Binary Version Fails to Run

If the Linux binary version downloaded from [GitHub releases](https://github.com/hslr-s/sun-panel/releases) fails to run, you can try downloading the version marked with `musl`.

## What is the Intranet/Extranet Environment (Mode); Can Only the Corresponding Icon Cards be Displayed?

The author's concept of intranet and extranet environments can be understood as our current real environment.

For example, if the project (Sun-Panel) is deployed on a machine at home, and we are also accessing the project from home, we can set the Sun-Panel environment on the home computer as the intranet environment. We can set the Sun-Panel environment on computers commonly used outside of the home as the extranet environment. This way, there's no need to switch frequently, and there's no confusion.

Based on the above understanding and considering that in the intranet environment, we may also need to access extranet addresses and vice versa, there is no distinction between intranet and extranet environments for displaying icons.

## Custom Footer Cannot Execute JavaScript (script tag) Code

Due to framework security restrictions, this feature is not supported for now. It will be addressed in the future. Currently, you can achieve this functionality through [custom JS](../advanced/custom_js_css.md).

## Docker version system monitoring hanging housing host disk tutorial

Mount the disk to the container's directory by using the mount option, for example: `-v /mnt/usb2-2:/sata1`. Here, `/mnt/usb2-2` is the host path, and `/sata1` is the mapped path, which can be named as you like.

## Set as the browser homepage

Refer to [Sun-Panel BE](../browser_extension/index.md)

## PRO authorized account login invalid {#proAccountInvalid}

- Authorized accounts fail during normal use, possible reasons:

   1. The password of the authorized account has been modified
   2. The version has been updated, and the authorization policy may be updated with the new version, which may cause this problem
   3. The maximum number of simultaneously logged-in clients has been exceeded, and the previously logged-in clients will be squeezed offline by the later logged-in clients

- Solution:

   Log in to the authorized account manually again


## FAQ for v1.7.0-beta Version Upgrade {#v1_7_0_beta_abnormal_faq}

Since the new version has removed support for Service Worker and Cache Storage, you need to manually resolve any issues that arise.

::: details Please click here to expand the solution

#### Step 1. **Force Update Service Worker**
The Service Worker might re-register in the background and restore caches. You can force an update:
- Open Developer Tools (F12).
- Go to the **Application** tab.
- In the **Service Workers** section:
  <!-- - Check **"Update on reload"** (update on each refresh). -->
  - Click **"Unregister"** (unregister) to remove the existing Service Worker.
  - Refresh the page.

---

#### Step 2. **Manually Clear Cache Storage**
PWA uses the Cache API to store resources, and these caches may need to be cleared manually:
- Open Developer Tools (F12).
- Go to the **Application** tab.
- In the **Cache Storage** section:
  - Find the cache related to your PWA (usually named after the domain or Service Worker name).
  - Right-click the cache and select **Delete** (delete).
- Refresh the page and check if there are still caches.

:::