# Configuration file

Configuration file: `conf/conf.ini`

The file `./conf/conf.example.ini` is the complete configuration for the current version of the software. It gets overwritten and updated every time the software is launched. If the configuration file is damaged, you can simply rename it to `conf.ini`.

For reference on the configuration file, please consider the `./conf/conf.ini` in your program.

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