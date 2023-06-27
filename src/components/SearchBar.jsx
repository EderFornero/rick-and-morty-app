import { useState } from "react";
import styled from "styled-components";

export default function SearchBar({ onSearch }) {

  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value)
  }

  return (
    <Div>
      <Input onChange={handleChange} value={id} type="search" placeholder="Search here..." />
      <Button onClick={() => {onSearch(id); setId('')}}>Search</Button>
    </Div>
  );
}

const Div = styled.div`
  margin: 15px;
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: start;
`;

const Input = styled.input`
  margin-left: 10px;
  border-radius: 10px;
  padding: 10px;
  border: none;
  font-size: 15px;
  height: auto;
  margin: 0;
  outline: 0;
  background-color: #ffe4c4;
  color: #64696d;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
`;

const Button = styled.button`
  width: 100px;
  margin-left: 15px;
  border-radius: 10px;
  border: none;
  background: #ffe4c4;
  color: #000;

  &:hover {
    color: #fff;
    background: #556b2f;
    transition: all ease 0.3s;
  }
`;
