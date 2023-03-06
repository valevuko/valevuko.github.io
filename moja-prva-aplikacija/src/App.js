import "./App.css";
/* import React from "react";  jedan način*/
import { useState } from "react";

//input>-controle

function App() {
  /*   const [nesto, setNesto] = React.useState();jedan način */

  const [name, setName] = useState("");
  //ako očekujemo stringu onda u zagradu trebamo staviti navodnike
  function handleSubmit(event) {
    event.preventDefault(); //zaustavlja refresh/reload stranice
    alert(name); //zaustavlja kod na toj liniji dok ne kliknemo ok/uredu

    setName(""); //briše unos u "Ime:"
  }

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ime:
        <input onChange={handleNameChange} value={name} type={"text"}></input>
      </label>
      <input type={"submit"} value={"Potvrdi"}></input>
    </form>
  );
}

export default App;

/* Potrebno napraviti React aplikaciju koja će imati sljedeće:
1. Potrebno je napraviti formu koja će imati traku za unos teksta i gumb za potvrdu unosa
2. Korisničkom interakcijom potrebno je spremati tekst u stanje (state) komponente
3. Pritiskom Pocetno stanjena tipku, potrebno je ispisati tekst na ekranu */
