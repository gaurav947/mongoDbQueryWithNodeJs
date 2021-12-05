const mongoose = require('mongoose');
const express = require('express');
const app = express();
const myTable = require('./mySchema');

app.use(express.json());
app.use(express.urlencoded());
app.get('/EvaluationRegex',function(req,res){
    myTable.find({category:{$regex:'^i',$options:'i'}},function(err,result){res.json({result:result})});
})

app.get('/getall',function(req,res){
    myTable.find({$where:"Hoody"},function(err,r){res.json({res:r})});
})
app.listen(5004,function(er,result){console.log("Port is activated")})