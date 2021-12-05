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
//used for to decrement or increment the specific field
app.get('/incOP',function(req,res){
    myTable.findOneAndUpdate({item:"Hoody"},{$inc:{price:-100}},{"new":true},function(err,result){res.json({result:result})});
})
//$set to replace the fields value value
app.get('/setOp',function(req,res){
    myTable.findOneAndUpdate({item:"Hoody"},{$set:{price:550}},{"new":true},function(err,result){res.json({result:result})});
})
//unset used for to delete particular fields
app.get('/unsetOp',function(req,res){
    myTable.findOneAndUpdate({item:"Hoody"},{$unset:{category:"winter Cloth"}},{"new":true},function(err,result){res.json({result:result})});
})

app.listen(5004,function(er,result){console.log("Port is activated")})