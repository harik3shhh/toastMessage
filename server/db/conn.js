const mongoose = require('mongoose');

DB = process.env.DB;


mongoose.connect(DB).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log("Failed");
})