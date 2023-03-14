import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../api/fetchPokemons';
import classes from './pokemonInfo.module.css'
const PokemonInfo = () => {
  const [ pokemon, setPokemon ] = useState();
  const { id } = useParams();

  useEffect(() => {
    getPokemon(id).then((data => setPokemon(data)));
  }, [ id ])
  console.log(pokemon);
  return (
      <div className={classes.pokeBlock}>
          <div className={classes.bgc}>
              <img src={pokemon?.sprites.other.dream_world.front_default}  alt='fd' />
          </div>
          <div className={classes.pokedex}>
              <span>{pokemon?.name}</span>
          </div>
          <div className={classes.pokeTypes}>
              <h4>{pokemon?.types[0]?.type?.name}</h4>
              <h4> {pokemon?.types[1]?.type?.name}</h4>
          </div>
          <div className={classes.pokeBlocks}>
              <div className={classes.pokeWeight}>
                  <h5>{pokemon?.weight}-KG</h5>
                         Weight
              </div>
              <div className={classes.pokeHeight}>
                  <h5> {pokemon?.height}-M </h5>
                           Height
              </div>
          </div>

          <div className={classes.pokeStats}>
                  Base  Stats
              <h6>{pokemon?.stats[0]?.stat?.name} -  {pokemon?.stats[0]?.base_stat}</h6>
              <h6>{pokemon?.stats[1]?.stat?.name} -  {pokemon?.stats[1]?.base_stat}</h6>
              <h6>{pokemon?.stats[2]?.stat?.name} -  {pokemon?.stats[2]?.base_stat}</h6>
              <h6>{pokemon?.stats[3]?.stat?.name} -  {pokemon?.stats[3]?.base_stat}</h6>
              <h6>{pokemon?.stats[4]?.stat?.name} -  {pokemon?.stats[4]?.base_stat}</h6>
              <h6>{pokemon?.stats[5]?.stat?.name} -  {pokemon?.stats[5]?.base_stat}</h6>
          </div>

      </div>

  )
}

export default PokemonInfo


/// rafce;