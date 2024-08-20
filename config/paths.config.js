const path = require("path");
const process = require("process");
const pkg = require("../package.json");
const root = process.cwd();

const resolvePath = relPath => path.resolve(relPath);
module.exports = {
    app: root,
    src: resolvePath(root, "src"),
    main: pkg.main || resolvePath(root, "src/index.js"),
    publicDir: resolvePath(root, "public")
    


}