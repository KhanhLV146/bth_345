const Todo =(props)=>{
  console.log(">>check prop: ", props)
   const todos = props.todos;
  return(
      <div className='todo-container'>
        <div className="title">
          {props.title}
        </div>
      {todos.map(todo => {
          console.log("check",todo)
        return(
          <li className='todo-child' key={todo.id}>{todo.title}</li>
        )
      })}
          <hr></hr>
    </div>

  )
}
export default Todo;    