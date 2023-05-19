import { Tag } from "../Tag/Tag";

export const Card = ({ pokemon }) => {
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
        <p className="card__text__info">{pokemon.description}</p>
      </section>
    </div>
  );
};
