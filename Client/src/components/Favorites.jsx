import React, {useState} from "react";
import "../App.css";
//redux
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
//components
import FavCard from "./FavCard";

function Favorites({ myFavorites }) {

  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(true);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
      <div>
        <select name="" id="" onChange={handleOrder}>
          <option value="A">A</option>
          <option value="D">D</option>
        </select>
        <select name="" id="" onChange={handleFilter}>
          <option value="Male">MALE</option>
          <option value="Female">FEMALE</option>
          <option value="Genderless">GENDERLESS</option>
          <option value="unknow">UNKNOW</option>
          <option value="all">ALL</option>
        </select>
      </div>
      <div className="cards-div">
        {myFavorites &&
          myFavorites.map((fav) => {
            return (
              <FavCard
                key={fav.id}
                id={fav.id}
                name={fav.name}
                status={fav.status}
                gender={fav.gender}
                species={fav.species}
                origin={fav.origin.name}
                image={fav.image}
              />
            );
          })}
        <div style={{ width: "32.3%" }}></div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
