require("dotenv").config();
const express = require('express');
const messageRoute = require("./router/message-route");
const errorMiddleware = require("./middlewares/error-middleware");
const cors =  require("cors");

require("./db/conn");
const app = express();




const PORT = process.env.PORT;

const corsOptions={
    origin: "https://toast-message-b.vercel.app/",
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
