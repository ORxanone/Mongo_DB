require('dotenv').config();
const express = require('express');
const app = express();
const productsRouter = require('./products');
const connect = require('./db');

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use(productsRouter);


connect();
app.listen(PORT, () => {
    console.log("Connected");
});

