var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
    console.log();
    res.send('OK');
})

module.exports = router;