import React from "react";

const BestPokemon = (props) => {
//   const abilities = ["Anticipation", "Adaptability", "Run-Away"];
//console.log(props);
  return (
    <div>
      <p>My Favorite Pokemon is Squirtle</p>
      <ul>
        {props.pokemonAbility.map((ability) => (
          <li>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;