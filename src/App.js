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
      id: 'todo1',title:'watch'
    },
    {
    id: 'todo2',title:'learn'

    },    {
      id: 'todo3',title:'play'
  
      }
  ])
  const handleEventClick =(event)=>{
    if(!adress)
    {
      alert("")
      return;
    }
//hook not merge state?
let newTodo ={id: 'abc', title:adress}
setTodos([...todos,newTodo])
setAdress('')
  }

  const handleOnChangeIput =(event)=>{
    setAdress(event.target.value)


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
        myData ={todos}
        title={'All to do'}
        />
         <input type="text " value ={adress} onChange={(event)=> handleOnChangeIput(event)} ></input> 
       <button type ="button" onClick={(event)=>{handleEventClick(event)}}>  click me</button>
      </header>
    </div>
  );
}

export default App;
