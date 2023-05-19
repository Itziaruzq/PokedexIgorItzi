export const Searchbar = ({ onEnter }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      onEnter(event.target.value);
    }
  };
  return (
    <div className="searchbar_container">
      <div className="searchbar_container-center">
        <img
          className="searchbar_input_img"
          src="_assets/icons/search.png"
          alt="search"
        />
        <input
          className="searchbar_input"
          type="text"
          onKeyDown={handleKeyDown}
        ></input>
      </div>
    </div>
  );
};
