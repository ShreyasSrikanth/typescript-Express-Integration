"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//by defualt typescript is tuned for web apps running in browser and normal express type importing is not supported
// const express = require('express');
// import express = require('express');
const express_1 = __importDefault(require("express")); // typescripts accepts thus syntax
const app = (0, express_1.default)();
app.listen({ port: 3000 });
