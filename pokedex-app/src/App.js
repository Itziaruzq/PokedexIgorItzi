import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { pokemonService } from "./services/pokemonService";

function App() {
  const [pokemons, setPokemons] = useState([]);


  const getPokemons = async () => {
    const mappedPokemons = await pokemonService.getPokemons();

    setPokemons(mappedPokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);


  console.log(pokemons);

  return (
    <main className="main_container">
      <Header />
      <Searchbar />
      <div className="cards__grid">
        { pokemons.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))} 
      </div>
      <Footer />
    </main>
  );
}

export default App;
