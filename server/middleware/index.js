const {query} = require('../models/db');
let item = null;
module.exports.initLocals = (req,res,next)=>{
    if(item){
        res.locals.item = item; 
    }else{
        const sql = 'select title,content from theitems';
        query(sql, null, (err, item) => {
            if(err) return next(err)
            res.locals.item = item; 
            next();
        }) 
    }
    
}   