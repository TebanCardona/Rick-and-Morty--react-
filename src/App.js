import "./App.css";
import Navbar from "./components/Navbar.jsx";
import React, { useEffect, useState } from "react";
import { Characteres } from "./components/Characteres";
import Paginacion from "./components/Paginacion";
// import ExtraInfo from "./components/extraInfo/ExtraInfo";
function App() {
  //Creamos dos Estados uno que sean los pjs y otra que sea la informacion si de la sgte pag
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});

  const URL = "https://rickandmortyapi.com/api/character";
  //Creamos una funcion que reciva como parametro la URL y devuelva la info y los pjs
  const fetchCharacters = (URL) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  //hacemos la funcion de paginacion donde pueda cambiar las cards de los pjs
  const onPrevios = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  //Hacemos el useEffect con la funcion fetch y la url para que pueda cambiar de pag
  useEffect(() => {
    fetchCharacters(URL);
  }, []);

  return (
    <>
      {/* Colocamos el componente NavBar con el Titulo */}
      <Navbar brand={"Rick And Morty"} />
      {/* Hacemos el div donde ira toda la info */}
      <div className="container nt-5">
        {/* Colocamos la Paginacion pasandole por props el  Info(prev, next), Funciones(onPrevios y onNext) */}
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrevios={onPrevios}
          onNext={onNext}
        />
        {/* Colocamos el componente characteres que mostrara en pantalla todos los pjs */}
        <Characteres characteres={characters} />
        {/* otra Paginacion mas para que haya uno abajo */}
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrevios={onPrevios}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
