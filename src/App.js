import './App.css';
import './styles.css';
import Todo from './todo.js';
import TodoForm from './form.js';
import React, { useState } from "react";

function App() {

  const [todos, setTodos] = useState([
    {
      title: 'learn react',
      content: 'Today Im going to learn react',
      date: '06-01-2021',
      isCompleted: false,
    },
    {
      title: 'Meet friend for lunch',
      content:'I will meet Dan at 1 pm',
      date: '06-01-2021',
      isCompleted: false,
    },
    {
      title: 'Build the todo app',
      content: 'Do the homework so you can pass the MITxPro course',
      date: '06-01-2021',
      isCompleted: false,
    }        
  ]);

  const addTodo = event => {
    console.log(event.title)
    const newTodos = [...todos, {title: event.title, content:event.content, date:event.date, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (


<div >

<div className="app" >
      {todos.map((todo, i) => (
        <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
      ))}
      <TodoForm addTodo={addTodo} />
    </div>

    </div>
  );
}

export default App;
