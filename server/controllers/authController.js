const User= require("../models/User")
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { generateAccessToken } = require("../helpers/accessToken");
const {generateRefreshToken} = require("./refreshToken");

const login= async(req, res)=>{
    const {username,password}=req.body;
    try{
        let user=await User.findOne({username});
        if(!user){
            return res.status(400).json({success: false, message: "User cannot find"});
        }
        const comparedpass=await bcrypt.compare(password, user.password);
        if(!comparedpass)return res.status(400).json({success:false, message: "Invalid Credential"});
        const data={
            id:user._id,
            accountType:user.accountType,
            author:user.username,
        };
        const accessToken=generateAccessToken(data);
        const refreshToken=generateRefreshToken(data);
       
        return res.status(200).json({
            success: true,
            message:"Login Sccessfull",
            accessToken,
            refreshToken,
            role: user.accountType,
            author: user.username,
        })

    } catch(error){
        return res.status(500).json({success:false, message: error.message});
    }
}
const signup=async(req, res)=>{
    const {username, email, password, accountType}=req.body;
    try{
        let user=await User.findOne({username})
        if(user){
                return res.status(400).json({success: false, message: "Username already in use"});
        }
        const hashpassword=await bcrypt.hash(password, 10);
        user= new User({
            username, 
            email,
            password:hashpassword,
            accountType
        });
        await user.save();
        return res.status(201).json({success:true, message: "User created successfully"});

    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
module.exports={login, signup};