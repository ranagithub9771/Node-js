import express from "express";

const app=express();

app.get("/",(req, res)=>{
    res.send("HOme page. ");
})

app.get("/about",(req, res)=>{
    res.send("About page. ");
})
app.get("/contacts ",(req, res)=>{
    res.send("Contact page. ");
})

app.listen(3000,(err)=>{
    if(err) console.log(err,"error during server creation ");
     
    console.log("server is running on port 3000 ");
    
})