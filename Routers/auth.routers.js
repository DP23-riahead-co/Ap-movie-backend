const express=require('express');
const {signIn, Test, signUp}=require("../Controller/auth.controller")
const authRouter=express.Router();


authRouter.post('/signUp',signUp);
authRouter.post('/signIn',signIn);
authRouter.post('/test',Test);
module.exports=authRouter;