"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function configDotenv() {
    var result = require('dotenv').config();
    if (result.error) {
        throw result.error;
    }
}
exports.default = configDotenv;
