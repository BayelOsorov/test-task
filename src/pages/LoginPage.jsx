import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../styles/pages/LoginPage.css";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    let formIsValid = true;

    if (!email.trim().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Введите корректный email адрес!");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (
      !password.trim().match(/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d#$@!%&*?]{8,}$/)
    ) {
      formIsValid = false;
      setpasswordError(
        "Пароль должен содержать: минимум 8 символов и минимум одну заглавную букву!"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
      setTimeout(() => navigate("/"), 2000);
      setLoading(true);
    }
    return formIsValid;
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    handleValidation();
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Вход</h2>
        <form onSubmit={loginSubmit}>
          <div className="user-box">
            <input
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              placeholder=""
              name=""
            />
            <label>Email адрес</label>
            <small id="passworderror" className="text-danger form-text">
              {emailError}
            </small>
          </div>
          {loading ? <Spinner animation="border" variant="primary" /> : null}
          <div className="user-box password-input">
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder=""
              name=""
              type="password"
            />
            <label>Пароль</label>
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>
          </div>

          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
