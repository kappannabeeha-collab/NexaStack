
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json())
require('dotenv').config();
const User = require("./models/user.model");
const Posts = require("./models/post.model");
const connectDB = async(req,res) =>
{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connectd to Database");
    }
    catch(error)
    {
        console.log(error)
    }
}
connectDB();
app.get('/',(req,res)=>
{
    res.send("This Test App is Working");
})
const port = process.env.PORT
app.listen( port, ()=>{
    console.log(`Server is running on http://localhost:3000`)
})
const createUser = async(req,res) =>
{
    try{
    const user = await User.create(req.body);
    res.status(201).json({message : "User created successfully"},{user : user});
    }
    catch(error)
    {
        res.status(500).json({message : "Interal Error"})
    }
}
const createPost = async(req,res) =>
{
    try{
    const post = await Posts.create(req.body);
    res.status(201).json({message : "Post created successfully"},{posts : post});
    }
    catch(error)
    {
        res.status(500).json({message : "Interal Error"})
    }
}
app.post('/user',createUser);
app.post('/post',createPost);
