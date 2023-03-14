import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNasa } from "./actions";

export default function Nasa() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.nasa.data);
    // const data = useSelector((state) => { return state.nasa.data; });

    useEffect(() => {
        dispatch(fetchNasa());
    }, [dispatch]);
  
    if (!data) {
      return <p>Loading NASA data...</p>
    }
  
    const { title, url, explanation } = data; // ova linija treba ići ispod provjere postojanja 'data' objekta
    return (
      <div>
        <h1>NASA picture of the day</h1>
        <h3>{title}</h3>
        <img src={url} alt={title} />
        <p>{explanation}</p>
      </div>
    );
}