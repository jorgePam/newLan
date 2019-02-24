var express = require('express');
var router = express.Router();
const { query } = require('../models/db');  //解构db 中的query 方法
let result={};

/* GET users listing. */
router.get('/test', function (req, res, next) {
    res.set("Access-Control-Allow-Origin", "http://localhost:8080");
    
    const sql = 'select title,content from theitems';
    query(sql, null, (err, item) => {
        if (err) return ;
        console.log(item);
        
        result=item;
        console.log(result);
        res.json(result);
    })
    //await 
});
///router      



module.exports = router;
