# 使用mysql/redis

::: danger
项目默认使用的数据库是`Sqlite3`，缓存是`Memory`。程序本身是支持`mysql`和`redis`的，但是作者并未测试，请谨慎使用。

如果英雄你继续选择使用，还希望你可以将使用结果反馈给作者，最后请英雄提前备份好数据。
:::

找到项目的[配置文件](./config.md)


修改下面重点部分

```ini{8,10,12,23-28,40-43}
# ======================
# Basic configuration
# ======================
[base]
# Web run port. Default:3002
http_port=3002
# Database driver [mysql/sqlite(Default)]
database_drive=mysql // [!code focus]
# Cache driver [redis/memory(Default)]
cache_drive=redis // [!code focus]
# Queue driver [redis/memory(Default)]
queue_drive=redis // [!code focus]
# File cache path (Please start with the current path './')
# Warning: The files that have been uploaded after the modification cannot be accessed
source_path=./uploads
# File cache path.
source_temp_path=./runtime/temp

# ======================
# Mysql database driver
# ======================
[mysql]         // [!code focus]
host=127.0.0.1         // [!code focus]
port=3306         // [!code focus]
username=root         // [!code focus]
password=root         // [!code focus]
db_name=sun_panel         // [!code focus]
wait_timeout=100         // [!code focus]

# ======================
# sqlite database driver
# ======================
[sqlite]
file_path=./database/database.db

# ======================
# redis database driver
# ======================
[redis]         // [!code focus]
address=127.0.0.1:6379         // [!code focus]
password=         // [!code focus]
prefix=sun_panel:         // [!code focus]
db=0         // [!code focus]
```