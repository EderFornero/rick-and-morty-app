import React from "react";
import '../App.css'
//redux
import { connect } from "react-redux";
//components
import Card from "./Card";
import FavCard from "./FavCard";

function Favorites({myFavorites}) {
  return (
    <div className="cards-div">
    {
       myFavorites && myFavorites.map(fav => {
            return(
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
            )
        })
    }
    <div style={{width: '32.3%'}}></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
