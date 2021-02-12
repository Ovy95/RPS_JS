class Rps {

    getRandompick(max) {
      return Math.floor(Math.random() * Math.floor(max)); 
    }
    computerschoice(){
      var selector = this.getRandompick(3)
      var weapons = ["Rock","Paper","Scissors"];
      return weapons[selector]
    }
    computerchoice = this.computerschoice()
    
    outcomes([playerWeapon],[computerchoice]) {
      var game ={
        Rock:    {Rock:"DRAW",          Paper:"CPU WINS",     Scissors:"PLAYER 1 WINS"},
        Paper:   {Rock:"PLAYER 1 WINS", Paper:"DRAW",         Scissors:"CPU WINS"},
        Scissors:{Rock:"CPU WINS",      Paper:"PLAYER 1 WINS",Scissors:"DRAW"}
      }
      return game[playerWeapon][computerchoice]

    }

    
  }
