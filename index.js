require('colors');

const titlingDefaults = {
    barStyle: "=",
    width: 80,
    mode: "info"
};

module.exports = {
    info: (str) => console.info(str.cyan),
    success: (str) => console.info(str.green),
    log: (str) => console.log(str),
    debug: (str, noLabel=false) => console.debug(`${new Date().toLocaleTimeString()} ${noLabel? "" : "- DEBUG: "}${str}`),
    warn: (str, noLabel=false) => console.warn(`${new Date().toLocaleTimeString()} ${noLabel? "" : "- WARNING: "}${str}`.yellow),
    warnRed: (str, noLabel=false) => console.warn(`${new Date().toLocaleTimeString()} ${noLabel? "" : "- WARNING: "}${str}`.red),
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

function bigTitle(str, {barStyle, width, mode, lineBefore, lineAfter} = {}) {
    barStyle = barStyle || titlingDefaults.barStyle;
    width = width || titlingDefaults.width;
    mode = mode || titlingDefaults.mode;
    const bar = barStyle.repeat(width);
    module.exports[mode]((lineBefore ? "\n" : "") + bar + "\n" + centerText(str, width) + "\n" + bar + (lineAfter ? "\n" : ""))

}

function title(str, {barStyle, width, mode, lineBefore, lineAfter} = {}) {
    barStyle = barStyle || titlingDefaults.barStyle;
    width = width || titlingDefaults.width;
    mode = mode || titlingDefaults.mode;
    module.exports[mode]((lineBefore ? "\n" : "") + centerText(str, width, barStyle) + (lineAfter ? "\n" : ""))
}

function centerText(text, width, char = ' ') {
    let parts = text.split('\n');
    parts = parts.map(s => s
        .padStart(width / 2 + s.length / 2, char)
        .padEnd(width, char)
    );
    return parts.join('\n');
}