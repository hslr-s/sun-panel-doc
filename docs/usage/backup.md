# Migration, Backup, and Recovery

**`v1.8.0 (beta25-08-10)`** Added. This function packages all critical project data (including uploaded files, all account data, etc.) into a zip-format backup file. This allows data recovery when needed.

::: danger Note
- Currently supports backup for **specific local directories only**. **Data in other directories and MySQL databases must be backed up and restored manually**.  
- After migration (restoring a backup), **PRO licensed accounts require reauthorization**.  
:::

The following directories are primarily backed up:

```
custom: Custom styles directory
database.db: SQLite3 database files
uploads: Upload directory
```