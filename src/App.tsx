import React from "react";
import "./styles/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/router";
import { PokemonProvider } from "./providers/Pokemon/PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  );
}

export default App;
