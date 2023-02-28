import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div>
      <FunctionComponent />
      <ClassComponent />
    </div>
  );
}

export default App;

// Potrebno napraviti React aplikaciju koja će imati slijedeće:
// 	1	Napraviti novu aplikaciju
// 	2.	Unutar App.js datoteke napraviti jednu komponentu definiranu funkcijom koja vraća JSX s tekstom.
// 	    Unutar App komponente potrebno je prikazati komponentu.
// 	3.	Unutar App.js datoteke napraviti jednu komponentu definiranu klasom koja vraća JSX s tekstom.
// 	    Unutar App komponente potrebno je prikazati komponentu.
// 	4.	Potrebno je prebaciti svaku komponentu unutar svoje datoteke. Prikazati ih unutar App komponente.