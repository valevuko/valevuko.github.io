// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#description

function UserFunction(props) { // object destructuring, komponenta (funkcija) prima samo jedan argument - props

    const { user, /* color, id */ } = props; // props je objekt pa možemo destrukturirati pojedinačne prop-ove

    return (
        <p>Pozdrav, moje ime je {user.name} i imam {user.age} godina.</p>
    )
}

export default UserFunction;