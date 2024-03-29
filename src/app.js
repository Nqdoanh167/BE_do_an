/** @format */

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 3000;

//datebase --mongo
const db = require('./config/db/index');
db.connect();
//datebase --

app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
   console.log(`Example app listening on port ${port}`);
});
