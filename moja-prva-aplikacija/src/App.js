import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function Index() {
  return (
    <div>
      <h2>Home</h2>
      <p>Stranica se može navigirati preko URL-a</p>
      <p>za Kontakt stranicu u URL traku upišite http://localhost:3000/kontakt/</p>
      <p>za stranicu Adresa u URL traku upišite http://localhost:3000/adresa/</p>
    </div>);
}

const Kontakt = () => {
  return (
    <div>
      <h2>Kontakt</h2>
      <p>Tel: +385 1 2332 861</p>
      <p>E-mail: info@algebra.hr</p>
    </div>);
}

function Adresa() {
  return (
    <div>
      <h2>Adresa</h2>
      <p>Zagreb – Ilica 242, Maksimirska 58a (Testni centar)</p>
    </div>);
}

const HOME_ROUTE = "/";
const ADDRESS_ROUTE = "/address";
const CONTACT_ROUTE = "/contact";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to={HOME_ROUTE}>Home</Link></li>
          <li><Link to={ADDRESS_ROUTE}>Adresa</Link></li>
          <li><Link to={CONTACT_ROUTE}>Kontakt</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path={HOME_ROUTE} element={<Index />} />
        <Route path={ADDRESS_ROUTE} element={<Adresa />} />
        <Route path={CONTACT_ROUTE} element={<Kontakt />} />
      </Routes>
    </>
  );
}

export default App;

/* Vježba: Routing
	1.	Napraviti novu react aplikaciju
	2.	Očistiti aplikaciju od početne stranice
	3.	Promijeniti naslov (title) i favicon aplikacije
	4.	Napraviti ukupno četiri komponente u aplikaciji svaka komponenta mora prikazivati neki tekst (App + tri nove komponente)
	5.	Instalirati paket  react-router-dom u aplikaciju i osigurati da je react-router-dom postavljen pod dependencies aplikacije
	6.	Kosititi react router za prikazivanje različitih komponenti u aplikaciji, za različite web adrese (npr. http://localhost:3000/kontakt/)
	7.	Dodati navigacijske linkove na vrh stranice, koje bi mijenjale web adrese i prikazivale druge komponente.
 */