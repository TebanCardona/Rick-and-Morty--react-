import React from "react";
import "./paginacion.css";
const Paginacion = ({ prev, next, onPrevios, onNext }) => {
  // Creamos las funciones que pasan de pagina
  const handlePrevious = () => {
    onPrevios();
  };
  const handleNext = () => {
    onNext();
    window.scrollTo(0, 0);
  };
  return (
    <nav>
      <ul className="pagination">
        {" "}
        {/* si prev existe lo mostramos en pantalla igual que next le colocamos un listener cuando se haga click para poder cambiar de pag */}
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
