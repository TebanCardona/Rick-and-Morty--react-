import React from "react";

function ExtraInfo({ filters }) {
  return (
    <div className="filters">
      <ul>
        <div>
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
              textDecoration: "underline",
              color: "#25b7df",
            }}
          >
            Filters
          </h3>
        </div>
        <div
          className="filter-name"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button type="checkbox">Null</button>
          {filters.map((item) => (
            <button
              type="checkbox"
              key={item}
              style={{
                color: "black",
              }}
            >
              {item}
            </button>
          ))}{" "}
        </div>
      </ul>
    </div>
  );
}

export default ExtraInfo;
