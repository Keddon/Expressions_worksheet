/**
 * Created by keddoncampbell on 2/12/15 Expression Worksheet.
 */

var sparkyAge; //this is Sparky's age in human age
var growthRate = 7; //this is the rate difference which is 7 times faster
var dogAge; //this is Sparky's age in dog years

console.log("lets assume that Skarky is 6 years old in human years");
sparkyAge = 6;
dogAge = sparkyAge * growthRate; //calculates sparky's age.
console.log(dogAge);

console.log("Sparky is years"+" "+sparkyAge +" "+ "in human years, but is"+" "+dogAge +" "+ "in dog years");