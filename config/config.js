const common = require("./common.config");
const envconfig = require("./env.config");
const config = process.env.NODE_ENV === "production"? require("./prod.config"): require("./dev.config")

module.exports = function(env){
    // return configurations
    return {
        ...common, ...config
        // your configurations here
    }
}