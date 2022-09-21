import React from "react";
import "./paginacion.css";
const Paginacion = ({ prev, next, onPrevios, onNext }) => {
  const handlePrevious = () => {
    onPrevios();
  };
  const handleNext = () => {
    onNext();
    window.scrollTo(0, 0);
  };
  console.log(prev);
  return (
    <nav>
      <ul className="pagination">
        {" "}
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Paginacion;
