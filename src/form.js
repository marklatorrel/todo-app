import React, { useState } from "react";


// user input - includes validation
function TodoForm({addTodo}){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  
  const submitValue = () => {
    const value = {
        'title' : title,
        'content' : content,
        'date' : date,
    }
    if(!value) return;
    addTodo(value);
    console.log(value);
}

  return (
    <div className="todo" >
    <input className="input" type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
    <input className="input"type="text" placeholder="Content" onChange={e => setContent(e.target.value)} />
    <input className="input"type="text" placeholder="Date" onChange={e => setDate(e.target.value)} />
    <button onClick={submitValue}>Submit</button>
    </div>
    
  )
}

export default TodoForm;