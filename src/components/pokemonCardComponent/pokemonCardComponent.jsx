import "./pokemonCardComponent.css";
import { formatPokedexPosition } from "../../services/helperService";
import { Col } from "react-bootstrap";

const TYPE_COLORS = {
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0"
};

function PokemonCardComponent({ name, image, hp, order, abilities, types }) {

    const mainType = types[0];
    const color = TYPE_COLORS[mainType] || "#000";

    return (
        <Col lg={4}>
            <div className="pokemon-card-main" style={{ borderColor: color }} >
                <div className="pokemon-card-container" style={{ backgroundColor: color + "22" }} >

                    <div className="pokemon-card-header">
                        <h4>{name.toUpperCase()}</h4>

                        <div className="pokemon-card-header-stats">
                            <label className="life-stat">HP {hp}</label>
                            <label className="pokedex-position">
                                #{formatPokedexPosition(order)}
                            </label>
                        </div>
                    </div>

                    <div className="pokemon-card-image-container">
                        <img src={image} alt={name} />
                    </div>

                    <div className="pokemon-card-description">
                        <div>
                            <strong>Abilities</strong>
                        </div>

                        {abilities.map((ab) => (
                            <div key={ab} className="ability-row">
                                <span>{ab}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Col>
    );
}

export default PokemonCardComponent;
