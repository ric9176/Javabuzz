describe('Javabuzz', function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  it("should know if a number is divisible by 3", function() {
    expect(javabuzz.play(3)).toEqual("Fizz");
  });

  it("should know if a number is divisible by 5", function() {
    expect(javabuzz.play(5)).toEqual("Buzz");
  });

  it("should know if a number is divisible by 3 and 5", function() {
    expect(javabuzz.play(15)).toEqual("FizzBuzz");
  });

  it("should know if a number is not divisible by 3 or 5", function() {
    expect(javabuzz.play(11)).toEqual(11);
  });

  describe("#isDivisibleBy", function(){
    it("should return true if number is divisible by divider", function() {
      expect(javabuzz.isDivisibleBy(25, 5)).toEqual(true);
    });
  });

});
