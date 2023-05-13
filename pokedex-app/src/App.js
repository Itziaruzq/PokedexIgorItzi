import "./App.css";

function App() {
  return <Card />;
}

const Card = () => {
  return (
    <div className="card__container">
      <section className="card__title">
        <p className="pokemon__name">Bulbasaur</p>
        <p className="pokemon__number">#001</p>
      </section>
      <section className="card__info">
        <div className="img__container">
          <img
            className="pokemon__img"
            src="_assets/pokemons/mew.png"
            alt="bulbasaur"
          />
        </div>
        <div className="pokemon__type__container">
          <p className="pokemon__type">Grass</p>
          <p className="pokemon__type">Poisson</p>
        </div>
        <p className="about">About</p>
        <div className="pokemon__features">
          <div className="pokemon__weight">
            <div className="card__measure">
              <img
                className="feature__icon"
                src="_assets/icons/weight.png"
                alt="weight"
              />
              <p>6.9 kg</p>
            </div>
            <p className="feature__description__tag">Weight</p>
          </div>
          <div className="pokemon__height">
            <div className="card__measure">
              <img
                className="feature__icon"
                src="_assets/icons/ruler.png"
                alt="ruler"
              />
              <p>0.7m</p>
            </div>
            <p className="feature__description__tag">Height</p>
          </div>
        </div>
        <p className="text__info">
          There is a plant seed on its back right from the day this Pokémon is
          born
        </p>
      </section>
    </div>
  );
};

export default App;
