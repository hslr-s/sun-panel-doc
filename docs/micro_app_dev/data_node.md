# Data Nodes

A data node is the micro app's persistent data storage mechanism. Data is isolated and stored based on the account and app ID. Each micro app can have multiple data nodes, and each data node can store multiple key objects. **Nodes must be registered in the config file to be used properly.**

## Basic Concepts

- **APP level**: Used globally by all users, suitable for public config
- **USER level**: Exclusive to the currently logged-in account, data isolated between accounts

### Public Mode

Data nodes support setting the `isPublic` property:
- `isPublic: true` - Readable in public mode
- `isPublic: false` - Readable and writable only by logged-in users

## Permission Description

Data permissions can be divided into three types (`read`, `write`, `(passthrough) use`). Data nodes at all levels support template replacement usage in the API's [request](/micro_app_dev/api#network-request) passthrough request. This ensures sensitive data is not leaked to the frontend while still safely using the sensitive data in the data node to ensure normal passthrough API calls. Please refer to the following for read/write permissions:

| Login Mode / Scope | APP (Public) | APP | USER (Public) | USER |
|----------------|------------|-----|-------------|------|
| Public Mode | Read | - | Read | - |
| Normal Account | Read | - | Read, Write | Read, Write |
| Admin Account | Read, Write | Read, Write | Read, Write | Read, Write |

## Config Description

Configure data nodes in `app.config.js`:

```javascript
export default {
  // ... other config code omitted here

  // Need to declare dataNode permission
  permissions: ['dataNode'],

  dataNodes: {
    // City list - APP level, publicly readable
    cityList: {
      scope: 'app',
      isPublic: true
    },
    // User selected city - USER level, publicly readable
    userCity: {
      scope: 'user',
      isPublic: true
    },
    // API key - APP level, only admin writable
    apiKey: {
      scope: 'app',
      isPublic: false
    },
    // User private data - USER level
    privateData: {
      scope: 'user',
      isPublic: false
    }
  }
};
```

### Config Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `scope` | string | Data scope: `'app'` or `'user'` |
| `isPublic` | boolean | Whether readable in public mode |

## Usage Scenario Example

Using a weather micro app as an example:

| Data | Scope | Public | Description |
|------|--------|------|-------------|
| City list | APP | ✅ | All users see the same data |
| User selected city | USER | ✅ | Each user selects independently |
| API key | APP | ❌ | Only admin config |
| User custom settings | USER | ❌ | Each user configures independently |

:::: tip
If you cannot determine the data scope, fully use USER-level data nodes.
::::

## Usage Method

For detailed API calls, please refer to [Platform API - Data Nodes](./api?#dataNode).
