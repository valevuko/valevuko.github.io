import './App.css';

function App() {

  const name = "Marta";

  const user = {
    firstName: "Ivan",
    lastName: "Horvat"
  }

  const element0 = <h1>Hello</h1>;
  const element1 = <p>Hello, {name}</p>;
  const element2 = <p>{user.firstName}, {user.lastName}</p>;

  return (
    <div>
      {element0}
      {element1}
      {element2}
    </div>
  );
}

export default App;

// U ovoj vježbi, potrebno je napraviti sljedeće:
// 	1.	Napraviti novu React aplikaciju
// 	2.	Unutar App komponente napraviti dvije varijable koje sadrže neki string
// 	3.	Napraviti JSX element koji će prikazati neki tekst na ekranu
// 	4.	Napraviti JSX element koji će prikazati neki tekst na ekranu + vrijednost jedne od varijabli
// 	5.	Napraviti JSX element koji će prikazati obje varijable odvojene razmakom
