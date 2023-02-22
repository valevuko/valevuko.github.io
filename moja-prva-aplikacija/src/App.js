import "./App.css";

function App() {
  const name = "Valentina";
  const user = {
    firstName: "Valentina",
    lastName: "Horvat",
  };

  const element0 = <h1>Hello</h1>;
  const element1 = <p>{name}</p>;
  const element2 = <p>{user.lastName,}, {user.firstName}</p>;

  return (
    <div>
      {element0}
      {element1}
      {element2}
    </div>
  );
}

export default App;
