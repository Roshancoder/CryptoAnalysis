const express = require('express');
const router = express.Router();
const fetch =  require('node-fetch');
const Tasks = require('../models/model');


async function getData(){
    const data = await fetch("https://api.wazirx.com/api/v2/tickers")
    const json = await data.json();  //convert it to array of objects
    //const realData = lemon.slice(0,10)
    let arr = []; 
    for(item in json){
        arr.push(json[item]);
    }
    const realData = arr.slice(0,10)
    return realData;
}
router.get('/',async(req,res)=>{
    const data = await getData();
    for(let i =0;i<data.length;i++){
        const doc = await Tasks.find({name:data.name});
        const Task = new Tasks({
            name : data[i].name,
            last : data[i].last,
            buy : data[i].buy,
            sell : data[i].sell,
            volume: data[i].volume,
            base_unit :data[i].base_unit
        })
        await Task.save();
    }
    const newData = await Tasks.find();
    res.send(newData);
})



module.exports = router