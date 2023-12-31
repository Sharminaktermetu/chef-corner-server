const express = require("express");
const cors = require('cors')

const app =express();
const port =process.env.port||5000
app.use(cors())

const data= require('./data/data.json')

app.get("/",(req,res)=>{
   res.send("Server is running")
});
app.get("/data",(req,res)=>{
   res.send(data)
});


app.get('/data/:id',(req,res)=>{
      const id =req.params.id;
      console.log(id);
      const selectedChef =data.find(n=>n.id==id)
      res.send(selectedChef)
});

app.listen(port,()=>{
    console.log(`Api is running ${port}`);
})