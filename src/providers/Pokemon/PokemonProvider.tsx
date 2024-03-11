import React, { PropsWithChildren, useEffect, useState, useRef } from "react";
import { PokemonContext } from "./PokemonContext";

interface FetchedData {
  respone: object[];
  url: string;
}

export const PokemonProvider = ({ children }: PropsWithChildren) => {
  const [pokemonData, setPokemonData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon/?limit=100"
  );
  const abortControllerRef = useRef<AbortController | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (pokemonName: string) => {
    if (favorites.includes(pokemonName)) {
      setFavorites(favorites.filter((name) => name !== pokemonName));
    } else {
      setFavorites([...favorites, pokemonName]);
    }
  };

  const removeFromFavorites = (pokemonName: string) => {
    setFavorites(favorites.filter((name) => name !== pokemonName));
  };

  useEffect(() => {
    let isMounted = true;

    const fetchPokemon = async () => {
      if (!isMounted) return;
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setFetching(true);
      setLoading(true);

      try {
        const request = await fetch(url, {
          signal: abortControllerRef.current?.signal,
        });
        const response = await request.json();
        getEachPokemon(response.results);
      } catch {
        console.error("Error! Can not get the pokemon data!");
      } finally {
        setLoading(false);
        setFetching(false);
      }
    };
    const getEachPokemon = async (response: FetchedData[]) => {
      for (const item of response) {
        try {
          const request = await fetch(item.url);
          const responseData = await request.json();
          setPokemonData((prevData: object[]) => {
            const newData = [...prevData, responseData];
            newData.sort((a, b) => (a.id > b.id ? 1 : -1));
            return newData;
          });
        } catch (error) {
          console.error("error with fetching specific pokemon data!", error);
        }
      }
    };
    fetchPokemon();
    return () => {
      isMounted = false;
      abortControllerRef.current?.abort();
    };
  }, [url]);

  return (
    <PokemonContext.Provider
      value={{
        data: pokemonData,
        loading,
        favorites,
        toggleFavorite,
        removeFromFavorites,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};