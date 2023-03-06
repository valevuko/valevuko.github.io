function User(props) { // stateless komponenta

    // lifting state up (https://beta.reactjs.org/learn/sharing-state-between-components)
    const { user, handleNameChange } = props; // podaci od parent komponente

    // const handleNameChange = (event) => {
    //     console.log(event.target.value);
    // }

    // const _handleNameChange = (event) => handleNameChange(event);

    return (
        <>
            <p>Pozdrav, moje ime je {user.name} i imam {user.age} godina.</p>
            <input type={"text"} onChange={handleNameChange} />
            {/* <input type={"text"} onChange={_handleNameChange} /> - ekvivalent */}
        </>
    )
}

export default User;