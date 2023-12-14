import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/auth/token',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username: username,
        password: password,
      }
    }).then((response) => {
      localStorage.setItem('token', response.data)
      navigate('/')
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className="login-register-form-container">
      <form>
        <div className="mb-3">
          <label htmlFor="loginInput" className="form-label">
            Nazwa użytkownika
          </label>
          <input type="text" className="form-control" id="loginInput" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Hasło
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default LoginForm