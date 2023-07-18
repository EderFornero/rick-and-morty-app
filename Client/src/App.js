import { useState, useEffect } from "react";
//css
import "./App.css";
//components
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Error from "./components/Error";
import Form from "./components/Form";
//axios
import axios from "axios";
//router
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const login = async (userData) => {
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      alert("Email or Password incorrect: " + error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  const onSearch = async (id) => {
    const { data } = await axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    );

    try {
      if (data.name) {
        let exist = characters.find((char) => char.id === data.id);
        if (exist) {
          alert("This character already exist");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  function addRandomCharacter() {
    const randomId = Math.floor(Math.random() * 827);
    onSearch(randomId);
  }

  const pathLocation = location.pathname !== "/";

  return (
    <div className="background">
      {pathLocation && (
        <div className="App">
          <Nav onSearch={onSearch} onAddRandom={addRandomCharacter} />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
