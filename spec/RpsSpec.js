describe('Rps', function() {
  var rps;

  beforeEach(function() {
    rps = new Rps();
  });

  describe('Checks Winning and Losing methods', function() {
    it('If Computer selects the winning method returns Computer wins', function() {
      expect(rps.paperMethod("Scissors")).toEqual("Computer wins");
      expect(rps.rockMethod("Paper")).toEqual("Computer wins");
      expect(rps.scissorsMethod("Rock")).toEqual("Computer wins");
    });
    it('If Computer selects the losing method returns Player wins', function() {
      expect(rps.paperMethod("Rock")).toEqual("Player wins");
      expect(rps.rockMethod("Scissors")).toEqual("Player wins");
      expect(rps.scissorsMethod("Paper")).toEqual("Player wins");
    });
  })

  describe('Same weapons picked', function() {
    it('Returns a draw', function() {
      expect(rps.playGame('Rock','Rock')).toEqual("Draw");
      expect(rps.playGame('Paper','Paper')).toEqual("Draw")
      expect(rps.playGame('Scissors','Scissors')).toEqual("Draw")
    });
  });

});