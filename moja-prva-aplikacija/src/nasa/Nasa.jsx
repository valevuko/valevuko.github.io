import { useState, useEffect } from "react";

export default function Nasa() {
    const [data, setData] = useState(null);

    useEffect(() => {
  
      fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => res.json())
        .then(data => {
          setData(data);
        })
    }, []);
  
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