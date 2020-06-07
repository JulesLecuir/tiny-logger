require('colors');

module.exports = {
    info: (str) => console.info(str.blue),
    success: (str) => console.info(str.green),
    log: (str) => console.log(str),
    debug: (str) => console.debug(`${new Date().toLocaleTimeString()} - DEBUG: ${str}`),
    warn: (str) => console.warn(`${new Date().toLocaleTimeString()} - WARNING: ${str}`.yellow),
    errorWithTrace: (err, str) => {
        console.error((str ? `--------------\n${new Date().toLocaleTimeString()} - ERROR: ${str}\n` : `--------------\n${new Date().toLocaleTimeString()} - ERROR: `).red + `${err.stack}\n--------------`.red);
        return err;
    },
    error: (err, str) => {
        console.error((str ? `--------------\n${new Date().toLocaleTimeString()} - ERROR: ${str}\n` : `--------------\n${new Date().toLocaleTimeString()} - `).red + `${err.message}\n--------------`.red);
        return err;
    }
}