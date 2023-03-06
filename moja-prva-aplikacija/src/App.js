import './App.css';
import React from 'react';
import { User } from './Components';

// https://beta.reactjs.org/learn/updating-arrays-in-state#replacing-items-in-an-array

function App() {

  const [users, setUsers] = React.useState([
    { id: 1, name: 'Ivan', age: 30 },
    { id: 2, name: 'Marko', age: 35 },
    { id: 3, name: 'Ana', age: 25 }
  ]);

  const handleNameChange = (event, index) => {
    const value = event.target.value;

    const newUsers = users.map((user, i) => {
      if (index === i) {
        return { ...user, name: value };
      }
      else return { ...user };
    });

    setUsers(newUsers);
  }


  return (
    <>
      {/* {kad god iteriramo kroz niz i kreiramo jsx element za svaku iteraciju - unique "key" prop } */}
      {users.map((user, index) => {
        return (
          <User
            key={user.id}
            // key={index} - nije preporučljivo
            user={user}
            // handleNameChange={handleNameChange}
            // handleNameChange={function(event) { return handleNameChange(event); }}
            // handleNameChange={(event) => handleNameChange(event)}
            handleNameChange={(event) => handleNameChange(event, index)}
          />
        )
      })}
    </>
  );
}

export default App;

/* 
Početno stanje aplikacije je završno stanje vježbe 5.12 i nalazi se u mapi "Pocetno stanje".
	1. Potrebno je prikazati sve korisnike u stanju (stateu) pomoću liste
	2. Ukoliko se u polje korisnici doda još korisnika, oni se moraju automatski prikazati na ekranu, bez mijenjanja kôda
	3. Promjena imena preko trake za unos teksta mora raditi na svim korisnicima
	4. Radi optimizacije renderiranja kôda svaki element u listi mora imati postavljen unikatan ključ (key)
 */