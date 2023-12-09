import React, {useState} from "react";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-register-form-container">
      <form>
        <div className="mb-3">
          <label htmlFor="loginInput" className="form-label">
            Podaj login
          </label>
          <input type="email" className="form-control" id="loginInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Hasło
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default LoginForm