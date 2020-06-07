# tiny-logger
A small, convenient and tiny logger for JavaScript

You just need to install it with npm like that:

```javascript
// For node
const LOG = require('tiny-logger');

// Basic logs
LOG.info("An info message");
LOG.success("A success message");
LOG.log("A log message");

// Logs with date and label
LOG.debug("A debug message");
LOG.warn("A warning message");

// Error logs
LOG.error(Error("An error"));
LOG.error(Error("An error"), "A message that comes along with the error");
LOG.errorWithTrace(Error("An error"));
LOG.errorWithTrace(Error("An error"), "A message that comes along with the error");

// You can also throw log, then throw an error (cause LOG.error and LOG.errorWithTrace return the errror itself)
throw LOG.error(Error("An error"));
throw LOG.errorWithTrace(Error("An error"));

// Titles
// Options available:
// - barStyle determines the shape of titling bars. Default is "=".
// - width determines the width of the titling. Default is 50.
// - mode determines which function above should be used to print. Default is "info", other possible values are 
//   "success" and "log" (other functions may result in unexpected behavior).
LOG.title("A title");
LOG.title("A title", {barStyle: "-=="});
LOG.title("A title", {barStyle: "=", width: 70, mode: "success"});
```
