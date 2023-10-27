var fs = require('fs');

let data = '쓰기!!';
fs.writeFile('text2.txt',data,'utf8',function(error){
    console.log('write end');
});