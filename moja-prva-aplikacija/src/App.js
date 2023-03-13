import './App.css';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

/* U ovoj vježbi potrebno je napraviti React aplikaciju koja upravlja svojim stanjem pomoću Redux biblioteke.
Za početak, potrebno je kreirati novu aplikaciju i instalirati biblioteke redux i react-redux:
    1. npx create-react-app redux-test
    2. cd redux-test
    3. npm install --save @reduxjs/toolkit react-redux

U vježbi je potrebno napraviti jednostavan brojač:
    - prikazati trenutno stanje brojača (početno 0)
    - dodati gumb "+", na čiji klik se brojač povećava za jedan
    - dodati gumb "-", na čiji klik se brojač smanjuje za jedan
    - dodati gumb "Reset", na čiji klik se brojač postavljuje na 0

Stanje brojača zapisati u redux stanje:
    - potrebno je napraviti akcije ("createSlice") koje služe za povećavanje, smanjenje i resetiranje brojača
    - potrebno je napraviti reducer ("createSlice") koji reagira na navedene akcije i mijenja stanje (state) aplikacije prema tome
    - potrebno je spojiti komponentu App na redux stanje pomoću "useSelector" hook-a i prikazati trenutno redux stanje */
