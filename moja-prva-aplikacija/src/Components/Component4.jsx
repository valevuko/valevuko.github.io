import { useContext } from "react";
import Context from "../Context/Context";

export default function Component4() {

    const contextObject = useContext(Context);

    const { text, number } = contextObject;

    return (
        <div>
            <h2>Komponenta 4</h2>
            <p>{text} preko funkcije, a poslani broj je {number}</p>
        </div>
    )
}
