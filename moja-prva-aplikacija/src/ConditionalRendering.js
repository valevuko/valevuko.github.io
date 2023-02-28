function ConditionalRendering(props) {

    // 1. klasični if-else
    /* 
    function getText() {
        if (props.number > 3) {
            return "Broj je veći od 3";
        } else {
            return "Broj je manji ili jednak broju 3";
        }
    }

    return <div>{getText()}</div>; */

    // 2. ternarni operator
    /* const text = props.number > 3 ? "Broj je veći od 3" : "Broj je manji ili jednak broju 3";

    return <div>{text}</div> */

    // 3. ternarni operator se može koristiti i unutar samog JSX-a
    // return <div>{props.number > 3 ? "Broj je veći od 3" : "Broj je manji ili jednak broju 3"}</div>

    // 4. && operator
    // u ovoj situaciji bi bilo bolje koristiti jedan od gore navedenih uvjetovanih prikaza
    return (
        <>
            <div>{props.number > 3 && "Broj je veći od 3"}</div>
            <div>{props.number < 3 && "Broj je manji ili jednak broju 3"}</div>
        </>
    )

    // 5.
    // Matija P.
    // return <div>{(props.number > 3 && "Broj je veći od 3") || ("Broj je manji od 3")}</div>
            
}

export default ConditionalRendering;