import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Covid from './component/covid';
import LoginFormPopup from './component/LoginFormPopup'; 
import LoginHook from "./component/LoginHook";
import LogoutHook from "./component/LogoutHook";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [showLoginPopup, setShowLoginPopup] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // }

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        {/* <div className="login-logout">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => setShowLoginPopup(true)}>Login</button>
          )}
        </div> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Covid Tracking</h2>
        <Covid />
        {/* {!isLoggedIn && showLoginPopup && (
          <LoginFormPopup
            onClose={() => setShowLoginPopup(false)}
            onLogin={handleLogin}
          />
        )} */}
      <h2>The Hooks way</h2>
      <LoginHook />
      <LogoutHook />
      <br />


      </header>
    </div>
  );
}

export default App;
