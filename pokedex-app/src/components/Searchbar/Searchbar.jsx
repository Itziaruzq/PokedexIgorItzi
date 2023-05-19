export const Searchbar = () => {
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
