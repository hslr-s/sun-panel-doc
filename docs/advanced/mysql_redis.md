# Using MySQL/Redis

::: danger
The project defaults to using `Sqlite3` as the database and `Memory` as the cache. The program supports `mysql` and `redis`, but the author has not tested them. Please use them with caution.

If you choose to proceed, the author encourages you to provide feedback on your experience, and please make sure to backup your data beforehand.
:::

Locate the project's [configuration file](./config.md).

Modify the key parts as follows:

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