"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.config();
var envVars = process.env;
var configuration = Object.freeze({
    mongo_url: envVars.MONGO_URL || 'any',
    node_env: envVars.NODE_ENV || 'any',
    port: envVars.PORT || 'any',
    secret: envVars.SECRET || 'any',
});
exports.default = configuration;
