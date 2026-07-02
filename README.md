# Logging Middleware
A small logging utility for sending frontend log events to the configured logging endpoint.
## What it does
The module exports helper functions to POST log events to:
- `http://20.244.56.144/evaluation-service/logs`
It supports log levels: `debug`, `info`, `warn`, `error`, `fatal`.
## Files

- `looger.js`: Logging functions (implementation)
- `logger.json`: Configuration values (endpoint, allowed levels/stacks)
## API
### `Log(stack, level, packageName, message)`
Sends one log event.
**Parameters**
- `stack` (string): log category. Expected values (from config): `frontend`, `backend`
- `level` (string): one of `debug | info | warn | error | fatal`
- `packageName` (string): caller/application name
- `message` (string): log message
**Payload fields**
- `stack`
- `level`
- `package`
- `message`
- `timestamp` (ISO string)
### Convenience helpers
- `logInfo(pkg, msg)`
- `logWarn(pkg, msg)`
- `logError(pkg, msg)`
## Example usage (React / Vite)
```js
import { logInfo, logError } from "./Loggingmiddleware/logger";
'''
> Note: In this repository, the frontend version of the logger lives at `Frontend/src/Loggingmiddleware/logger.js`.

## Configuration
`LoggingMiddleware/logger.json` contains:
- `endpoint`
- `levels`
- `stacks`
- `defaultStack`
- `defaultLevel`
## Security note



ScreenShort
<img width="707" height="844" alt="image" src="https://github.com/user-attachments/assets/11813613-620b-4577-8067-4eda57fbf5ff" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3d8a6971-2470-472e-b73c-64b334c69755" />
<img width="592" height="478" alt="image" src="https://github.com/user-attachments/assets/3d262575-8a39-400f-8aa0-e6bc1a290c71" />
<img width="651" height="628" alt="image" src="https://github.com/user-attachments/assets/b436a87f-6cb7-4b2e-851d-261b9f80b3cf" />




