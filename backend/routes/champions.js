var express = require("express");
var router = express.Router();
var _ = require('lodash');

let champions =[];


// Make a request for a movie
  // handle success
    
    champions.push({
      champ: "aatrox",
      yearOfRelease: "2013",
    });

    champions.push({
        champ:"ahri",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"akali",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"akshan",
        yearOfRelease: "2021",
    });
    champions.push({
        champ:"alistar",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"amumu",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"anivia",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"annie",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"aphelios",
        yearOfRelease: "2019",
    });
    champions.push({
        champ:"ashe",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"aurelion sol",
        yearOfRelease: "2016",
    });
    champions.push({
        champ:"azir",
        yearOfRelease: "2014",
    });
    champions.push({
        champ:"bard",
        yearOfRelease: "2015",
    });
    champions.push({
        champ:"blitzcrank",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"brand",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"braum",
        yearOfRelease: "2014",
    });
    champions.push({
        champ:"caitlyn",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"camille",
        yearOfRelease: "2016",
    });
    champions.push({
        champ:"cassiopeia",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"chogath",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"corki",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"darius",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"diana",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"drmundo",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"draven",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"ekko",
        yearOfRelease: "2015",
    });
    champions.push({
        champ:"elise",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"evelynn",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"ezreal",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"fiddlesticks",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"fiora",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"fizz",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"galio",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"gangplank",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"garen",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"gnar",
        yearOfRelease: "2014",
    });
    champions.push({
        champ:"gragas",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"graves",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"gwen",
        yearOfRelease: "2021",
    });
    champions.push({
        champ:"hecarim",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"heimerdinger",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"illaoi",
        yearOfRelease: "2015",
    });
    champions.push({
        champ:"irelia",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"ivern",
        yearOfRelease: "2016",
    });
    champions.push({
        champ:"janna",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"jarvan",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"jax",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"jayce",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"jhin",
        yearOfRelease: "2016",
    });
    champions.push({
        champ:"jinx",
        yearOfRelease: "2013",
    });
    champions.push({
        champ:"kaisa",
        yearOfRelease: "2018",
    });
    champions.push({
        champ:"kalista",
        yearOfRelease: "2014",
    });
    champions.push({
        champ:"karma",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"karthus",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"kassadin",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"katarina",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"kayle",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"kayn",
        yearOfRelease: "2017",
    });
    champions.push({
        champ:"kennen",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"khazix",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"kindred",
        yearOfRelease: "2015",
    });
    champions.push({
        champ:"kled",
        yearOfRelease: "2016",
    });
    champions.push({
        champ:"kogmaw",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"leblanc",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"leesin",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"leona",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"lillia",
        yearOfRelease: "2020",
    });
    champions.push({
        champ:"lissandra",
        yearOfRelease: "2013",
    });
    champions.push({
        champ:"lucian",
        yearOfRelease: "2013",
    });
    champions.push({
        champ:"lulu",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"lux",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"malphite",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"malzahar",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"maokai",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"masteryi",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"missfortune",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"mordekaiser",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"morgana",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"nami",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"nasus",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"nautilus",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"neeko",
        yearOfRelease: "2018",
    });
    champions.push({
        champ:"nidalee",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"nocturne",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"nunu",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"olaf",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"orianna",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"ornn",
        yearOfRelease: "2017",
    });
    champions.push({
        champ:"pantheon",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"poppy",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"pyke",
        yearOfRelease: "2018",
    });
    champions.push({
        champ:"qiyana",
        yearOfRelease: "2019",
    });
    champions.push({
        champ:"quinn",
        yearOfRelease: "2013",
    });
    champions.push({
        champ:"rakan",
        yearOfRelease: "2017",
    });
    champions.push({
        champ:"rammus",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"reksai",
        yearOfRelease: "2014",
    });
    champions.push({
        champ:"rell",
        yearOfRelease: "2020",
    });
    champions.push({
        champ:"renekton",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"rengar",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"riven",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"rumble",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"ryze",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"samira",
        yearOfRelease: "2020",
    });
    champions.push({
        champ:"sejuani",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"senna",
        yearOfRelease: "2019",
    });
    champions.push({
        champ:"seraphine",
        yearOfRelease: "2020",
    });
    champions.push({
        champ:"sett",
        yearOfRelease: "2020",
    });
    champions.push({
        champ:"shaco",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"shen",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"shyvana",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"singed",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"sion",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"sivir",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"skarner",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"sona",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"soraka",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"swain",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"sylas",
        yearOfRelease: "2019",
    });
    champions.push({
        champ:"syndra",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"tahmkench",
        yearOfRelease: "2015",
    });
    champions.push({
        champ:"taliyah",
        yearOfRelease: "2016",
    });
    champions.push({
        champ:"talon",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"taric",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"teemo",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"thresh",
        yearOfRelease: "2013",
    });
    champions.push({
        champ:"tristana",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"trundle",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"tryndamere",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"twistedfate",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"twitch",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"udyr",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"urgot",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"varus",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"vayne",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"veigar",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"velkoz",
        yearOfRelease: "2014",
    });
    champions.push({
        champ:"vex",
        yearOfRelease: "2021",
    });
    champions.push({
        champ:"vi",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"viego",
        yearOfRelease: "2021",
    });
    champions.push({
        champ:"viktor",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"vladimir",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"volibear",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"warwick",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"wukong",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"xayah",
        yearOfRelease: "2017",
    });
    champions.push({
        champ:"xerath",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"xinzhao",
        yearOfRelease: "2010",
    });
    champions.push({
        champ:"yasuo",
        yearOfRelease: "2013",
    });
    champions.push({
        champ:"yone",
        yearOfRelease: "2020",
    });
    champions.push({
        champ:"yorick",
        yearOfRelease: "2011",
    });
    champions.push({
        champ:"yuumi",
        yearOfRelease: "2019",
    });
    champions.push({
        champ:"zac",
        yearOfRelease: "2013",
    });
    champions.push({
        champ:"zed",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"zeri",
        yearOfRelease: "2022",
    });
    champions.push({
        champ:"ziggs",
        yearOfRelease: "2012",
    });
    champions.push({
        champ:"zilean",
        yearOfRelease: "2009",
    });
    champions.push({
        champ:"zoe",
        yearOfRelease: "2017",
    });
    champions.push({
        champ:"zyra",
        yearOfRelease: "2012",
    });
    router.get('/:champ', (req, res) => {
        const { champ } = req.params;
        // Find movie in DB
        const champion = _.find(champions, ["champ", champ]);
      
        if(champion) {
          // Return movie
          res.status(200).json({
            message: 'champion found!',
            champion
          });
        } else {
          res.status(404).json({
            message: 'champion not found!'
          });
        }
      });
console.log(champions);

module.exports = router;
