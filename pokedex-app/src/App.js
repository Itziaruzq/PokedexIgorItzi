import "./App.css";

function App() {
  return <Card />;
}

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-title">
        <p className="pokemon-name">Bulbasaur</p>
        <p className="pokemon-number">#001</p>
      </div>
      <img
        className="pokemon-img"
        src="_assets/pokemons/bulbasaur.png"
        alt="bulbasaur"
      />
      <div className="card-info">
        <div className="pokemon-type-container">
          <p className="pokemon-type">Grass</p>
          <p className="pokemon-type">Poisson</p>
        </div>
        <p className="about">About</p>
        <div className="pokemon-features">
          <div className="pokemon-weight">
            <div className="card-measure">
              <img
                className="feature-icon"
                src="_assets/icons/weight.png"
                alt="weight"
              />
              <p>6.9 kg</p>
            </div>
            <p className="feature-description-tag">Weight</p>
          </div>
          <div className="pokemon-height">
            <div className="card-measure">
              <img
                className="feature-icon"
                src="_assets/icons/ruler.png"
                alt="ruler"
              />
              <p>0.7m</p>
            </div>
            <p className="feature-description-tag">Height</p>
          </div>
        </div>
        <p className="text-info">
          There is a plant seed on its back right from the day this Pokémon is
          born
        </p>
      </div>
    </div>
  );
};

export default App;
