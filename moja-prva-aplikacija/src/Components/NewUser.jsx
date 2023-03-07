import { useState } from "react";

function NewUser({ onFormSubmit }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function handleNameChange(event) {
        const value = event.target.value;
        setName(value);
    }

    function handleAgeChange(event) {
        const value = event.target.value;
        setAge(value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const id = new Date().getTime(); // Date.now();
        const newUser = { id: id, name: name, age: age };

        onFormSubmit(newUser);

        // brišemo inpute nakon submitanja forme
        setName('');
        setAge('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Ime: <input value={name} onChange={handleNameChange} type="text" /></label>
            <label>Dob: <input value={age} onChange={handleAgeChange} type="text" /></label>
            <input type="submit" value="Unesi" />
        </form>
    )
}

export default NewUser;

/* Početno stanje aplikacije je završno stanje vježbe 5.13 i nalazi se u mapi "Pocetno stanje".
1. Napraviti novu komponentu koja će sadržavati formu za unos novog korisnika (traka za unos teksta za ime, traka za unos teksta za godine i tipka za potvrditi unos)
2. Nakon pritiska na tipku forme novi korisnik se mora spremiti u stanje (state) i prikazati na ekranu
3. Nakon pritiska na tipku forme trake za unos teksta se moraju resetirati na početno stanje
4. Unos teksta za promjenu imena mora raditi i na novom korisniku
5. Tipka za promjenu godina mora raditi i na novom korisniku */