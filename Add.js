import React from 'react'
import { useState } from 'react';

export default function Add({addtodo}) {

    const [title, settitle] = useState("" )
    const [desc, setdesc] = useState("")

  const  submit=(e)=>{
        e.preventDefault()
     console.log(title,desc)
     if(!title || !desc){
        alert("title And Description could not be empty")
     }
     addtodo(title,desc);
   settitle("");
   setdesc("");
    }
  return (
            
          <div className="add">
          <form  onSubmit={submit}>
            <div>
            <label htmlFor="title">Add your todo Title</label>
           <input type="text" id="title" value={title} onChange={(e)=>{settitle(e.target.value) }}/>
           </div>
           <div>
           <label htmlFor="desc">Add your Description</label>
           <input type="text" id ="desc" value={desc} onChange={(e)=>setdesc(e.target.value)}/>
           </div>
           <div>
              <button>ADD</button>
           </div>
        </form>
    </div>

  )
}
