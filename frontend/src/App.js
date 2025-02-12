import './App.css';
import React , {useState} from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


function App() {
  const [searchText, setSearchText] = useState("");
  const [searchTextChamp, setSearchTextChamp] = useState("");
  const API_KEY = "RGAPI-e8137531-a098-4117-81cc-8f34054ad1a2"
  const [playerData, setPlayerData] = useState({});
  const [masteryData, setMasteryData] = useState([]);
  const [rankedData, setRankedData] = useState([]);
  const [championData, setChampionData] = useState({});
  var rankedsolo;
  var rankedflex;
  var champname;
  var champMaj;
  const opt={
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
 }


  function graph(lp){
  const data = {
    datasets: [{
        data: [100-lp, lp],
        backgroundColor:[
          '#000C66',
          'blue'
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'LP manquant',
      'LP actuel'
  ], 

  };
  return data;
}

  function rechercheChamp(event){
    setChampionData({})
    var APICallString = "http://localhost:3000/champions/"+ searchTextChamp.toLowerCase();
    axios.get(APICallString).then(function(response){
      setChampionData(response.data);
    })
  }

  function rechercheJoueur(event){
    setRankedData([])
    setMasteryData([])
    setPlayerData({})
    var APICallString = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    axios.get(APICallString).then(function (response){
      setPlayerData(response.data);
    APICallString = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+response.data.id+"?api_key="+ API_KEY;
    axios.get(APICallString).then(function(response){
      setRankedData(response.data);
    })
    APICallString = "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + response.data.id + "/top?api_key="+ API_KEY;
    axios.get(APICallString).then(function (response){
      setMasteryData(response.data);
    }) 
  })
  }
  function convert(id)
  {
    switch(masteryData[0].championId){
      case 266 : return "Aatrox";
      case 103 : return "Ahri";
      case 84 : return "Akali";
      case 166 : return "Akshan";
      case 12 : return "Alistar";
      case 32 : return "Amumu";
      case 34 : return "Anivia";
      case 1 : return "Annie";
      case 523 : return "Aphelios";
      case 22 : return "Ashe";
      case 136 : return "Aurelionsol";
      case 268 : return "Azir";
      case 432 : return "Aard";
      case 200 : return "Belveth";
      case 53 : return "Blitzcrank";
      case 63 : return "Brand";
      case 201 : return "Braum";
      case 51 : return "Caitlyn";
      case 164 : return "Camille";
      case 69 : return "Cassiopeia";
      case 31 : return "Chogath";
      case 42 : return "Corki";
      case 122 : return "Darius";
      case 131 : return "Diana";
      case 119 : return "Draven";
      case 36 : return "Drmundo";
      case 245 : return "Ekko";
      case 60 : return "Elise";
      case 28 : return "Evelynn";
      case 81 : return "Ezreal";
      case 9 : return "Fiddlesticks";
      case 114 : return "Fiora";
      case 105 : return "Fizz";
      case 3 : return "Galio";
      case 41 : return "Gangplank";
      case 350 : return "Yuumi";
      case 86 : return "Garen";
      case 150 : return "Gnar";
      case 79 : return "Gragas";
      case 104 : return "Graves";
      case 887 : return "Gwen";
      case 120 : return "Hecarim";
      case 74 : return "Heimerdinger";
      case 420 : return "Illaoi";
      case 39 : return "Irelia";
      case 427 : return "Ivern";
      case 40 : return "Janna";
      case 59 : return "JarvanIV";
      case 24 : return "Jax";
      case 126 : return "Jayce";
      case 202 : return "Jhin";
      case 222 : return "Jinx";
      case 145 : return "Kaisa";
      case 429 : return "Kalista";
      case 43 : return "Karma";
      case 30 : return "Karthus";
      case 38 : return "Kassadin";
      case 55 : return "Katarina";
      case 10 : return "Kayle";
      case 141 : return "Kayn";
      case 85 : return "Kennen";
      case 121 : return "Khazix";
      case 203 : return "Kindred";
      case 240 : return "Kled";
      case 96 : return "KogMaw";
      case 897 : return "KSante";
      case 7 : return "Leblanc";
      case 64 : return "LeeSin";
      case 89 : return "Leona";
      case 876 : return "Lillia";
      case 127 : return "Lissandra";
      case 236 : return "Lucian";
      case 117 : return "Lulu";
      case 99 : return "Lux";
      case 54 : return "Malphite";
      case 90 : return "Malzahar";
      case 57 : return "Maokai";
      case 11 : return "MasterYi";
      case 21 : return "MissFortune";
      case 62 : return "Wukong";
      case 82 : return "Mordekaiser";
      case 267 : return "Nami";
      case 25 : return "Morgana";
      case 75 : return "Nasus";
      case 111 : return "Nautilus";
      case 518 : return "Neeko";
      case 76 : return "Nidalee";
      case 895 : return "Nilah";
      case 56 : return "Nocturne";
      case 20 : return "Nunu";
      case 2 : return "Olaf";
      case 61 : return "Orianna";
      case 516 : return "Ornn";
      case 80 : return "Pantheon";
      case 78 : return "Poppy";
      case 555 : return "Pyke";
      case 246 : return "Qiyana";
      case 133 : return "Quinn";
      case 497 : return "Rakan";
      case 33 : return "Rammus";
      case 421 : return "RekSai";
      case 526 : return "Rell";
      case 888 : return "Renata";
      case 58 : return "Renekton";
      case 107 : return "Rengar";
      case 92 : return "Riven";
      case 68 : return "Rumble";
      case 13 : return "Ryze";
      case 360 : return "Samira";
      case 113 : return "Sejuani";
      case 235 : return "Senna";
      case 147 : return "Seraphine";
      case 875 : return "Sett";
      case 35 : return "Shaco";
      case 98 : return "Shen";
      case 102 : return "Shyvana";
      case 27 : return "Singed";
      case 14 : return "Sion";
      case 15 : return "Sivir";
      case 72 : return "Skarner";
      case 37 : return "Sona";
      case 16 : return "Soraka";
      case 50 : return "Swain";
      case 517 : return "Sylas";
      case 134 : return "Syndra";
      case 223 : return "TahmKench";
      case 163 : return "Taliyah";
      case 91: return "Talon";
      case 44 : return "Taric";
      case 17 : return "Teemo";
      case 412 : return "Thresh";
      case 18 : return "Tristana";
      case 48 : return "Trundle";
      case 23 : return "Tryndamere";
      case 4 : return "TwistedFate";
      case 29 : return "Twitch";
      case 77 : return "Udyr";
      case 6 : return "Urgot";
      case 110 : return "Varus";
      case 67 : return "Vayne";
      case 45 : return "Veigar";
      case 161 : return "Velkoz";
      case 711 : return "Vex";
      case 254 : return "Vi";
      case 234 : return "Viego";
      case 112 : return "Viktor";
      case 8 : return "Vladimir";
      case 106 : return "Volibear";
      case 19 : return "Warwick";
      case 498: return "Xayah";
      case 101 : return "Xerath";
      case 5 : return "XinZhao";
      case 157 : return "Yasuo";
      case 777 : return "Yone";
      case 83 : return "Yorick";
      case 154 : return "Zac";
      case 238: return "Zed";
      case 221 : return "Zeri";
      case 115 : return "Ziggs";
      case 26 : return "Zilean";
      case 142 : return "Zoe";
      case 143 : return "Zyra";
      default : return "Aatrox";
    }
  }
  function firstlettmaj(champname)
  {
    var x = champname;
    champMaj = x[0].toUpperCase() + champname.slice(1);
    return champMaj;
  }
  return (
    <div className="App">
        <div className="container">
          <h1>LoLStats</h1>
          <h2>Entrez le pseudo d'un joueur</h2>
          <div>
          <input type="text" onChange={e => setSearchText(e.target.value)}></input>
          <button onClick={e=>rechercheJoueur(e)}>Chercher</button>
          </div>
        </div>
        {JSON.stringify(playerData) === '{}' ||JSON.stringify(rankedData) === '[]' ||JSON.stringify(masteryData) === '[]'?
          <p>Joueur introuvable</p>  
          :
          <div id = "widget">
            <script>
              {rankedsolo=rankedData[1].tier.toLowerCase()}
              {rankedflex=rankedData[0].tier.toLowerCase()}
            </script>

            <div id="textwidget">
              <p>{playerData.name}</p>
              <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/"+playerData.profileIconId+".png"} alt="Icon"></img>
              <p>Niveau {playerData.summonerLevel}</p>
            </div>
            <div id="textwidget">
              <script>
              {champname=convert(masteryData[0].championId)}
              </script>
              <p>{champname.toUpperCase()}</p>
              <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/"+champname+".png"} alt="Icon"></img>
              <p>{masteryData[0].championPoints} pts</p>
            </div>
            <div>
            <img className="imgRanked" src= {"https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-"+rankedsolo+".png"} alt="ranked solo icon"></img>
              <p>Ranked Solo/Duo : {rankedData[1].tier} {rankedData[1].rank} {rankedData[1].leaguePoints} LP</p>
            </div>
            <div>
            <img className="imgRanked" src= {"https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-"+rankedflex+".png"} alt="ranked solo icon"></img>
              <p>Ranked Flex : {rankedData[0].tier} {rankedData[0].rank} {rankedData[0].leaguePoints} LP</p>
            </div>
            <div>
              <Pie id="graph" data={graph(rankedData[1].leaguePoints)} options={opt}/>
            </div>
            <div>
              <h3>ChampFinder</h3>
              <input type="text" onChange={e => setSearchTextChamp(e.target.value)}></input>
              <button onClick={e=>rechercheChamp(e)}>Chercher</button>
              {JSON.stringify(championData)==='{}' ?
              <p>Champion introuvable</p>
              :
              <section>
              <img width="75" height="75" src={"http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/"+firstlettmaj(championData.champion.champ)+".png"} alt="Icon"></img>
              <p>{firstlettmaj(championData.champion.champ)} est sorti en {championData.champion.yearOfRelease}</p>  
              </section>
            }
            </div>
          </div>
}
    </div>
  );
}

export default App;
