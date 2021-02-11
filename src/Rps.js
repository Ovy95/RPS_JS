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
    
    rockMethod(computer) {
      if (computer == "Paper"){
        return "Computer wins"
      } 
      return "Player wins"
    }
    paperMethod(computer){
      if (computer == "Scissors"){
        return "Computer wins"
      } 
      return "Player wins"
    }
    scissorsMethod(computer){
      if (computer == "Rock"){
        return "Computer wins"
      } 
      return "Player wins"
    }
   
    playGame(player,computerchoice){
      // "Rock" "Paper" "Scissors"
      if (player == computerchoice) {
        return "Draw"
      }
      if (player == "Rock"){
        return this.rockMethod(computerchoice)
      }
      if (player == "Paper"){
        return this.paperMethod(computerchoice)
      }
      if (player == "Scissors"){
        return this.scissorsMethod(compcomputerchoiceuter)
      }
    }
  }
