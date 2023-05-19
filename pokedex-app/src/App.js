import { useEffect, useState } from "react";
import "./App.css";
import {api} from './api.js'


function App() {

  const  [pokemons, setPokemons] = useState([]);
  const [description, setDescription] = useState([])
  
 // const filteredFeatures = features.filter(features => features.descriptions.toLowerCase().includes(features.toLocaleLowerCase()))

  useEffect(()=>{
 
    (async() => {
      const pokemonJSON = await api.pokemons();
      const pokemonUrlJSON = pokemonJSON.results.map((url) => (url.url))

      const pokemonDataJSON = await Promise.all(pokemonUrlJSON.map(async(data) => {
        const res = await fetch(data)
        return res.json()
      })) 

      setPokemons(pokemonDataJSON);
    })()
  },[])

  
  useEffect(()=>{
 
    (async() => {
      const descriptonJSON = await api.characteristics();
      const pokemonFeaturesJSON = descriptonJSON.results.map((description) => (description.url))

      const pokemonDescriptionJSON = await Promise.all(pokemonFeaturesJSON.map(async(description) => {
        const res = await fetch(description)
        return res.json()
      }))
    
      const pokemonDescriptionJSONSpanish = await pokemonDescriptionJSON.map((data) => (data.descriptions[5].description))
       setDescription(pokemonDescriptionJSONSpanish);
    })()
  }, [])


  const customPokemon = pokemons.map((pokemon,index) => {
    return {
    name:pokemon.name,
    id:pokemon.id,
    weight: pokemon.weight,
    height:pokemon.height,
    
    types:pokemon.types, 
    info:description[index],
    src:pokemon.sprites.front_default,
    }
  })
  console.log('Custom',customPokemon)    


  return (

    <main className="main_container">
      <Header />
      <Searchbar />
      <div className="cards__grid">
        {customPokemon.map((pokemon) => (
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

const Card = ({ pokemon,description}) => {

  const mainType = pokemon.types[0].type.name;
  return (
    <div
      className={`card__container card__container--${mainType.toLowerCase()}`}
    >
      <section className="card__title">
        <p className="card__pokemon-name">{pokemon.name}</p>
        <p className="card__pokemon-number">{`#0${pokemon.id}`}</p>
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
          {pokemon.types.map((type) => (
            <Tag type={type.type.name} />
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
              <p>{`${pokemon.weight} kg`}</p>
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
              <p>{`${pokemon.height} m`}</p>
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
