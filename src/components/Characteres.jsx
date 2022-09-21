import React, { useState } from "react";
import "./characteres.css";
export const Characteres = ({ characteres = [] }) => {
  const [Query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="info">
        {characteres
          .filter((pjs) => pjs.name.toLowerCase().includes(Query))
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
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
