import logo from "./logo.svg";
import "./App.css";

function App() {
  return <Card />;
}

const Card = () => {
  return (
    <div class="card-container">
      <div class="card-title">
        <p class="pokemon-name">Bulbasaur</p>
        <p class="pokemon-number">#001</p>
      </div>
    </div>
  );
};

export default App;
