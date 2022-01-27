import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from "react";
import Modals from './Modals';
import abrirImg from './abrir.png';
import cerrarImg from './cerrar.png';



function App() {
    const [pokemon, setPokemon] = useState({});
    const [counter,setCounter]=useState(0);

    const fetchPokemon = (id)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response)=> response.json())
        .then((data)=>setPokemon(data));
        setCounter(id);
    };
//funsion generar numero aleatorio para id
    const getRandomInt = (min = 1, max = 600)=>{
        return Math.floor(Math.random() * (max - min) + min);
    };
    //fin funsion
//funsion siguiente
    const getNext = ()=>{
        if(counter>600){
          fetchPokemon(1);
          setCounter(1);
        }else{
          setCounter((counter) => counter +1);
          fetchPokemon(counter+1);
        }
      };
      //fin funsion
//funcion regresar
      const getBack = ()=>{
        if(counter<2){
         fetchPokemon(600);
         setCounter(600);
        }else{
         setCounter((counter) => counter -1);
         fetchPokemon(counter-1);
        }
    };
    //fin funsion
    useEffect(()=>{
    console.log({pokemon});
    }, [pokemon,counter]);

    return ( 
    <div className = "App" >
          
         <header className = "App-header">
         
        <div className='flex-container'>
        <img src =  { pokemon?.sprites?.front_default??cerrarImg } className = "poke-image" alt = "logo"/>
        <img src = { pokemon?.sprites?.back_default??abrirImg } className = "poke-image" alt = "logo"/>
        </div>
        <p>
            Pokemon id: {pokemon.id??"NO POKEMON SELECTED "}<br/>
            Nombre del pokemon: {pokemon.name ?? "NO POKEMON SELECTED"}</p>
    
        <div className='flex-container'>
        <button className='button' onClick={getBack}>Back</button>
        <button className='button' onClick={() => fetchPokemon(getRandomInt())}>Random</button>
        <button className='button' onClick={getNext}>Next</button>
        {counter>0 ?  <Modals poke={pokemon}/>:<h1></h1>}
        </div>
        
        
      
        
        <p></p>
        <p></p> 

       </header> 
    </div>
    );
}

export default App;