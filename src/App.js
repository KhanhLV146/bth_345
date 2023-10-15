import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Covid from './component/covid';
function App() {
 //state
  let name ="Covid Tracking"

  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h2>  {name}</h2>
          <Covid/>

        
      </header>
    </div>
  );
}

export default App;
