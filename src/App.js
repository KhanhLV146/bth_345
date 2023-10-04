import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import{useState } from 'react';

function App() {
 
  let[name, setName ]=useState('Vuong Khanh');
  const[adress, setAdress]= useState('Ha Noi')
  const handleEventClick =(event)=>{
  setName(adress)
console.log("hello", name);
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
         <input type="text " value ={adress} onChange={(event)=> handleOnChangeIput(event)} ></input> 
       <button type ="button" onClick={(event)=>{handleEventClick(event)}}>  click me</button>
      </header>
    </div>
  );
}

export default App;
