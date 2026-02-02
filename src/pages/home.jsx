import { useState, useEffect } from 'react'
import PokemonCardComponent from '../components/pokemonCardComponent/pokemonCardComponent';
import { getPokemons } from "../services/pokeApiSerive"
import { Row } from 'react-bootstrap';

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        getPokemons().then((response) => {
            setPokemons(response);
        });
    }, []);

    const indexOfLastPokemon = currentPage * itemsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const totalPages = Math.ceil(pokemons.length / itemsPerPage);

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <>
            <Row>
                {currentPokemons.map((pokemon, key) => (
                    <PokemonCardComponent
                        key={key}
                        name={pokemon.name}
                        image={pokemon.image}
                        hp={pokemon.hp}
                        order={pokemon.order}
                        abilities={pokemon.abilities}
                        types={pokemon.types}
                    />
                ))}
            </Row>

            <div className='pagination-container'>
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-btn"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>

                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`pagination-btn ${page === currentPage ? "active" : ""}`}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </>
    );
}

export default Home;
