function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
 
  console.log(gameObject());

  function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
    return null; 
}
 
  console.log(numPointsScored("Jeff Adrien"));
  console.log(numPointsScored("Alan Anderson")); 

  function shoeSize(playerName){
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
    return null; 
  }

  console.log(shoeSize("Jeff Adrien"));
  console.log(shoeSize("Alan Anderson")); 

  function teamColors(teamName){
    const game = gameObject();
    for( const teamkey in game){
        const team = game[teamkey];
        if(team.teamName === teamName){
           return team.teamColors;  
        }
    }
    return null;
  }
console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Alan Anderson")); 

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  
  console.log(teamNames()); 


  function playerNumbers(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      if (team.teamName === teamName) {
        const players = team.players;
        return Object.values(players).map(player => player.number);
      }
    }
    return null; 
  }
  
  
  console.log(playerNumbers("Brooklyn Nets"));
  console.log(playerNumbers("Charlotte Hornets")); 


  function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
    return null; 
  }
  
  console.log(playerStats("Alan Anderson"));
  
  
  console.log(playerStats("Ben Gordon"));

  function bigShoeRebounds() {
    let maxShoeSize = 0;
    let playerWithMaxShoeSize;
    const game = gameObject();
  
    
    for (const teamKey in game) {
      const team = game[teamKey];
      const players = team.players;
      for (const playerName in players) {
        const player = players[playerName];
        if (player.shoe > maxShoeSize) {
          maxShoeSize = player.shoe;
          playerWithMaxShoeSize = player;
        }
      }
    }
  
    
    return playerWithMaxShoeSize.rebounds;
  }
  
  
  console.log(bigShoeRebounds()); // Output: 12
  