import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import validation from "./Validations";

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    const validate = validation({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(validate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className="div-form-container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-email">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Write: 'test@gmail.com'"
              type="text"
              id="email"
              name="email"
              required=""
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "white" }}>{errors.email}</p>}
          </div>
          <div className="form-email">
            <label htmlFor="email">Password</label>
            <input
              placeholder="Write: '123ada'"
              type="password"
              id="password"
              name="password"
              required=""
              value={userData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "white" }}>{errors.password}</p>
            )}
          </div>

          <Button onSubmit={handleSubmit} type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;

const Button = styled.button`
  width: 50%;
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: 0.25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;

  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  &:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;
