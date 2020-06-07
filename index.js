require('colors');

const titlingDefaults = {
    barStyle: "=",
    width: 70,
    mode: "info"
};

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
    },
    bigTitle,
    title
}

function bigTitle(str, {barStyle, width, mode}={}) {
    barStyle = barStyle || titlingDefaults.barStyle;
    width = width || titlingDefaults.width;
    mode = mode || titlingDefaults.mode;
    const bar = barStyle.repeat(width);
    module.exports[mode](bar + "\n" + centerText(str, width) + "\n" + bar)
}

function title(str, {barStyle, width, mode}={}) {
    barStyle = barStyle || titlingDefaults.barStyle;
    width = width || titlingDefaults.width;
    mode = mode || titlingDefaults.mode;
    module.exports[mode](centerText(str, width, barStyle))
}

function centerText(text, width, char=' ') {
    let parts = text.split('\n');
    parts = parts.map(s => s
        .padStart(width / 2 + s.length / 2, char)
        .padEnd(width, char)
    );
    return parts.join('\n');
}