const glob = require('fast-glob');
const path = require('path');
const CONTROLLERS_PATH = './src/controllers/http/**/*.js';
const IGNORE_FILES = ['middleware/**/*'];

module.exports = async function(api) {
    const options = {
        dot: true,
        objectMode: false,
        ignore: IGNORE_FILES
    };
    const files = await glob([CONTROLLERS_PATH], options)
    let countDone = 0
    let countError = 0

    files.map((file) => {
        try {
            const filePath = path.resolve(file)
            require(filePath)(api);
            countDone += 1;
        } catch (e) {
            countError += 1;
            console.error(e);
        }
    });
    console.log(`${countDone} endpoints ready 🚀`);
    if (countError) {
        console.log(`${countError} endpoints failed 🚨`);
    }
};