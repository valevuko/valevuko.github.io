import './App.css';

// HOC
function withColor(BaseComponent) {
  // komponenta, u našem slučaju ColoredInput, ColoredButton
  return function({ color, ...props }) {    // return gornje funkcije - a to je komponenta; u sintaksi `({ color, ...props })`, `...props` je u stvari `(props)` ali bez `color` prop-a
    return <BaseComponent {...props} style={{ backgroundColor: color }} /> // render
  }
}

function Button(props) {
  return (
    <button {...props}>Button</button>
  )
}
function Input(props) {
  return (
    <input {...props} />
  )
}

const ColoredButton = withColor(Button);
const ColoredInput = withColor(Input);


function App() {
  return (
    <div>
      <ColoredButton color='red' disabled />
      <ColoredInput color='purple' />
    </div>
  );
}

export default App;

/* U ovoj vježbi potrebno je napraviti sljedeće:
    1. Napraviti novu React aplikaciju
    2. Napraviti HOC withColor koji će postavljati stil komponente na način da:
        - primi prop "color"
        - postavi style child komponente: const style = { backgroundColor: this.props.color };
    3. Napraviti ColoredButton komponentu: const ColoredButton = withColor(Button);
    4. Iscrtati nekoliko različitih ColoredButton komponenti, svaka od njih prima drugi color prop
 */