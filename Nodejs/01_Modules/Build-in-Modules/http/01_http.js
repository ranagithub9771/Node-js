//! http module is a core module used to vreate a server.


//! steps to create a  http server
//1. import http
//2. use createServer()
//3. assign a Port number 
//4. define routes 

import http from "node:http";

let server = http.createServer((req,res)=>{
  
    // console.log("request :",req);    //req.body, req.params, req.cookies, 
    // console.log("respone :", res);   //res.write(), res.end(), 

    // res.end(" hello universe "); 
    // res.end("<h1> Hello world </h1>")

    //!way 1 
    // res.setHeader("content-type","text/html");
    // res.statusCode=400;
   //!way 2
    res.writeHead(200,{"content-type":"text/html"});

    res.end("<h2> Hello universe </h2>");
    // res.write("hello world. ");
    

});
server.listen(9000,(err)=>{
    if(err) console.log("error during creating server.");
    console.log("server is running on 9000");
    
})

//broswer --> http://localhost:portnumber
//modify --> restart the server , to avoid this use below coommand
//ndoe --watch filename.js