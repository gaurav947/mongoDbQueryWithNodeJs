const mongoose = require('mongoose');
const express = require('express');
const app = express();
const myTable = require('./mySchema');

app.use(express.json());
app.use(express.urlencoded());
//just like $and 
app.get('/getall',function(req,res){
    myTable.find({},function(err,result){res.json({result:result})});
})
//just like $and 
app.get('/arrayAll',function(req,res){
    myTable.find({myArr:{$all:["A","D"]}},function(err,result){res.json({result:result})});
})

app.get('/arrayElemMatch',function(req,res){
    myTable.find({mydocument:{$elemMatch:{price:{$lt:200}}}},function(err,result){res.json({result:result})});
})

app.get('/arraySize',function(req,res){
    myTable.find({myArr:{$size:3}},function(err,result){res.json({result:result})})
})

app.listen(5004,function(er,result){console.log("Port is activated")})