const express=require("express");
const cors=require("cors");



const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const user=[
    {
      username:"user",
      password:"1234"
    },
    
  ]

app.get("/api/data",(req,res)=>{

    res.json(arr);
 

 //  --->Db operatio



})


/// route for login

app.post("/api/login",(req,res)=>{

    console.log(req.body);

    res.json({status:true});

})


app.post("/api/addRecord",(req,res)=>{

  arr.push(req.body);

  res.json({msg:"Success"});



})


app.listen(8080,()=>{
    console.log("Server Running at port 8080")
})