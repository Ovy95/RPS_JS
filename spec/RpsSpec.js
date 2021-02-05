describe('Rps', function() {
  var rps;

  beforeEach(function() {
    rps = new Rps();
  });

  describe('Computers picks a weapon', function() {
    //Stubbing needed
    it('Expected choosen weapon to be the same', function() {
      // expect(rps.computerschoice()).toContain("Rock Paper Scissors");
      // expect(rps.computerschoice()).toContain("Paper");
      // expect(rps.computerschoice()).toContain("Scissors");
    });
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



  

 

});