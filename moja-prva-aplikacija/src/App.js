import './App.css';
import { gql, useQuery } from '@apollo/client';

function App() {

  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function renderRates() {
    return (
      <ul>
        {data.rates.map(({ currency, rate }) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      {renderRates()}
    </>
  );
}

export default App;

/* U ovoj vježbi potrebno je napraviti sljedeće:
  1. Napraviti novu React aplikaciju
  2. Instalirati Apollo, biblioteku za React Graphql
  3. Napraviti upit prema GraphQL serveru (url servera: https://48p1r2roz4.sse.codesandbox.io/)
  4. Ispisati listu s rezultatima na ekranu
 */