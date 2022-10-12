import './App.css';
import React , {useState} from 'react';
import axios from 'axios';

function App() {
  const [searchText, setSearchText] = useState("");
  const API_KEY = "RGAPI-ded5fd24-3e0d-4172-a036-392ed7c3e518"

  function rechercheJoueur(event){

  }

  return (
    <div className="App">
        <div className="container">
          <h1>Nom du site</h1>
          <h2>Entrez le pseudo d'un joueur</h2>
          <input type="text" onChange={a => setSearchText(a.target.value)}></input>
          <button onClick={a => rechercheJoueur(a)}>Chercher</button>
        </div>
    </div>
  );
}

export default App;
