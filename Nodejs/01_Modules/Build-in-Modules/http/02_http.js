import http from "node:http";
import fs from "node:fs";

let server = http.createServer((req, res) => {
  let src = fs.createReadStream("./index.html");
  res.writeHead(200, { "content-type": "text/html" });
  src.pipe(res);  //pipe -> left (readable stream) , right -> (writeable stream)
});
server.listen(9000, (err) => {
  if (err) console.log("error during server running ");

  console.log("server is running on 9000. ");
});

//client side rendering - 
//server side rendering - 