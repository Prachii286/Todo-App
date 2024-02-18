import React, { useState } from 'react'

export const AddTodo = (props) => {

    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");

    const submit = (e)=>{
       e.preventDefault();
       if(!title || !desc){
        alert("title or description cannot be blank");
       }
       else{
        props.addTodo(title,desc);
        setTitle("")
        setDesc("");
       }
    }

  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" class="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="edesc" class="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc"/>
  </div>
  
  <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}
