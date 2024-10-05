import { useState } from "react";

 export function Createtodo(){

   const [title,settitle]=useState("");
   const [desc,setdesc]=useState("");
    return <div>
       <input id="title" style={{
         padding:20,
         fontSize:20,
         width:200,
         height:50,
         backgroundColor: '#f0f0f0',
         margin:20


       }} type="text" placeholder="title" onChange={function(e){const value =e.target.value;settitle(value)}}/>
       <input style={{
         padding:20,
         fontSize:20,
         width:200,
         height:50,
         backgroundColor: '#f0f0f0',
         margin:20
         
       }} type="text" id="desc" placeholder="description" onChange={function(e){const value =e.target.value;settitle(value)}}/>
       <br />
       <button style={{
          padding:20,
          fontSize:20,
          width:200,
          height:50,
          backgroundColor: '#f0f0f0',
          margin:20
       }}
       onClick={()=>{
        fetch('http://localhost:3000/todo',{
          method:'POST',
          body:JSON.stringify({
            title:title,
            description:desc
  
          }),
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then(async function (res) {

          alert('todo_added')
        })
       }}>ADD</button>
    </div>
}
