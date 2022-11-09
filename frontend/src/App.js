import './App.css';
import React , {useState} from 'react';
import axios from 'axios';

function App() {
  const [searchText, setSearchText] = useState("");
  const API_KEY = "RGAPI-ded5fd24-3e0d-4172-a036-392ed7c3e518"
  const [playerData, setPlayerData] = useState({});

  function rechercheJoueur(event){
    var APICallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    axios.get(APICallString).then(function (response){
      setPlayerData(response.data);
    }).catch(function(error){
      
    });
  

  }

  return (
    <div className="App">
        <div className="container">
          <h1>Nom du site</h1>
          <h2>Entrez le pseudo d'un joueur</h2>
          <input type="text" onChange={e => setSearchText(e.target.value)}></input>
          <button onClick={e => rechercheJoueur(e)}>Chercher</button>
        </div>
    </div>
  );
}

export default App;
