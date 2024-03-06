import toast from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import '../styles/styles.css'
import PokemonList from "./PokemonList";
import { ReactDOM } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import NotFound from './NotFound';
import Favourite from './Favourites';
// import { toast } from 'react-toastify';

const Main:React.FC = () => {
    const [pokemonData, setPokemonData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>();
    const [url, setUrl] = useState<any>("https://pokeapi.co/api/v2/pokemon/?limit=100");
    const [inputText, setInputText] = useState<string>("");
    const [favorites, setFavorites] = useState<any[]>([]);


    const abortControllerRef = useRef<AbortController | null>(null);
    const [fetching, setFetching] = useState<boolean>(false);

    const toggleFavorite = (pokemonName: string) => {
        if (favorites.includes(pokemonName)) {
            setFavorites(favorites.filter(name => name !== pokemonName));
            // alert(`Pokemon ${pokemonName} removed from favorites!`);
            toast.error(`Pokemon ${pokemonName} removed from favorites!`, {
                position: "bottom-right",
                className: 'foo-bar'
              });
        } else {
            setFavorites([...favorites, pokemonName]);
            // alert(`Pokemon ${pokemonName} added to favorites!`);
            toast.success(`Pokemon ${pokemonName} added to favorites!`, {
                position: "bottom-right",
                className: 'foo-bar'
              });
        }
    };
    
    const removeFromFavorites = (pokemonName: string) => {
        setFavorites(favorites.filter(name => name !== pokemonName));
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <PokemonList pokemon={pokemonData} loading={loading} toggleFavorite={toggleFavorite} favorites={favorites}/>,
            errorElement: <NotFound />     
        },
        {
            path: '/details',
            element: <PokemonDetails pokemon={pokemonData} loading={loading}/>
        },
        {
            path: '/details/:pokemonName',
            element: <PokemonDetails pokemon={pokemonData} loading={loading} />
        },
        {
            path: '/favourites',
            element: <Favourite favourites={favorites} pokemon={pokemonData.filter((poke: { name: any; }) => favorites.includes(poke.name))} remove={removeFromFavorites}/>
        }
    ]);

    useEffect(()=> {

        let isMounted = true;

        const fetchPokemon = async () => {

            if (!isMounted) return
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();
            setFetching(true); 
            setLoading(true);

            try {
            const request = await fetch(url , {
                signal: abortControllerRef.current?.signal,
              });
              const response = await request.json();
              getEachPokemon(response.results) 
    
            } catch {
                console.error('Error! Can not get the pokemon data!')
            } finally {
                setLoading(false);
                setFetching(false);
            } 
        }
        const getEachPokemon = async (response: any) => {
            for (const item of response) {
                try {
                    const request = await fetch(item.url);
                    const responseData = await request.json();
                    setPokemonData((prevData: any[]) => {
                        const newData = [...prevData, responseData];
                        newData.sort((a: any, b: any) => a.id > b.id ? 1 : -1);
                        return newData;
                    }); 
                } catch (error) {
                    console.error("error with fetching specific pokemon data!", error);   
                }
            }
        }
        fetchPokemon();
        
        
        return () => {
            isMounted = false;   
            abortControllerRef.current?.abort();
        }
    },[url])

 

    return (
        <div>     
        <RouterProvider router={router}/>
        {/* <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
        /> */}

       
         {/* <PokemonList pokemon={pokemonData} loading={loading} /> */}
        
   
        </div>
    )
}


export default Main; 