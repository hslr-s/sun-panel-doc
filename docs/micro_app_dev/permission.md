# Permission Declaration

A micro app needs to declare the required permissions in `app.config.js` to use the corresponding platform capabilities.

## Permission Types

| Permission | Description |
|-----------|-------------|
| `network` | Use the API to access network resources |
| `dataNode` | Use the data node feature |
| `iframe` | Use iframe (must be declared when embedding an iframe within the micro app) |
| `systemMonitor` | Use system monitoring related APIs |

## Config Example

```javascript
export default {
  // Basic info
  author: 'hslr',
  microAppId: 'hslr-weather',
  version: '1.0.0',
  // ...

  // Permission config
  permissions: [
    'network',     // Requires network request
    'dataNode'    // Requires data node
  ],

  // Network domain whitelist (required when using network permission)
  networkDomains: [
    'api.weather.com',
    'github.com'
  ]
};
```

## Notes

- Please accurately declare the required permissions. Undeclared permissions cannot be used.
- Network permission requires configuring the `networkDomains` whitelist at the same time.
- If the micro app uses an iframe, be sure to declare the `iframe` permission, otherwise the review will not pass.
