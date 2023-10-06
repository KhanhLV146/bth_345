import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import{useState } from 'react';
import Todo from './component/todo';
function App() {
 //state
  let[name, setName ]=useState('Vuong Khanh');
  const[adress, setAdress]= useState('');
  const[todos,setTodos]= useState([
    {
      id: 'todo1',title:'watch',type:'nice'
    },
    {
    id: 'todo2',title:'learn',type:'nice'

    },    {
      id: 'todo3',title:'play',type:'bad'
  
      }
  ])
  const handleEventClick =(event)=>{
    if(!adress)
    {
      alert("ds")
      return;
    }
//hook not merge state?
let newTodo ={id: Math.floor(Math.random()*1000+1), title:adress, type: 'vuong khanh'}
setTodos([...todos,newTodo])
setAdress('')
  }

  const handleOnChangeIput =(event)=>{
    setAdress(event.target.value)


  }
  const deleteDataTodos =(id)=>{ 
    let currentTodos =todos
    currentTodos =currentTodos.filter(item => item.id !==id)
    setTodos(currentTodos)
  }
  //re-reder

  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2> Hello {name}</h2>
        </p>
        <Todo
        todos ={todos}
        title={'All to do'}
        deleteDataTodos={deleteDataTodos}
        />
        <Todo
        todos ={todos.filter(item => item.type ==='nice')}
        title={'nice to do'}
        deleteDataTodos={deleteDataTodos}

        />
         <input type="text " value ={adress} onChange={(event)=> handleOnChangeIput(event)} ></input> 
       <button type ="button" onClick={(event)=>{handleEventClick(event)}}>  click me</button>
      </header>
    </div>
  );
}

export default App;
