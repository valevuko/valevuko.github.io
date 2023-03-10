import './App.css';
import Component1 from './Components/Component1';
import Context from './Context/Context';
import React from 'react';

function App() {

  const [number, setNumber] = React.useState(""); // početno stanje je ""

  function handleChange(event) {
    const value = event.target.value;
    // console.log(typeof value); // value je string
    setNumber(value);
  }

  return (
    <>
      <label>
        Postavi u context:
        <input type={"number"} value={number} onChange={handleChange} />
      </label>
      <Context.Provider value={{ text: 'Komponenta 4 je najbolja', number: number }}>
        <Component1 />
      </Context.Provider>
    </>
  );
}

export default App;

/* Potrebno je napraviti sljedeću aplikaciju:
  1) Napraviti Context komponentu
  2) Napraviti četiri ugniježđene (kaskadno) komponente
  3) Postaviti App komponentu kao Context Provider i poslati neki tekst i broj
  4) Postaviti zadnju komponentu kao Context Consumer
  5) U komponenti definiranoj funkcijom ispisati na ekranu tekst i broj koji su poslani preko Context-a
 */