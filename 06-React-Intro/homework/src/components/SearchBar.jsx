import React from "react";
import s from "../styles/Search.module.css";
export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.searchContainer}>
      <input type="text" placeholder="Buscar Ciudad.." />
      <button onClick={props.onSearch()}> Agregar </button>
    </div>
  );
}
