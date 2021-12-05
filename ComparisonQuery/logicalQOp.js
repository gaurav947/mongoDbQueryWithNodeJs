const mongoose = require('mongoose');
const express = require('express');
const app = express();
const myTable = require('./mySchema');

app.use(express.json());
app.use(express.urlencoded());
app.get('/logicalAnd',function(req,res){
    myTable.find( {$and:[{price:{$gte:500}},
                  {category:"indian Cloth"},
                  {myArr:{$in:["A"]}}
                ]},function(err,result){
        res.json({status:200,result:result});
    })
});
app.get('/logicalNOT',function(req,res){
    myTable.find({price:{$not:{$gt:500} }},function(err,result){
        console.log("err=>",err);
        res.json({status:200,result:result});
    })
});
app.get('/logicalNor',function(req,res){
    myTable.find( {$nor: [{price:{$gt:500}},{price:{$lte:200}}] } ,function(err,result){res.json({status:200,result:result})})
})
app.get('/logicalOR',function(req,res){
    myTable.find({$or:[{myArr:{$in:["B"]}},{item: "kurta"}]},function(err,result){
        res.json({status:200,result:result});
    })
})
app.get('/all',function(req,res){
    myTable.find({},function(err,result){res.json({result:result})});
})
app.listen(5004,function(err,result){
    console.log("Port is activated");
})
