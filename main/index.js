var router = require('../controllers/mainRouter')
var express = require('express')
var app = express()

app.use('/', router)

app.listen(3100, () => {
    console.log('Listen on 3100 port');
    
})