# 配置文件

> [!note] 默认的配置目录为 ./conf
> ```
> .
> ├── conf
> |   ├── conf.ini
> |   └── conf.example.ini
> └── ...
> ```
> 其中`./conf/conf.example.ini` 为当前软件版本完整的配置，每次启动都会覆盖更新，如果配置文件有损坏，可以将它直接重命名为 `conf.ini`

每个版本的配置文件可能略有差异，请以您的程序中`conf.ini`为准，下面内容仅供参考：
```ini
# ======================
# Basic configuration
# ======================
[base]
# Web run port. Default:3002
http_port=3002
# Database driver [mysql/sqlite(Default)]
database_drive=sqlite
# Cache driver [redis/memory(Default)]
cache_drive=memory
# Queue driver [redis/memory(Default)]
queue_drive=memory
# File cache path (Please start with the current path './')
# Warning: The files that have been uploaded after the modification cannot be accessed
source_path=./uploads
# File cache path.
source_temp_path=./runtime/temp

# ======================
# Mysql database driver
# ======================
[mysql]
host=127.0.0.1
port=3306
username=root
password=root
db_name=sun_panel
wait_timeout=100

# ======================
# sqlite database driver
# ======================
[sqlite]
file_path=./database/database.db

# ======================
# redis database driver
# ======================
[redis]
address=127.0.0.1:6379
password=
prefix=sun_panel:
db=0
```