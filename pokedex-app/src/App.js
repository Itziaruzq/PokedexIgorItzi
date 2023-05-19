import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { pokemonService } from "./services/pokemonService";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const getPokemons = async () => {
    const mappedPokemons = await pokemonService.getPokemons();
    setPokemons(mappedPokemons);
    setFilteredPokemons(mappedPokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleSearch = (inputValue) => {
    const result = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
    );
    setFilteredPokemons(result);
  };

  const mapPokemon = (pokemon) => <Card pokemon={pokemon} />;

  const pokemonCards = filteredPokemons.map(mapPokemon);

  return (
    <main className="main_container">
      <Header />
      <Searchbar onEnter={handleSearch} />
      <div className="cards__grid">{pokemonCards}</div>
      <Footer />
    </main>
  );
}

export default App;
