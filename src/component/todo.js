const Todo =(props)=>{

   const {todos, title,deleteDataTodos} = props;
   const handleDelete=(id)=>{
    deleteDataTodos(id)
   }
  return(
      <div className='todo-container'>
        <div className="title">
          {title}
        </div>
      {todos.map(todo => {
          console.log("check",todo)
        return(
          <div key={todo.id}
          ><li className='todo-child' >{todo.title}
           &nbsp; &nbsp; <span onClick={()=> handleDelete(todo.id)}> X </span></li> </div>
          
        )
      })}
          <hr></hr>
    </div>

  )
}
export default Todo;    