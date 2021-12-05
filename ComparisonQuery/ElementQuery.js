const mongoose = require('mongoose');
const express = require('express');
const app = express();
const myTable = require('./mySchema');

app.use(express.json());
app.use(express.urlencoded());
app.get('/ElementExists',function(req,res){
    myTable.find({myArr:{$exists:false}},function(err,result){res.json({result:result})});
})
app.get('/ElementType',function(req,res){
    myTable.find({myArr:{$type:"array"}},function(err,result){res.json({result:result})});
    //myTable.find({myArr:{$type:"array"}},function(err,res){res.json({status:200,result:res})})
})
app.listen(5004,function(er,result){console.log("Port is activated")})