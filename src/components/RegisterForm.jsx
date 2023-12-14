import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [showPopover, setShowPopover] = useState(false);
  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault()
    if (repeatPassword === password) {
      event.preventDefault()
      axios({
        method: 'post',
        url: 'http://localhost:8080/api/user/register',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: username,
          password: password,
        }
      }).then((response) => {
        navigate('/signin')
      }).catch((error) =>{
        console.log(error)
      })
    } else {
      setShowPopover(true)
    }
  }

  return (
    <div className="login-register-form-container">
      <form onSubmit={handleRegister}>
        <div class="mb-3">
          <label for="loginInput" class="form-label">Podaj login</label>
          <input type="text" class="form-control" id="loginInput" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Hasło</label>
          <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Powtórz Hasło</label>
          <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setRepeatPassword(e.target.value)}/>
        </div>
        <button type="submit" class="btn btn-primary">Załóż konto</button>
      </form>
      {showPopover && (
        <div className="popover-container">
          <div className="popover-arrow"></div>
          <div className="popover-content">
            <p>Wpisane dane są niepoprawne</p>
          </div>
        </div>
      )}
    </div>
  )
  
}

export default RegisterForm