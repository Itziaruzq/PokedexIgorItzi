import { useEffect, useState } from "react";
import "./App.css";
import {api} from './api.js'
/*const pokemons = [
  {
    name: "Bulbasaur",
    id: "#001",
    type: ["Grass", "Poison"],
    weight: "6.9 kgs",
    height: "0.7 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/bulbasaur.png",
  },
  {
    name: "Charmander",
    id: "#004",
    type: ["Fire"],
    weight: "5 kgs",
    height: "1.2 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/charmander.png",
  },
  {
    name: "Squirtle",
    id: "#001",
    type: ["Water"],
    weight: "8.9 kgs",
    height: "0.8 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/squirtle.png",
  },
  {
    name: "Charmander",
    id: "#004",
    type: ["Fire"],
    weight: "5 kgs",
    height: "1.2 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/charmander.png",
  },
  {
    name: "Bulbasaur",
    id: "#001",
    type: ["Grass", "Poison"],
    weight: "6.9 kgs",
    height: "0.7 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/bulbasaur.png",
  },
  {
    name: "Charmander",
    id: "#004",
    type: ["Fire"],
    weight: "5 kgs",
    height: "1.2 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/charmander.png",
  },
  {
    name: "Squirtle",
    id: "#001",
    type: ["Water"],
    weight: "8.9 kgs",
    height: "0.8 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/squirtle.png",
  },
  {
    name: "Charmander",
    id: "#004",
    type: ["Fire"],
    weight: "5 kgs",
    height: "1.2 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/charmander.png",
  },
  {
    name: "Bulbasaur",
    id: "#001",
    type: ["Grass", "Poison"],
    weight: "6.9 kgs",
    height: "0.7 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/bulbasaur.png",
  },
  {
    name: "Charmander",
    id: "#004",
    type: ["Fire"],
    weight: "5 kgs",
    height: "1.2 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/charmander.png",
  },
  {
    name: "Squirtle",
    id: "#001",
    type: ["Water"],
    weight: "8.9 kgs",
    height: "0.8 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/squirtle.png",
  },
  {
    name: "Charmander",
    id: "#004",
    type: ["Fire"],
    weight: "5 kgs",
    height: "1.2 m",
    info: "Esta es mi info",
    src: "_assets/pokemons/charmander.png",
  },
];*/

   /*REcojo pokemons de las,Luego mapeo a nuestro formato y filtrado*/

function App() {

  const  [pokemons, setPokemons] = useState([]);

  
  useEffect(()=>{
 
    (async() => {
      const pokemonJSON = await api.pokemons();
      const pokemonUrlSON = pokemonJSON.results.map((url) => (url.url))
      // console.log(pokemonUrlSON);

      const pokemonDataJSON = await Promise.all(pokemonUrlSON.map(async(data) => {
        const res = await fetch(data)
        return res.json()
      }))
      console.log(pokemonDataJSON)

      setPokemons(pokemonDataJSON);
    })()
  },[])
  /*
  const newPokemons =pokemons.map((pokemon))=>
    return{
    name:pokemon.name,
    id:pokemon.id,
    weight: pokemon.weight,
    height:pokemon.height
    }
}*/

  return (

    <main className="main_container">
      <Header />
      <Searchbar />
      <div className="cards__grid">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
      </div>
      <Footer />
    </main>
  );
}

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <img
          className="header__pokeball__img"
          src="_assets/icons/pokeball.png"
          alt="pokeball"
        />
        <p className="header_title"> My Pokédex</p>
      </div>
    </header>
  );
};

const Searchbar = () => {
  return (
    <div className="searchbar_container">
      <div className="searchbar_container-center">
        <img
          className="searchbar_input_img"
          src="_assets/icons/search.png"
          alt="search"
        />
        <input className="searchbar_input" type="text"></input>
      </div>
    </div>
  );
};

const Card = ({ pokemon }) => {

  const mainType = pokemon.type[0];
  return (
    <div
      className={`card__container card__container--${mainType.toLowerCase()}`}
    >
      <section className="card__title">
        <p className="card__pokemon-name">{pokemon.name}</p>
        <p className="card__pokemon-number">{pokemon.id}</p>
      </section>
      <section className="card__info">
        <div className="card__img__container">
          <img
            className="card__pokemon__img"
            src={pokemon.src}
            alt="bulbasaur"
          />
        </div>
        <div className="card__pokemon__type__container">
          {pokemon.type.map((type) => (
            <Tag type={type} />
          ))}
        </div>
        <p className={`about about--${mainType.toLowerCase()}`}>About</p>
        <div className="card__pokemon__features__container">
          <div className="card__pokemon__feature-weight">
            <div className="card__feature__weight_container">
              <img
                className="card__feature__icon--weight"
                src="_assets/icons/weight.png"
                alt="weight"
              />
              <p>{pokemon.weight}</p>
            </div>
            <p className="card__feature__description__tag">Weight</p>
          </div>
          <div className="card__pokemon__feature--height">
            <div className="card__feature__height_container">
              <img
                className="card_feature__icon"
                src="_assets/icons/ruler.png"
                alt="ruler"
              />
              <p>{pokemon.height}</p>
            </div>
            <p className="card__feature__description__tag">Height</p>
          </div>
        </div>
        <p className="card__text__info">{pokemon.info}</p>
      </section>
    </div>
  );
};

const Tag = ({ type }) => {
  return (
    <p
      className={`card__pokemon__type card__pokemon__type--${type.toLowerCase()}`}
    >
      {type}
    </p>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <img
          className="footer__github__img"
          src="_assets/icons/github.png"
          alt="github"
        />
        <img
          className="footer__pokeapi__img"
          src="_assets/icons/pokeapi.png"
          alt="github"
        />
      </div>
    </footer>
  );
};

export default App;
