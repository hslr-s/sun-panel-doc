# Error Code Description

For the specific format of the response parameters, please refer to [Common Response Format](./#response).

## Common

| Code | Message | Description |
|------|---------|-------------|
| 0    | ok      | No error    |
| -1   | -       | General error, please refer to the content of the parameter `msg` for details |
| 1100 | token expires | Server error |
| 1000 | param format error | Token expired |
| 1001 | param format error | Parameter format error |

## Individual Interfaces May Have Errors

| Code | Message | Description |
|------|---------|-------------|
| 1202 | only name existed | Unique name already exists |
| 1203 | no record | No record |

