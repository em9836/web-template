//imports 
const process = require("process");
const _env = process.env;
const pkg = require('../package.json');
//put all your env configuration here 
module.exports = {
    BUILD_PATH: _env.BUILD_PATH || "build",
    PUBLIC_URL: _env.PUBLIC_URL || "",
    PROJECT_NAME: _env.PROJECT_NAME || pkg.name
    
}