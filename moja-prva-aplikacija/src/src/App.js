import React from "react";
import Nasa from "./nasa/Nasa";

export default function App() {
  return <Nasa />
}

/* Početna točka ove vježe je završno stanje iz vježbe 5.19 i nalazi se u direktoriju Pocetno stanje.
Za ovu vježbu preuredit ćemo postojeću aplikaciju tako da koristi redux biblioteku.

Potrebno je:
- instalirati redux biblioteke: npm install --save redux react-redux redux-thunk
- kreirati akciju za dohvat informacija s NASA APIja
- kreirati reducer koji reagira na akciju
- komponenti App spojiti na redux stanje preko "connect" ili "useSelector" i "useDispatch" hookse */
