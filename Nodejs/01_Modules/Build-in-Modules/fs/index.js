//! File System - fs (core module)

// import { log } from "node:console";
// import { log } from "node:console";
import { log } from "node:console";
import fs from "node:fs";

// console.log(fs);

//!--------------------- Syncronous way ---------------------

//!create a file --> fs.writeFileSync("path","data");
//-> if file is not present create it otherwise if file is present ocerride the data.

//ex-1
// console.log(1);

// let val = fs.writeFileSync("./demo.txt","File created  sync way ");
// if(val===undefined ){
//     console.log("file created ");

// }
// console.log(2);

// ex-2
// fs.writeFileSync("./module.txt","data override");

//!read a file --> fs.readFileSync("path","encoding");

// ex-1
// let data = fs.readFileSync("./demo.txt","utf-8");
// console.log(data);

// ex-2
// let data2 = fs.readFileSync("./module.txt","utf-8");
// console.log(data2);

//!Update a File --> fs.appendFileSync("path", "data");

// fs.appendFileSync("./module.txt","update data");
// fs.appendFileSync("./module.txt","\n hello world developer");

//! Delete a file --> fs.unLinkSync("path");

// fs.unlinkSync("./demo.txt");

//!---------------------Asynchronous Way-----------------

//!create file by asychronous way
// console.log(1);

// fs.writeFile("./user.txt","John doe from usa ",(err)=>{
//  if(err){
//     console.log("uable to create file ");

//  }
//  else{
//     console.log("file created. ");

//  }
// })

// console.log(2);

//!READ A FILE     :-

// fs.readFile("./index.js","utf-8", (err,data)=>{
//    if(err)console.log("unable to read");
//    else console.log("file read successfully");
//    console.log(data);

// })

//!Update file

// fs.appendFile("./user.txt","jonny",(err)=>{
//     if(err)console.log("undable to update data ");
//     else console.log("file update successfully ");

// })

//!Delete a file

// fs.unlink("./module.txt",(err)=>{
//     if(err)console.log("unable to delete file.");
//     else console.log("file deleted successfully");

// })

//!create file and append multiple data

// fs.writeFile("./course.txt", "Course are :", (err) => {
//   if (err) console.log(err);
//   console.log("file created. ");

//   fs.appendFile("./course.txt", "\nMern full stack ", (err) => {
//     if (err) console.log("unable to add course  ");
//     console.log("1 course added ");

//     fs.appendFile("./course.txt", "\nJava full stack", (err) => {
//       if (err) console.log("unable to add course ");
//       console.log("2 course added ");
//     });
//   });
// });

//! --------------------- fs Promise ---------------------------------
import fsp from "node:fs/promises";

// let res = fsp.writeFile("./log.txt","I am log file.");
// res.then(()=>{
//     console.log("file created successfully ");

// })
// .catch((err)=>{
//     console.log("unable to create file log.txt ");

// })

// console.log(res);

//!READ A FILE :-

// let res = fsp.readFile("./log.txt", "utf-8");
// res
//   .then((data) => {
//     console.log("readd file succesfully ");
//     console.log(data);

//   })
//   .catch((err) => {
//     console.log("unable to read file ");
//   });

//!create file and append multiple data

// let res = fsp.writeFile("./class.txt", "Classes are :");
// res
//   .then(() => {
//     console.log("file created successfully ");

//     let res2 = fsp.appendFile("./class.txt", "\nHTML class ");
//     res2
//       .then(() => {
//         console.log("html class added ");

//         let res3 = fsp.appendFile("./class.txt", "\nCSS class ");
//         res3
//           .then(() => {
//             console.log("css class added ");
//           })
//           .catch((err) => {
//             console.log("unable to add css class ");
//           });
//       })
//       .catch((err) => {
//         console.log("unable to add html class");
//       });
//   })
//   .catch((err) => {
//     console.log("unable to create file. ");
//   });

//! --------------------- fs async and await ---------------------------------
async function fsOperation() {
  try {
    fsp.writeFile("./demo.txt", "this is demo file");
    console.log("file created successfully");
    fsp.appendFile("./demo.txt", "\nhello world ");
    console.log("data added 1");
    fsp.appendFile("./demo.txt", "\nnamste developer ");
    console.log("data added 2");
  } catch (err) {
    console.log(err);
  }
}

fsOperation();
