const express=require("express")
const dotenv=require("dotenv");
const cors=require('cors');
dotenv.config();
const app=express();
const {readdirSync}=require("fs");
const { connectDB } = require("./connection");
//to read the folder struture
const port=process.env.PORT || 5000;
connectDB();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.get("/", (req, res)=>{
        res.send(
            "<h1>Server is running</h1>"
        )  
})
readdirSync("./routes").map((route)=>{
        app.use("/api", require(`./routes/${route}`));
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})