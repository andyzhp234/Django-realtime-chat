import React from "react";
import bgImg from "../../assets/bg-login-1.JPG";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/chat");
  }

  function handleDemoLogin(e) {
    e.preventDefault();
  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleLogin}>
        <h1 className="fsLarge fw700">Welcome to WeConnect</h1>
        <h2>Sign In your Account</h2>
        <div className="section--full-width">
          <h1 className="fw700">Email</h1>
          <input className="input mediumInput" placeholder="Enter your email" />
        </div>
        <div className="section--full-width">
          <h1 className="fw700">Password</h1>
          <input
            className="input mediumInput"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="btn mediumBtn btn--primary" type="submit">
          Sign In
        </button>
        <button
          className="btn mediumBtn btn--primary"
          onClick={handleDemoLogin}
          type="button"
        >
          Demo User
        </button>
        <div className="section--full-width">
          Not registered yet?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={(e) => navigate(`/signup`)}
          >
            Create an Account
          </span>
        </div>
      </form>
      <div className="login__bgImg-container">
        <img src={bgImg} alt="backgroundIMG" />
      </div>
    </div>
  );
}
