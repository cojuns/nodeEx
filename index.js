const express = require('express');
const app = express()
const port = 3000;

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.listen(port, () =>
    console.log('3000포트에서 서버 실행중'));

