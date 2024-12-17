# 在宝塔面板上部署

## 安装宝塔面板

### 方式 1
前往 [**宝塔面板**](https://www.bt.cn/u/Z5ODNb) 官网，选择对应系统的脚本下载安装。

### 方式 2
Centos安装脚本
```sh
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh bd93a986
```

Ubuntu/Deepin安装脚本
```sh
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh bd93a986
```

Debian安装脚本
```sh
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh bd93a986
```

Fedora安装脚本
```sh
wget -O install.sh http://download.bt.cn/install/install_6.0.sh && bash install.sh bd93a986
```

升级脚本
```sh
wget -O update.sh http://download.bt.cn/install/update6.sh && sh update.sh bd93a986
```
## 开始部署

1. 宝塔面板安装成功后，如果首次安装需要进入Docker页面中，安装docker环境
    ![](/images/deploy/baota/installDocker.png)
2. 使用关键字搜索 **`sun`** 找到 `Sun-Panel` ，点击安装（如果没有找到可以点击应用程序更新，或者升级宝塔到最新版本，或者缩减搜索关键字）
    ![](/images/deploy/baota/search.png)
3. 根据自身需求可以设置域名等信息进行安装
    ![](/images/deploy/baota/install.png)
4. 如果无法拉取镜像可以到设置中配置加速镜像，然后重新安装
    ![](/images/deploy/baota/settingAcceleratedImage.png)
5. 安装成功后，可以查看详情
    ![](/images/deploy/baota/detail.png)

## 访问使用

1. 浏览器访问刚刚设置的**域名**或者 `ip:端口` 的格式访问

    ![](/images/deploy/baota/login.png)

2. 输入默认账号密码登录

    ![](/images/deploy/baota/home.png)

3. 登录后务必**修改默认的账号密码**