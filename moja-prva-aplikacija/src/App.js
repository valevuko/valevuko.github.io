import './App.css';
import React from 'react';
import { UserChildren, UserFunction, UserClass } from './Components';

function App() {

  const [users, setUsers] = React.useState([
    { name: "Ivana", age: 25 },
    { name: "Goran", age: 22 },
    { name: "Jasenka", age: 55 },
  ]);

  // const [messages, setMessages] = React.useState(["Poruka1", "Poruka2"]);
  // const [users, setUsers] = React.useState(); // inicijalno bi users bio undefined

 /*  state = {
    users: [
      { name: "Ivana", age: 25 },
      { name: "Goran", age: 22 },
      { name: "Jasenka", age: 55 },
    ],
    messages: ["Poruka1", "Poruka2"]
  } */

  const handleClick = () => {

    const newUsers = users.map((user) => {
      return { ...user, age: user.age + 1 };
    })

    setUsers(newUsers);
    /* this.setState({ users: newUsers }); */
  }

    return (
      <div>
        <button onClick={handleClick}>Click me</button>
        <UserFunction user={users[0]} />
        <UserClass user={users[1]} />
        <UserChildren>Moje ime je {users[2].name} i imam {users[2].age} godina.</UserChildren>
      </div>
    );
}

export default App;

/*
Početno stanje aplikacije je završno stanje vježbe 5.10 i nalazi se u mapi "Pocetno stanje".
Potrebno je promijeniti komponentu App - komponenta App mora biti definirana funkcijom.
Za čuvanje stanja aplikacije potrebno je koristiti useState hook.
 */