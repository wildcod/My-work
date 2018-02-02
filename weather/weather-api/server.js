const express = require('express')
const path = require('path')
const request = require('request')
const app = express();


app.use('/' ,express.static(path.join(__dirname , 'frontend')));

let url = 'http://api.openweathermap.org/data/2.5/weather?q=india&APPID=625e9569de5ce1ebf2439c314fd02816&units=metric';

request({url : url} , function(err , res, body) {
            let data = JSON.parse(body);
                console.log(data.main);
            })


app.listen(1122, () => console.log('Server is started'))