import React from "react";
import "./navbar.css";
function Navbar({ brand }) {
  // Un Navbar sin mas toda triste
  return (
    <nav id="nav">
      <div>
        <a href="/" className="Titulo">
          {brand}
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
