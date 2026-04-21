// !Basic objects in js

// let company = "HCL";

// let key="salary";
// let obj = {
//   name: "rana",
//   age: 20,
//   getDetails: function () {
//     console.log(this.name, this.age);
//   },
//   company,
//   [key]:80000
// };

// console.log(obj.name);
// obj.getDetails();
// console.log(obj);

//! Spread operator

// let obj1 = {
//   username: "john",
//   email: "john@gmail.com",
// };

// let obj2 = {
//   ...obj1,
//   password: 123,
//   role: "user",
// };

// console.log(obj1);
// console.log(obj2);

// !Destructuring

// let obj1 = {
//   username: "john Doe",
//   email: "john@gmail.com",
//   password: 124,
// };

// let { username, email, password } = obj1;
// console.log(username,email );

//! Async and Sync 

// console.log("start");

// setTimeout(() => {
//     console.log("timeOut 1 ");
// }, 5000);

// console.log("hii ");

// Promise.resolve().then(()=>{
//     console.log("promise 1 ");
// })

// setTimeout(() => {
//     console.log("timeOut 2 ");
// }, 1000);

// console.log("end");

//! Map and forEach()
// let arr = [10,22,34,55,66];

// let val1 = arr.map((e,i)=>{
//     console.log(e,i);
//     return e + 5;
// })

// console.log("--------------")

// let val2 = arr.forEach((e,i)=>{
//     console.log(e , i );
//     return e + 6;
// })

// console.log("map ----",val1);
// console.log("forEach ---- ",val2);


//! how to handle promises  

// let p1 = new Promise((res,rej)=>{
//     if(10>42){
//         res("hii");
//     }
//     else{
//         rej("byee");
//     }
// })

// // console.log(p1);

// p1.then(()=>{
//     console.log("user created");

// })
// p1.catch((e)=>{
//     console.log("something went wrong ",e);
// })


//!async and await

function getData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Hii")
        },3000)
    })
}

async function displayData(){
    try{
   let data = await getData();
    console.log(data);
    }
    
    catch(err){
        console.log(err);
    }
}

displayData();