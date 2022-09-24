import React, { useState } from "react";
import "./characteres.css";
import { Link } from "react-router-dom";
export const Characteres = ({ characteres = [] }) => {
  // Creamos un estado para que guarde lo que escribimos en el input
  const [Query, setQuery] = useState("");

  return (
    <div className="all">
      <div className="searchbar">
        {/* el input donde nosotros podemos buscar por nombre */}
        <input
          type="text"
          placeholder="Search for name..."
          className="search"
          //Creamos el evento que cuando cambie el input guardemos eso en dentro del setQuery
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="info">
        {/* hacemos el filtro por nombre */}
        {characteres
          .filter((pjs) => pjs.name.toLowerCase().includes(Query))
          // hacemos un map de todos los personajes que vamos a mostrar en pantalla
          .map((item, index) => (
            <div key={index} className="col">
              <div className="card">
                <div className="moreinfo">
                  <p>
                    <b>last Location:</b> {item.location.name}
                  </p>
                  <p>
                    <b>Species:</b> {item.species}
                  </p>
                  <p>
                    <b>Status:</b> {item.status}
                  </p>
                  <p>
                    <b>Gender:</b> {item.gender}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="image"
                  tabIndex={"0"}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <hr />
                  <p>
                    <b>Total Episodes:</b> {item.episode.length}
                  </p>
                  <p>
                    <b>Origin:</b> {item.origin.name}
                  </p>
                  <Link to={`/episodes/${item.id}`}>
                    <p style={{ color: "blue" }}>About episode</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
