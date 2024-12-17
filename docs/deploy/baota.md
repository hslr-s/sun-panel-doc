# Deploy on Baota Panel

## Install Baota Panel

### Method 1

Go to the official website of [**Baota Panel**](https://www.bt.cn/u/Z5ODNb) and select the script corresponding to your system to download and install.

### Method 2

Centos
```sh
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh bd93a986
```

Ubuntu/Deepin
```sh
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh bd93a986
```

Debian
```sh
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh bd93a986
```

Fedora
```sh
wget -O install.sh http://download.bt.cn/install/install_6.0.sh && bash install.sh bd93a986
```

Upgrade
```sh
wget -O update.sh http://download.bt.cn/install/update6.sh && sh update.sh bd93a986
```



## Deployment

1. After the Baota Panel is installed, if it is the first installation, you need to enter the Docker page to install the Docker environment.
  ![](/images/deploy/baota/installDocker.png)
2. Use the keyword search **`sun`** to find `Sun-Panel` and click Install (If you cannot find it, you can click Application Update, or upgrade the Baota Panel to the latest version, or reduce the search keywords).
  ![](/images/deploy/baota/search.png)
3. You can set up domain names and other information according to your needs for installation.
  ![](/images/deploy/baota/install.png)
4. If you cannot pull the image, you can configure the accelerated image in the settings and then reinstall it.
  ![](/images/deploy/baota/settingAcceleratedImage.png)
5. After the installation is successful, you can view the details.
  ![](/images/deploy/baota/detail.png)

## Access and Use

1. Access the **domain name** or `ip:port` format you just set in your browser.
  ![](/images/deploy/baota/login.png)
2. Enter the default username and password to log in.
  ![](/images/deploy/baota/home.png)
3. After logging in, be sure to **change the default username and password**.
