import React from "react";
import "../App.css";
//components
import SearchBar from "./SearchBar";
import styled from "styled-components";
//router
import { Link } from "react-router-dom";

function Nav({ onSearch, onAddRandom }) {
  return (
    <Div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchBar onSearch={onSearch} />
        <Button onClick={onAddRandom}>Random</Button>
      </div>
      <div>
        <Link to="/home">
          <Button>Home</Button>
        </Link>
        <Link to="/about">
          <Button>About</Button>
        </Link>
        <Link to="/favorites">
          <Button>Favorites</Button>
        </Link>
      </div>
    </Div>
  );
}

export default Nav;

const Div = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-left: 10px;
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
  &:focus {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }
`;
