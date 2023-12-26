//by defualt typescript is tuned for web apps running in browser and normal express type importing is not supported
// const express = require('express');
// import express = require('express');

//whe compiled it looks different in app.js

import express from 'express';   // typescripts accepts thus syntax
import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json());
app.use(todosRoutes);

//thanks to typescript we get extra help from IDE
app.listen(3000);