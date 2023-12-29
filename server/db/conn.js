const mongoose = require('mongoose');

DB = mongodb+srv://harikeshlinux:t5tKUIP0SoaULLAC@cluster0.6ehpqhq.mongodb.net/toastmessage?retryWrites=true&w=majority;


mongoose.connect(DB).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log("Failed");
})
