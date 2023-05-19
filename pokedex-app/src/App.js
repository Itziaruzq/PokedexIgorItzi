import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./api.js";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { Card } from "./components/Card";
import { Footer } from "./components/Card";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [description, setDescription] = useState([]);

  // const filteredFeatures = features.filter(features => features.descriptions.toLowerCase().includes(features.toLocaleLowerCase()))

  useEffect(() => {
    (async () => {
      const pokemonJSON = await api.pokemons();
      const pokemonUrlJSON = pokemonJSON.results.map((url) => url.url);

      const pokemonDataJSON = await Promise.all(
        pokemonUrlJSON.map(async (data) => {
          const res = await fetch(data);
          return res.json();
        })
      );

      setPokemons(pokemonDataJSON);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const descriptonJSON = await api.characteristics();
      const pokemonFeaturesJSON = descriptonJSON.results.map(
        (description) => description.url
      );

      const pokemonDescriptionJSON = await Promise.all(
        pokemonFeaturesJSON.map(async (description) => {
          const res = await fetch(description);
          return res.json();
        })
      );

      const pokemonDescriptionJSONSpanish = await pokemonDescriptionJSON.map(
        (data) => data.descriptions[5].description
      );
      setDescription(pokemonDescriptionJSONSpanish);
    })();
  }, []);

  const customPokemon = pokemons.map((pokemon, index) => {
    return {
      name: pokemon.name,
      id: pokemon.id,
      weight: pokemon.weight,
      height: pokemon.height,
      types: pokemon.types,
      info: description[index],
      src: pokemon.sprites.front_default,
    };
  });

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

export default App;
