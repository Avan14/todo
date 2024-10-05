const express = require('express');
const  {mySchema_markdone,mySchema_todo_creation} = require( "./types");
const  {tasks} = require( "./database");
const cors  =require('cors')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/todo",(req,res)=>{
    tasks.find()
    .then((todos) => {
      res.status(200).json({todos});
    })
})
// app.post("/todo", async (req,res)=>{
//    const  data= req.body;
//    try{
//      const todo_rec=mySchema_todo_creation.safeparse(data);
//      await tasks.create({
//         title:todo_rec.title,
//         description:todo_rec.description,
//         marked:false
//     })
//     res.status(200).json({msg:"added oyur todo"});
//    }catch{
//      res.status(411).json({msg:"you have sent some rubbish inputs"})
//    }
// })
app.post("/todo", async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        console.log("Request data:", data); 
        const todo_rec = mySchema_todo_creation.parse(data);
        console.log("Parsed data:", todo_rec); 
    
        await tasks.create({
            title: todo_rec.title,
            description: todo_rec.description,
            marked: false
        });
        res.status(200).json({ msg: "Added your to-do" });
    } catch (err) {

        res.status(411).json({ msg: "You have sent invalid inputs", error: err.message });
    }
    
});
app.put("/todo", async (req,res)=>{
    const data = req.body;
 
    
    try{
        const todo_id=mySchema_markdone.parse(data);

         await tasks.update({_id:todo_id,marked: true });
        res.status(200).json({msg:"marked todo done"});
    }
    catch{
        res.status(411).json({msg:"invalif id"})
    }
})

app.listen(port,()=>{
    console.log("listining to port 3000");
    
})