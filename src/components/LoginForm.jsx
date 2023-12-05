import React, {useState} from "react";

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <div className="login-form-container">
      <form>
        <div class="mb-3">
          <label for="loginInput" class="form-label">Podaj login</label>
          <input type="email" class="form-control" id="loginInput" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Hasło</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">Zaloguj się</button>
      </form>
    </div>
  )
  
}

export default LoginForm