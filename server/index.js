require("dotenv").config();
const express = require('express');
const messageRoute = require("./router/message-route");
const errorMiddleware = require("./middlewares/error-middleware");
const cors =  require("cors");
require("./db/conn");
const app = express();


const PORT = 8000;

const corsOptions={
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, HEAD",
    credentials: true,
}

//cors
app.use(cors(corsOptions));

//this line is important
app.use(express.json());

// app.use("", messageRoute);
app.use("/api/form", messageRoute);

app.use(errorMiddleware);



app.listen(PORT, ()=>{
    console.log(`server runnig on port ${PORT}`);
})
