  // import React, { useState } from "react";
  // import '../LoginFormPopup.css'

  // function LoginFormPopup({ onClose, onLogin }) {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleLogin = () => {
      
  //     if (username === "user" && password === "password") {
  //       onLogin();
  //       onClose(); 
  //     } else {
  //       alert("email hoặc mật khẩu không đúng");
  //     }
  //   };

  //   return (
  //     <div className="login-popup">
  //       <div className="login-form">
  //         <h2>Đăng nhập</h2>
    
  //         <input
  //           type="text"
  //           placeholder="email"
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //         />

  //         <input
  //           type="password"
  //           value={password}
  //           placeholder="Mật khẩu"
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //         <button onClick={handleLogin}>Đăng nhập</button>
  //         <button onClick={onClose}>Đóng</button>
  //       </div>
  //     </div>
  //   );
  // }

  // export default LoginFormPopup;
