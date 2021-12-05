const mongoose = require('mongoose');
const express = require('express');
const app = express();
var myTable = require('./mySchema');

app.use(express.json());
app.use(express.urlencoded());
//add data
app.post('/addData',function(req,res){
    try{
    var body = req.body;
    myTable.create(body,function(err,result){
        if(err)
        {
            res.json({status:400,err:err});
        }
        else
        {
            res.json({status:200,data:result});
        }
    })}
    catch(err)
    {
        res.json({status:5004,message:"INTERNAL_SERVER_ERR",err:err})
    }
})
//Equal to 
app.get('/CompareWithEq',function(req,res){
    myTable.find({price:{$eq:100}},function(err,result){
        if(err) res.json({status:400,err:err});
        else{
            res.json({status:200,data:result});
        }
    })
})
//greater than
app.get('/compareWithGt',function(req,res){
    myTable.find({price:{$gt:100}},function(err,result){res.json({status:200,data:result})})
})
//greater than equal
app.get('/compareWithGte',function(req,res){
    myTable.find({price:{$gte:100}},function(err,result){res.json({status:200,data:result})})
})
//less then
app.get('/compareWithlt',function(req,res){
    myTable.find({price:{$lt:200}},function(err,result){res.json({status:200,data:result})})
})
//less then equal to
app.get('/compareWithlte',function(req,res){
    myTable.find({price:{$lte:200}},function(err,result){res.json({status:200,data:result})})
})
//value in array
app.get('/compareWithin',function(req,res){
    myTable.find({price:{$in:[100,200,700]}},function(err,result){res.json({status:200,data:result})})
})
//not equal to 
app.get('/compareWithne',function(req,res){
    myTable.find({price:{$ne:700}},function(err,result){res.json({status:200,data:result})})
})
//
app.get('/compareWithnin',function(req,res){
    myTable.find({price:{$nin:[100,200,700]}},function(err,result){res.json({status:200,data:result})})
})

app.listen(5004,function(err,result){
    console.log("Port is activated");
})