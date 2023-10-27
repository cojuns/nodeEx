const express = require('express');
const app = express()
const port = 3000;


// 정규 표현식
app.get('/ab?cd',(req, res) => {
    res.send('ab?cd');
});

app.get('/a/',(req, res) => {
    res.send('/a/');
});

app.post('/', function(req, res) {
    res.send('Got a POST request');
});

app.put('/user', function(req, res) {
    res.send('Got a PUT request at / user');
});

app.delete('/user', function(req, res) {
    res.send('Got a DELETE request at / user');
});

// 모든 HTTP 요청
app.all('/customer', function(req, res) {
    res.send('Got a ALL request at / customer');
});

// Path Variable
app.get('/user/:userId/item/:itemId', function(req, res) {
    const {userId, itemId} = req.params;
    res.send(`userId: ${userId}, itemId: ${itemId}`);
});



app.listen(port, () =>
    console.log('3000포트에서 서버 실행중'));