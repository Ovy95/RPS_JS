class Rps {

    getRandompick(max) {
      return Math.floor(Math.random() * Math.floor(max)); 
    }

    computerschoice(){
      var selector = this.getRandompick(3)
      var weapons = ["Rock","Paper","Scissors"];
      return weapons[selector]
    }
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
   
    playGame(move){
      var player = move
      // "Rock" "Paper" "Scissors"
      var computer = this.computerschoice()
      
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
