import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose}/>
    </div>
  );
}

export default App;
