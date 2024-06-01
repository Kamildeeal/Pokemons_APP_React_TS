import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens";
import PokemonList from "../screens/PokemonList/PokemonList";
import NotFound from "../compontents/NotFound";
import PokemonDetails from "../screens/PokemonDetails/PokemonDetails";
import Favorites from "../screens/Favorites/Favorites";
import Blog from "../screens/Blog/Blog";
import Contact from "../screens/Contact/Contact";
import News from "../screens/News/News";
import Pokedex from "../screens/Pokedex/Pokedex";

export const router = createBrowserRouter([
  {
    path: Screen.Root,
    element: <PokemonList />,
    errorElement: <NotFound />,
  },
  {
    path: `${Screen.Details}/:pokemonName`,
    element: <PokemonDetails />,
  },
  {
    path: Screen.Favorites,
    element: <Favorites />,
  },
  {
    path: Screen.Blog,
    element: <Blog />,
  },
  {
    path: Screen.Pokedex,
    element: <Pokedex/>
  },
  {
    path: Screen.Contact,
    element: <Contact />
  },
  {
    path: Screen.News,
    element: <News />
  },
]);
