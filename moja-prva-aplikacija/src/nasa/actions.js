import { setData } from "./nasaSlice";

export function fetchNasa() { // redux-thunk akcija
    return dispatch => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(res => res.json())
            .then(data => {
                dispatch(setData(data));
            })
    }
}