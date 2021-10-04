const express=require("express");
const cors=require("cors");



const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const user={
      email:"user",
      password:"1234"
    }
    
  

app.get("/api/data",(req,res)=>{

    res.json(user);
 

 //  --->Db operatio



})


/// route for login

app.post("/api/login",(req,res)=>{

    console.log(req.body);

    if(req.body.email===user.email && req.body.password===user.password)
  {
    res.json({msg:"Success",login :true});

  }
  else{
    res.json({msg:"Failed",login :false});

  }

})




const port =process.env.PORT || 8080
app.listen(port,()=>{
    console.log("Server Running at port 8080")
})