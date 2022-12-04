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
        champ:"dr mundo",
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
