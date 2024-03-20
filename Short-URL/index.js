const express=require("express");
const path=require("path")
const URLrouter = require("./routes/url");
const { connectMongoDb}=require("./connectiion")
const URL=require("./model/user");
const staticrouter=require("./routes/staticRouter")
const app=express();
const PORT=8001;


connectMongoDb("mongodb://127.0.0.1:27017/URL-SHORTNER").then(()=>{
    console.log("MongoDB connected");
})


app.use(express.json());   //middleware

app.use("/url",URLrouter);  //Route
app.use("/",staticRouter);

app.get("/:shortId",async (req,res)=>{
     const shortId=req.params.shortId
     const entry=await URL.findOneAndUpdate({shortId},{
        $push:{
            visitHistory:{timeStamp:Date.now()}
        }
     })
     res.redirect(entry.redirectURL)
})

app.listen(PORT,()=>{
    console.log(`Server start at ${PORT}`);
});