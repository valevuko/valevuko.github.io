import './App.css';
import React from 'react';
import { UserChildren, UserFunction, UserClass } from './Components';

class App extends React.Component {

  state = {
    users: [ // sada "users" nije polje unutar App komponente, već je dio state-a
      { name: "Ivana", age: 25 },
      { name: "Goran", age: 22 },
      { name: "Jasenka", age: 55 },
    ]
  }

  render() {

   const { users } = this.state; // JS object destructuring

    return (
      <div>
        <UserFunction user={users[0]} />
        <UserClass user={users[1]} />
        <UserChildren>Moje ime je {users[2].name} i imam {users[2].age} godina.</UserChildren>
      </div>
    );
  }
}

export default App;

/* Početno stanje aplikacije je završno stanje aplikacije iz vježbe 5.8 i nalazi se u mapi "Pocetno stanje".

	1. U vježbi je potrebno definirati polje korisnici iz prethodne vježbe unutar stanja (statea) komponente App
	2. Prikazati na ekranu vrijednosti iz stanja (statea)
 */