class Rps {
 
  player(move){
    var R = "Rock"
    var P = "Paper"
    var S = "Scissors"
    if (move == "R"){
    return R
    }else if (move == "P"){
      return P
    }
    else if (move == "S"){
      return S
    }else {
      return "Invalid move"
    }
  }
//This could have an argument of gametype 
  getRandompick(max) {
    return Math.floor(Math.random() * Math.floor(max)); 
  }
// This is going to return a String value of the choosen "weapon"
  computersChoose(){
    console.log()
    var selector = this.getRandompick(3)
    console.log(selector)
    var weapons = ["Rock","Paper","Scissors"];
    return weapons[selector]
  }



}