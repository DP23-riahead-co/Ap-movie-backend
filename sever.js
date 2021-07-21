const express=require('express');
const router = require('./Routers/root.router');


const app=express();


app.use(express.json());
app.use(router)
const port=7000;



app.listen(port,()=>{
    console.log('server is running at port:',port);
})
//master