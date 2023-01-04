import React from "react";
import Card from "./Card";
import s from "../styles/Cards.module.css";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className={s.cardsContainer}>
      {cities.length > 0 ? (
        cities.map((city) => (
          <Card
            key={city.id}
            name={city.name}
            min={city.main.temp_min}
            max={city.main.temp_max}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
          />
        ))
      ) : (
        <div> No Hay ciudades para mostrar </div>
      )}
    </div>
  );
}
