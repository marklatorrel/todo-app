function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return (
  
  <div className="todo" onClick={handle}>
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{todo.title}</h5>
        <small className="text-muted">{todo.date}</small>
      </div>
      <p className="mb-1">{todo.content}</p>
    </a>
  </div>
  )

  
}

export default Todo;