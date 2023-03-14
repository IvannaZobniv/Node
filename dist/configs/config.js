"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.configs = {
    PORT: process.env.PORT || 5001,
    DB_URL: process.env.DB_URL || "base",
    ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "access",
    REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "refresh",
};
