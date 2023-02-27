import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

// const Logo =()=> {
//   const appName = "CYF's Pokedex";
//   return(
//   <header>
//     <h1>Welcome to the {appName}</h1>
//     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokemon"></img>
//   </header>
//   );
// };

// const BestPokemon = ()=>{
//   const abilities = ["Anticipation", "Adaptability", "Run-Away"];
//   return (
//     <div>
//       <p>My Favorite Pokemon is Squirtle</p>
//       <ul>
//         {abilities.map((ability)=>(
//           <li>{ability}</li>
//         )
//         )}
//       </ul>
//     </div>

//   );
// };

// const CaughtPokemon = ()=>{
//   const date = new Date().toLocaleDateString();
//   return (
//     <p>Caught 0 Pokemon on {date}</p>
//   );
// };

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
function App () {
  return (
<div>
 <Logo appName="Pokedex" />
 <BestPokemon pokemonAbility ={abilities} />
 <CaughtPokemon pokemonDate = {date}/>
</div>
  );
}

export default App;
