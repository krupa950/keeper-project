import React, { useState } from "react";

function CreateArea() {
  const [note,setNote]=useState({
    title="";
    content="";
  })

function handlechange(event){
  
}
  return (
    
    <div>
      <form>
        <input name="title" value={note.title}
        onChange={}
         placeholder="Title" />
        <textarea name="content" value={note.content}
        onChange={}
         placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
