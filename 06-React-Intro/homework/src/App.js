import React from "react";
import "./App.css";
import s from "./styles/App.module.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import cities from "./data.js";

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar onSearch={(city) => console.log(city)} />
      </div>
      <div>
        <Cards cities={cities} />
      </div>
      <hr />
    </div>
  );
}

export default App;
