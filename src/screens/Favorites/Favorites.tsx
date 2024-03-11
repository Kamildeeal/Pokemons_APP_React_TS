import React, { useEffect, useState } from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import { Screen } from "../../navigation/screens";
import { useFavorites } from "./useFavorites";

const Favourite = () => {
  const {
    pokemon,
    isFavoritesEmpty,
    favorites,
    data,
    onRemove,
    getPokemonType,
  } = useFavorites();

  return (
    <div className="favoritesPage">
      <h1>Favourite Pokemons</h1>
      <Link className="goBackLink" to={Screen.Root}>
        ⬅️ Go to Pokemon List
      </Link>
      {isFavoritesEmpty ? (
        <p>No favourite pokemons added yet.</p>
      ) : (
        pokemon.map((pokemon) => (
          <div
            key={pokemon.id}
            className="displayedPokemon"
            style={{
              backgroundColor: getPokemonType(pokemon.types[0].type.name),
            }}
          >
            <div className="nameImg">
              <p>{pokemon.name}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="nameImg2">
              <h3>Types:</h3>
              <ul>
                {pokemon.types.map((type: any, index: number) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
            </div>
            <div className="nameImg2">
              <h3>Abilites:</h3>
              <ul>
                {pokemon.abilities.map((ability: any, index: number) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className="nameImg2">
              <h3>Stats:</h3>
              <ul>
                {pokemon.stats.map((stat: any, index: number) => (
                  <li key={index}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <div onClick={() => onRemove(pokemon.name)} className="cross">
              ❌
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Favourite;