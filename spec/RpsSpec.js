

describe('Rps', function() {
  var rps;

  beforeEach(function() {
    rps = new Rps();
  });


  describe('Checks for Computer Wins', function() {

    it(" Rock loses to Paper", function() {
      expect(rps.outcomes(['Rock'],['Paper'])).toEqual('CPU WINS');
    });
    it(" Paper loses to Scissors", function() {
      expect(rps.outcomes(['Paper'],['Scissors'])).toEqual('CPU WINS');
    });
    it(" Scissors loses to Rock", function() {
      expect(rps.outcomes(['Scissors'],['Rock'])).toEqual('CPU WINS');
    });
    
  });


  describe('Checks for Player 1 Wins', function() {

    it("Rock beats Scissors", function() {
      expect(rps.outcomes(['Rock'],['Scissors'])).toEqual('PLAYER 1 WINS');
    });

    it("Paper beats Rock", function() {
      expect(rps.outcomes(['Paper'],['Rock'])).toEqual('PLAYER 1 WINS');
    });

    it("Scissors beats Paper", function() {
      expect(rps.outcomes(['Scissors'],['Paper'])).toEqual('PLAYER 1 WINS');
    });
  });

  describe('Checks for Draws', function() {

    it("Rock vs Rock", function() {
      expect(rps.outcomes(['Rock'],['Rock'])).toEqual('DRAW');
    });

    it("Paper vs Paper", function() {
      expect(rps.outcomes(['Paper'],['Paper'])).toEqual('DRAW');
    });

    it("Scissors vs Scissors", function() {
      expect(rps.outcomes(['Scissors'],['Scissors'])).toEqual('DRAW');
    });
  });


  



});