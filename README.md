init project
npm i express dotenv



const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
   console.log(`Example app listening on port ${port}`);
});
