import React, { useState } from "react";
import '../LoginFormPopup.css'

function LoginFormPopup({ onClose, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Thực hiện xác thực đăng nhập ở đây (ví dụ: kiểm tra với dữ liệu cứng)
    if (username === "user" && password === "password") {
      onLogin();
      onClose(); // Đóng popup sau khi đăng nhập thành công
    } else {
      alert("Tên người dùng hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="login-popup">
      <div className="login-form">
        <h2>Đăng nhập</h2>
  
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Đăng nhập</button>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
}

export default LoginFormPopup;
