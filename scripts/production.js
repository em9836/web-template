#!/usr/bin/env node
console.log("Production: To Be Implemented.");
process.env.NODE_ENV = "production";
const configFactory = require("../config/config");

const config = configFactory("production");