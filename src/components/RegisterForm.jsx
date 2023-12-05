import React, { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  return (
    <div className="register-form-container">
      <form>
        <div class="mb-3">
          <label for="loginInput" class="form-label">Podaj login</label>
          <input type="email" class="form-control" id="loginInput" onChange={(e) => setUsername(e.target.value)}/>
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
    </div>
  )
  
}

export default RegisterForm