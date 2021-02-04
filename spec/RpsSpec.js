describe('Rps', function() {
  var rps;

  beforeEach(function() {
    rps = new Rps();
  });

  describe('Player picks a weapon', function() {

    it('Expected choosen weapon to be the same', function() {
      expect(rps.player("R")).toEqual("Rock");
      expect(rps.player("P")).toEqual("Paper");
      expect(rps.player("S")).toEqual("Scissors");

    });

    it('Checks for invalid moves', function() {
      expect(rps.player()).toEqual("Invalid move");
    });
  
  });


  describe('Computers picks a weapon', function() {
    //Stubbing needed
    it('Expected choosen weapon to be the same', function() {
      // expect(rps.computersChoose()).toEqual("Rock");
      // expect(rps.computersChoose()).toEqual("Paper");
      // expect(rps.computersChoose()).toEqual("Scissors");
    });
  
  });

  

 

});