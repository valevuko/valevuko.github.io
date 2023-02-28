import "./App.css";
import React from "react";
import { UserChildren, UserFunction, UserClass } from "./Components";

class App extends React.Component {
  state = {
    users: [
      { name: "Ivana", age: 25 },
      { name: "Goran", age: 22 },
      { name: "Jasenka", age: 55 },
    ],
  };

  handleClick = () => {
    const { users } = this.state;

    /*  const newUsers = users;
    newUsers[0].age = 26; */
    //kad mijenjate array ili objekt koji je dio state treba rekreirati taj array ili objekt (hint: JS "map" funkcija)
    // map funkcija iterira kroz niz i vraća novi niz ne mijenjajući postojeći niz

    const newUsers = users.map((user) => {
      //user izgreda ovako {name: "Ivana", age:25}
      /*       return { name: user.name, age: user.age + 1 }; */
      return { ...user, age: user.age + 1 }; //spred operator radi kopiju objekta prve razine
    });

    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button> {/* uvijek moramo koristiti this. u ovim metodama */}
        <UserFunction user={users[0]} />
        <UserClass user={users[1]} />
        <UserChildren>
          Moje ime je {users[2].name} i imam {users[2].age} godina.
        </UserChildren>
      </div>
    );
  }
}

export default App;

/* Početno stanje aplikacije je završno stanje vježbe 5.9 i nalazi se u mapi "Pocetno stanje".

    1. App komponenti potrebno je dodati gumb
    2. Pritiskom na gumb potrebno je promijeniti godine korisnika - 
    3. Prikazati promjenu na ekranu
 */
