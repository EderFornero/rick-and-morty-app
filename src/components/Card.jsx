import "../App.css";
import styled from "styled-components";
import DeleteSvg from "./Svg/DeleteSvg.jsx";
//router
import { Link } from "react-router-dom";

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
      <div className="card__content">
        <div className="divDelete">
          <button
            style={{ border: "none", background: "none" }}
            className="deleteButton"
            onClick={() => onClose(id)}
          >
            <DeleteSvg />
          </button>
        </div>
        <Link to={`/detail/${id}`}>
          <Name>{name}</Name>
        </Link>
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
        <div className="card-image">
          <img src={image} alt="Char" className="inside-image"/>
        </div>
      </div>
    </Div>
  );
}

//styles

const Div = styled.div`
  width: 400px;
  min-height: 300px;
  margin: 15px;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
`;

const Name = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #dc1b1b;
  text-decoration: underline;
`;

const Desc = styled.h2`
  color: #fff;
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
