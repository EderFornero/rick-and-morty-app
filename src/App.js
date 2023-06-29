import { useState } from "react";
//css
import "./App.css";
//components
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
//axios
import axios from "axios";
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";

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
    <div className="background">
    <Router>
      <div className="App">
        <Nav onSearch={onSearch} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
