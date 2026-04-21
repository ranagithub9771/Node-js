import express from "express";
import fs from "node:fs";
import mongodb from "mongodb";

async function connectDb() {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  let database = client.db("task01");
  let collection = database.createCollection("Users");
  return collection;
}


const app = express();
//middleware

app.use(express.urlencoded({ extended: true }));
//passes form data

app.get("/", (req, res) => {
  let src = fs.createReadStream("./pages/index.html", "utf-8");
  src.pipe(res);
});

app.post("/submit", async (req, res) => {
  try {
    //   console.log(req.body);
    let { username, email, password } = req.body;
    let collection = await connectDb();
    collection.insertOne({ username, email, password });
    res.json({ message: "user created " });
  } catch (err) {
    console.log(err);
    res.json({ message: "unable to create user " });
  }
});

app.get("/all", async(req,res)=>{
    try{
     let collection = await connectDb();
     let users = await collection.find({}).toArray();
     res.json({data : users});
    }
    catch(err){
     console.log(err);
    res.json({ message: "unable to get all user " });
    }
})

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server is running on 9000");
});
