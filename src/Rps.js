class Rps {
 
  //This could have an argument of gametype 
    getRandompick(max) {
      return Math.floor(Math.random() * Math.floor(max)); 
    }
  // This is going to return a String value of the choosen "weapon"
    computersChoose(){
      var selector = this.getRandompick(3)
      var weapons = ["Rock","Paper","Scissors"];
      return weapons[selector]
    }
  
    rockMethod(computer) {
      if (computer == "Paper"){
        return "Computer wins"
      } else {
          return "Player wins"
      }
    }
    
    paperMethod(computer){
      if (computer == "Scissors"){
        return "Computer wins"
      } else {
          return "Player wins"
      }
    }
    scissorsMethod(computer){
      if (computer == "Rock"){
        return "Computer wins"
      } else {
          return "Player wins"
      }
    }
    //          rps = new Rps()
    //          rps.playGame("Rock")
    //          rps.playGame("Paper")
    //          rps.playGame("Scissors")
  
    playGame(move){
      var player = move
      // "Rock" "Paper" "Scissors"
      var computer = this.computersChoose()
      
      if (player == computer) {
        return "Draw"
      }
      if (player == "Rock"){
        return this.rockMethod(computer)
      }
      if (player == "Paper"){
        return this.paperMethod(computer)
      }
      if (player == "Scissors"){
        return this.scissorsMethod(computer)
      }
    }
  }