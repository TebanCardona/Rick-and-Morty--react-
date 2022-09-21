import "./App.css";
import Navbar from "./components/Navbar.jsx";
import React, { useEffect, useState } from "react";
import { Characteres } from "./components/Characteres";
import Paginacion from "./components/Paginacion";
// import ExtraInfo from "./components/extraInfo/ExtraInfo";
function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});

  const URL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (URL) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  const onPrevios = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  useEffect(() => {
    fetchCharacters(URL);
  }, []);

  return (
    <>
      <Navbar brand={"Rick And Morty"} />
      <div className="container nt-5">
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrevios={onPrevios}
          onNext={onNext}
        />

        <Characteres characteres={characters} />
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
