import React from "react";
import "./styles/styles.css";
import Header from "./compontents/Header";
import Footer from "./compontents/Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/router";
import { PokemonProvider } from "./providers/Pokemon/PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <div className="app-wrapper">
        <div className="content">
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </div>
    </PokemonProvider>
  );
}

export default App;
