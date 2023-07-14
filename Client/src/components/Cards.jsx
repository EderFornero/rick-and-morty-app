import Card from "./Card";
import '../App.css'

export default function Cards({ characters, onClose }) {
  return (
    <div className="cards-div">
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={onClose}
        />
      ))}
      <div style={{width: '32.3%'}}></div>
    </div>
  );
}

