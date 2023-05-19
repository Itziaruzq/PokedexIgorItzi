export const Tag = ({ type }) => {
  return (
    <p
      className={`card__pokemon__type card__pokemon__type--${type.toLowerCase()}`}
    >
      {type}
    </p>
  );
};
