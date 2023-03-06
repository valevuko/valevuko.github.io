import './App.css';
import React from 'react';
import { UserFunction } from './Components';

function App() {

  const [user, setUser] = React.useState({ name: "Ivana", age: 25 });

  const handleNameChange = (event) => {
    const value = event.target.value;

    const newUser = { ...user, name: value }; // 1.
    // newUser.name = value; // 2.

    setUser(newUser);
    // this.setState({ user: newUser });
  }


  return (
    <div>
      <UserFunction user={user} handleNameChange={handleNameChange} />
    </div>
  );
}

export default App;

/* Početno stanje aplikacije je završno stanje vježbe 5.10 i nalazi se u mapi "Pocetno stanje".
	1. U komponentu korisnik potrebno je dodati input za unos teksta
	2. Interakcijom s inputom za unos teksta treba mijenjati ime korisnika
	3. Trenutno ime korisnika uvijek treba pisati unutar inputa
	4. Funkcija promjene imena treba raditi samo na jednom korisniku
 */