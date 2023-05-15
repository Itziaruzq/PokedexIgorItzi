import "./App.css";

function App() {
 
    return (
      <main className="main_container">
        <Header />
        <Searchbar />

        <Card /> 
        <Footer/>
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
  )
}

const Searchbar = () => {
  return (
    <div className="searchbar_container">
         <img
            className="searchbar_img"
            src="_assets/icons/search.png"
            alt="search"
          />
      <input className="searchbar_input" type="text" ></input>
     
    </div>
  )
}

const Card = () => {
  return (
    <div className="card__container">
      <section className="card__title">
        <p className="card__pokemon-name">Bulbasaur</p>
        <p className="card__pokemon-number">#001</p>
      </section>
      <section className="card__info">
        <div className="card__img__container">
          <img
            className="card__pokemon__img"
            src="_assets/pokemons/bulbasaur.png"
            alt="bulbasaur"
          />
        </div>
        <div className="card__pokemon__type__container">
          <p className="card__pokemon__type">Grass</p>
          <p className="card__pokemon__type">Poisson</p>
        </div>
        <p className="about">About</p>
        <div className="card__pokemon__features__container">
          <div className="card__pokemon__feature-weight">
            <div className="card__feature__weight_container">
              <img
                className="card__feature__icon-weight"
                src="_assets/icons/weight.png"
                alt="weight"
              />
              <p>6.9 kg</p>
            </div>
            <p className="card__feature__description__tag">Weight</p>
          </div>
          <div className="card__pokemon__feature-height">
            <div className="card__feature__height_container">
              <img
                className="card_feature__icon"
                src="_assets/icons/ruler.png"
                alt="ruler"
              />
              <p>0.7m</p>
            </div>
            <p className="card__feature__description__tag">Height</p>
          </div>
        </div>
        <p className="card__text__info">
          There is a plant seed on its back right from the day this Pokémon is
          born
        </p>
      </section>
    </div>
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
      </div>    </footer>
  )
}

export default App;
