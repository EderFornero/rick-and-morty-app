import React, { useState, useEffect } from "react";
import "../App.css";
//styled
import styled from "styled-components";
//useParams
import { useParams } from "react-router-dom";
//axios
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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

  return (
    <div>
      {character && (
        <div className="detail-div">
          <Div>
            <div>
              <Img src={character.image} alt="Character" />
            </div>
            <div>
              <Name>{character.name}</Name>
              <Desc>
                <p>Status:</p> <Paragraph>{character.status}</Paragraph>
              </Desc>
              <Desc>
                <p>Species:</p> <Paragraph>{character.species}</Paragraph>
              </Desc>
              <Desc>
                <p>Gender:</p> <Paragraph>{character.gender}</Paragraph>
              </Desc>
              <Desc>
                <p>Origin:</p> <Paragraph>{character.origin?.name}</Paragraph>
              </Desc>
            </div>
          </Div>
        </div>
      )}
    </div>
  );
}

export default Detail;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  min-height: 500px;
  margin: 15px;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background: rgb(34, 193, 195);
  background: radial-gradient(
    circle,
    rgba(34, 193, 195, 1) 0%,
    rgba(5, 6, 45, 1) 100%,
    rgba(253, 187, 45, 1) 100%
  );
  border-radius: 20px;
  -webkit-box-shadow: 21px 12px 6px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 21px 12px 6px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 21px 12px 6px -2px rgba(0, 0, 0, 0.75);
`;

const Name = styled.h1`
  text-align: center;
  font-size: 2.5em;
  color: #f5f5dc;
  border-bottom: black 2px outset;
  border-right: black 2px outset;
`;

const Desc = styled.h2`
  text-align: center;
  color: #dcdcdc;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  p {
    padding: 0;
    margin: 0;
    margin-left: 5px;
  }
`;

const Img = styled.img`
  -webkit-box-shadow: 21px 12px 6px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 21px 12px 6px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 21px 12px 6px -5px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  min-width: 350px;
  min-height: 350px;
`;

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  margin-left: 5px;
  color: #f5f5dc;
`;
