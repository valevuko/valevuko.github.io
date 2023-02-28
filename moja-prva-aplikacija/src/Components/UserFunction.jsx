// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#description

function UserFunction({ user }) { // object destructuring
    return (
        <p>Pozdrav, moje ime je {user.name} i imam {user.age} godina.</p>
    )
}

export default UserFunction;