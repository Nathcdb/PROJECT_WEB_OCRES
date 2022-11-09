import './App.css';
import React , {useState} from 'react';
import axios from 'axios';

function App() {
  const [searchText, setSearchText] = useState("");
  const API_KEY = "RGAPI-c0f7fe46-f412-49a5-aa86-0ec56bbc92b1"
  const [playerData, setPlayerData] = useState({});
  const [masteryData, setMasteryData] = useState([]);

  function rechercheJoueur(event){
    setPlayerData({});
    var APICallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    axios.get(APICallString).then(function (response){
      setPlayerData(response.data);
    })
    setMasteryData([]);
    APICallString = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + playerData.id + "/top?api_key="+ API_KEY;
    axios.get(APICallString).then(function (response){
      setMasteryData(response.data);
    })
  }

  return (
    <div className="App">
        <div className="container">
          <h1>LoLStats</h1>
          <h2>Entrez le pseudo d'un joueur</h2>
          <div margin = "15px" >
          <input type="text" onChange={e => setSearchText(e.target.value)}></input>
          <button onClick={e => rechercheJoueur(e)}>Chercher</button>
          </div>
        </div>
        {JSON.stringify(playerData) === '{}' ?
          <p>Joueur introuvable</p>  
          :
          <div id = "widget">
            <div>
              <p>{playerData.name}</p>
              <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/"+playerData.profileIconId+".png"} alt="Icon"></img>
              <p>Niveau {playerData.summonerLevel}</p>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        }
    </div>
  );
}

export default App;
