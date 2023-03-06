import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
  }

  return (
    <div className="signup">
      <form className="signup__form" onSubmit={handleSignup}>
        <h1 className="fw700 fsMedium taCenter">SIGN UP</h1>
        <div>
          <h1>Email</h1>
          <input
            className="input mediumInput"
            placeholder="Enter your email"
            type="email"
            required
          />
        </div>
        <div>
          <h1>Password</h1>
          <input
            className="input mediumInput"
            placeholder="Enter your password"
            type="password"
            required
          />
        </div>
        <button className="btn mediumBtn btn--primary" type="submit">
          Create Account
        </button>
        <div>
          Already a User?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={(e) => navigate(`/`)}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
}
