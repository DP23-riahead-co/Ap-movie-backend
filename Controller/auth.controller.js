const express=require('express')
const bcypt =require('bcryptjs');
const {User}=require("../models")
const jwt=require('jsonwebtoken')




const signUp=async(req,res)=>{
    res.send("sign up");
    const{name,email,password,numberPhone}=req.body;
    user=await User.findOne({email});
    console.log(user);
    if(user){
    //ma hoa
    const salt=bcypt.genSaltSync(10);
    const hashPass=bcypt.hashSync(password,salt);
    try{
        const user=await User.create({name,email,password:hashPass,numberPhone});
        res.status(200).send(user);
    }catch(err){
        res.status(500).send(err);
    }}
    else{
        res.status(404).send("Tồn tại email");
    }
}
const signIn=async(req,res)=>{

    const{email,password}=req.body;
    try{
        const user = await User.findOne({email});
        if(user){
            const isMatch=await bcypt.compare(password,user.password);
            if(isMatch){
                //tạo token
                const payload={
                    id:user.id,
                    email:user.email,
                    type:user.type
                }
                const secretKey="duyPnt";
                const token=jwt.sign(payload,secretKey,{expiresIn:3600});
                res.status(200).send({massage:"success",token:token})
            }else{
                res.status(401).send("Sai mật khẩu");
            }

        }else{
            res.status(401).send("Không tồn tại");
        }
    }catch(err){
        res.status(500).send(err);
    }
  
}
const Test=async(req,res)=>{
    res.send("testing")
    const{name,email,password,numberPhone}=req.body;
        console.log("name ",name);
        //ma hoa
        const salt=bcypt.genSaltSync(10);
        const hashPass=bcypt.hashSync(password,salt);
        try{
            const user=await User.create({name,email,password:hashPass,numberPhone});
            res.status(200).send(user);
        }catch(err){
            res.status(500).send(err);
        }
}
module.exports={
    signUp,
    signIn,
    Test,
}