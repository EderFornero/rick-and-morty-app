import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//axios
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return(
    <div>
        {
        character && 
        <div style={{position: 'relative'}}>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
           
        </div>
        }
    </div>
    )
}

export default Detail;
