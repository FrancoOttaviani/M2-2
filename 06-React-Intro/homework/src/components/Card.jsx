import React from "react";
import s from "../styles/Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.card}>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} />
      <button onClick={props.onClose}> X </button>
      <h2>{props.name}</h2>
      <div>Min: {props.min}</div>
      <div>Max: {props.max}</div>
    </div>
  );
}
