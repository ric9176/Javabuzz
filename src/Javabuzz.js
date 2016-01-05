function Javabuzz() {

};

Javabuzz.prototype.play = function (number) {
  if (this.isDivisibleBy(number, 3) && this.isDivisibleBy(number, 5)) {
    return "FizzBuzz";
  } else if (this.isDivisibleBy(number, 5)) {
    return "Buzz";
  } else if (this.isDivisibleBy(number, 3)) {
    return "Fizz";
  } else {
    return number;
  }
};

Javabuzz.prototype.isDivisibleBy = function (number, divider) {
  if (number % divider === 0) {
    return true
  };
};
