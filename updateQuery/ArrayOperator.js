const mongoose = require('mongoose');
const express = require('express');
const app = express();
const myTable = require('../ComparisonQuery/mySchema');

app.use(express.json());
app.use(express.urlencoded());
//just like $and 
app.get('/getall',function(req,res){
    myTable.find({},function(err,result){res.json({result:result})});
})
// Query for $ to update the First elements that matchs the Query
app.get('/withPosition',function(req,res){
    myTable.findOneAndUpdate({"mydocument.name":"xyz"},{$set:{"mydocument.$.price":100}},{new:true},function(err,result){res.json({result:result})});
})

//Quert for $[] to  update all Array who matched the Query

app.get('/withAllPosition',function(req,res){
    myTable.updateMany({"mydocument.name":"xyz"},{$set:{"mydocument.$[].price":500}},{new:true},function(err,result){res.json({result:result})});
})

//add a value in Array
app.get('/addToset',function(req,res){
    myTable.findOneAndUpdate({_id:"61a81d161765001b88591166"},{$addToSet:{mydocument:{name:"mno",price:100}}},{new:true},function(err,result){res.json({result:result})});
})

//pop a value in Array
//1 for remove from back and -1 remove from front

app.get('/popInArray',function(req,res){
    myTable.findOneAndUpdate({_id:"61a81d161765001b88591166"},
    {$pop:{mydocument:-1}},{new:true},function(err,result){res.json({result:result})});
})

//pull an element from Array
app.get('/pullInArray',function(req,res){   
    myTable.findOneAndUpdate({_id:"61a81d161765001b88591166"},
    {$pull:{mydocument:{_id:"61ac758cbf88e32c923b0157"}}},{new:true},function(err,result){res.json({result:result})});
})

app.listen(5004,function(er,result){console.log("Port is activated")})