import "../App.css";
import styled from "styled-components";
import DeleteSvg from "./Svg/DeleteSvg.jsx";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <Div>
      <button
        style={{ border: "none", background: "none" }}
        className="deleteButton"
        onClick={() => onClose(id)}
      >
        <DeleteSvg />
      </button>
      <Name>{name}</Name>
      <Desc>
        <p>Status:</p> <Paragraph>{status}</Paragraph>
      </Desc>
      <Desc>
        <p>Species:</p> <Paragraph>{species}</Paragraph>
      </Desc>
      <Desc>
        <p>Gender:</p> <Paragraph>{gender}</Paragraph>
      </Desc>
      <Desc>
        <p>Origin:</p> <Paragraph>{origin}</Paragraph>
      </Desc>
      <img src={image} alt="Char" />
    </Div>
  );
}

//styles

const Div = styled.div`
  background-color: #ffe4c4;
  width: 400px;
  margin: 15px;
  border-radius: 15px;
  -webkit-box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.75);
`;

const Name = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #a52a2a;
  text-decoration: underline;
`;

const Desc = styled.h2`
  font-size: 15px;
  display: flex;
  justify-content: center;
  p {
    padding: 0;
    margin: 0;
    margin-left: 5px;
  }
`;

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  margin-left: 5px;
  color: #556b2f;
`;
