import React from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import { Screen } from "../../navigation/screens";

const Pokedex = () => {

  return (
    <div className="container">
    <div className="subPageContainer">

      <div className="pokedex-container">
        <div className="pokedex-header">
            <div className="light blue"></div>
            <div className="light yellow"></div>
            <div className="light green"></div>
        </div>
        <div className="pokedex-screen">
            <div className="pokedex-display">
                
                <h1>Pokédex</h1>
                <p>Sorry, we are currently bulding this page!</p>
            </div>
        </div>
        <div className="pokedex-buttons">
            <button className="button"></button>
            <button className="button"></button>
            <button className="button"></button>
        </div>
    </div>
    </div>
  </div>
  );
};

export default Pokedex;
