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
  
    rockMethod(player,computer) {
      if (player == "Rock" && computer == "Paper"){
        return "Computer wins"
      } else {
          return "Player wins"
      }
    }
    
    paperMethod(player,computer){
      if (player == "Paper" && computer == "Scissors"){
        return "Computer wins"
      } else {
          return "Player wins"
      }
    }
    scissorsMethod(player,computer){
      if (player == "Scissors" && computer == "Rock"){
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
        return this.rockMethod(player,computer)
      }
      if (player == "Paper"){
        return this.paperMethod(player,computer)
      }
      if (player == "Scissors"){
        return this.scissorsMethod(player,computer)
      }
    }
  }