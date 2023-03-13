import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {

    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, []); // [abc] - ako se abc promijeni, to će izazvati useEffect da ponovno izvrši logiku unutar sebe
  /** DEPENDENCY ARRAY */
  /**
   * ako ga nema - poziva se nakon svakog rendera
   * [] - poziva se jednom nakon prvog rendera
   * [abc, ..] - poziva se nakon prvog rendera i kad god se abc (potencijalno bilo koji drugi argument) promijeni
   */


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

/* U ovoj vježbi potrebno je kreirati novu React aplikaciju u kojoj ćemo dohvatiti i prikazati podatke s REST APIja.
Koristit ćemo NASA-in API koji omogućava dohvat slike dana.

Kako bismo dohvatili sliku dana, potrebno je pozvati metodu GET na sljedeći URL:
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

Kao odgovor na ovaj poziv, dobiti ćemo JSON objekt u kojem se nalazi nekoliko bitnih atributa:
- url: URL slike
- title: naziv slike
- explanation: opis slike
(kako biste vidjeli puni odgovor, potrebno je kopirati URL za dohvat slike dana u web browser i pritisnuti tipku Enter)

U našoj React aplikaciji, potrebno je prikazati navedene 3 informacije (sliku, naziv i opis slike).

Napomena: kako bi se neka slika prikazala u React aplikaciji, potrebno je dodati sljedeći JSX odsječak:
<img src="url_slike" alt="opis_u_slucaju_da_slika_nije_ucitana" />

Npr: <img src="https://apod.nasa.gov/apod/image/1908/CannonSupernova_English_960.jpg" alt="Supernova Cannon" /> */
