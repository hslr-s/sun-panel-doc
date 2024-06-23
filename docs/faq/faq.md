# Here are some common questions:

::: info 
If the following issues still do not solve your problem, you can seek help through the [community](/introduce/author_groups.html).
:::

## Is Import and Export a Backup Feature?

Import and export are not backup features. They can only export the basic configuration of the icon cards in JSON format, not the image files. Currently, the project does not have a built-in backup feature, but it will be considered in the future.

## Data Loss After Docker Version Upgrade

1. In version v1.4.0, the Docker mounting directory was streamlined. Please strictly follow the tutorial to upgrade.
2. Incorrect mounting directory. Please check the path and distinguish between uppercase and lowercase letters.

## Docker Card Display Issues in the Project

Please use a Docker management tool to check if the container has been deleted or upgraded. If the container has been upgraded, the old container ID bound to the card will become unusable. You can edit the card to reselect the container.

## Linux Binary Version Fails to Run

If the Linux binary version downloaded from [GitHub releases](https://github.com/hslr-s/sun-panel/releases) fails to run, you can try downloading the version marked with `musl`.

## What is the Intranet/Extranet Environment (Mode); Can Only the Corresponding Icon Cards be Displayed?

The author's concept of intranet and extranet environments can be understood as our current real environment.

For example, if the project (Sun-Panel) is deployed on a machine at home, and we are also accessing the project from home, we can set the Sun-Panel environment on the home computer as the intranet environment. We can set the Sun-Panel environment on computers commonly used outside of the home as the extranet environment. This way, there's no need to switch frequently, and there's no confusion.

Based on the above understanding and considering that in the intranet environment, we may also need to access extranet addresses and vice versa, there is no distinction between intranet and extranet environments for displaying icons.

## Custom Footer Cannot Execute JavaScript (script tag) Code

Due to framework security restrictions, this feature is not supported for now. It will be addressed in the future. Currently, you can achieve this functionality through [custom JS](../advanced/custom_js_css.md).