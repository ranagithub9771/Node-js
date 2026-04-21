import fs from "node:fs";




//! STREAM AND BUFFER - 

//!BUFFER is temporary space in memory.
//!STREAM means continuesly reading and wrting the data in chunks.

//! default buffer size :-
//normal files --> 64kb
//large files, audio or videos --> 128kb

//!Streams are of 4 types 
//1. Writable stream  -- fs.createWrite(path,data)
//2. readable stream  -- fs.createReadStream("path","encoding");
//3. duplex stream  -- pipe()  methods for read and write both 
//4. Transform stream

// 1.  writtable stream :-
// fs.createWriteStream("./demoo.py");

//2. readable stream :- 
// fs.createReadStream("./course.txt","utf-8");

//3. duplex stream :- 
//syntex -  source.pipe(destination);

// let src = fs.createReadStream("./course.txt","utf-8");
// let dest = fs.createWriteStream("./demoo.py");
// src.pipe(dest);

// 4. transform stream 



//! how chunks works :- 
let src = fs.createReadStream("./log.txt",{
    encoding :"utf-8",
    highWaterMarks:1, //<-- size of buffer
});

src.on("data",(chunk)=>{
    console.log(chunk);
    console.log(chunk.length);
    
})