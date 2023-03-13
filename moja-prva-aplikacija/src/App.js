import './App.css';
import React from 'react';
import { UserChildren, UserFunction, UserClass } from './Components';

class App extends React.Component {

  // otkomentarati kako biste uočili koji je redoslijed updateanja komponenata (hint: od children prema parent komponenti)
  // componentDidUpdate() {
  //   console.log("componentDidUpdate - App")
  // }

  state = {
    users: [
      { name: "Ivana", age: 25 },
      { name: "Goran", age: 22 },
      { name: "Jasenka", age: 55 },
    ]
  }

  handleClick = () => {
    
    const { users } = this.state;

    const newUsers = users.map((user) => {
      return { ...user, age: user.age + 1  };
    })

    this.setState({ users: newUsers });
  }

  render() {

   const { users } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <UserFunction user={users[0]} />
        {!(this.state.users[1].age > 25) && <UserClass user={users[1]} />}
        <UserChildren>Moje ime je {users[2].name} i imam {users[2].age} godina.</UserChildren>
      </div>
    );
  }
}

export default App;

/* Početno stanje aplikacije je završno stanje vježbe 5.9 i nalazi se u mapi "Pocetno stanje".

	1. App komponenti potrebno je dodati gumb
	2. Pritiskom na gumb potrebno je promijeniti godine korisnika
	3. Prikazati promjenu na ekranu
 */