"use strict";
//by defualt typescript is tuned for web apps running in browser and normal express type importing is not supported
// const express = require('express');
// import express = require('express');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//whe compiled it looks different in app.js
const express_1 = __importDefault(require("express")); // typescripts accepts thus syntax
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(todos_1.default);
//thanks to typescript we get extra help from IDE
app.listen(3000);
