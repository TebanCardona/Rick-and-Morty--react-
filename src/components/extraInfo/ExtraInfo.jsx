import React from "react";
import { Link, useParams } from "react-router-dom";
import "./extrainfo.css";
export default function ExtraInfo({ characters = [] }) {
  let { number } = useParams();
  const character = characters.find(({ id }) => id === parseInt(number));
  const regex = /(\d+)/g;
  window.scrollTo(0, 0);
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 style={{ color: "white" }}>Volver atras ↩️</h2>
      </Link>
      <div className="All">
        <img src={character.image} alt={`character.name`} className="imagen" />
        <h4>{character.name} appeared in:</h4>
        {character.episode.map((item) => (
          <p className="episode">
            <b>Episode: </b> {item.match(regex)}
          </p>
        ))}
      </div>
    </>
  );
}
