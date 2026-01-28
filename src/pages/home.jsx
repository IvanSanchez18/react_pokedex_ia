import { useState, useEffect } from 'react'

import PokemonCardComponent from '../components/pokemonCardComponent/pokemonCardComponent';

import { getPokemons } from "../services/pokeApiSerive"
import { Row } from 'react-bootstrap';


function Home() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons().then((response) => {
            setPokemons(response);
        });
    }, []);


    return (
        <>
            <Row>
                {pokemons.map((pokemon, key) => (
                    <PokemonCardComponent key={key} name={pokemon.name} image={pokemon.image} hp={pokemon.hp} order={pokemon.order} abilities={pokemon.abilities} types={pokemon.types} />
                ))}
            </Row>
        </>
    )

}

export default Home