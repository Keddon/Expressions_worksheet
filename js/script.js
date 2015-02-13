/**
 * Created by keddoncampbell on 2/12/15 Expression Worksheet.
 */



    //Sparky The Dog/

var sparkyAge; //this is Sparky's age in human age
var growthRate = 7; //this is the rate difference which is 7 times faster
var dogAge; //this is Sparky's age in dog years

console.log("lets assume that Skarky is 6 years old in human years.");
sparkyAge = 6;
dogAge = sparkyAge * growthRate; //calculates sparky's age.
console.log(dogAge);

console.log("Sparky is years"+" "+sparkyAge +" "+ "in human years, but is"+" "+dogAge +" "+ "in dog years.");




    //Slice Of Pie part 1/


var pizzaSlice = 6;
var partyGoers = 20;
var pizzaOrder = 7;

var totalSlice = pizzaSlice * pizzaOrder;
var eachPerson = totalSlice / partyGoers;
console.log(totalSlice);
console.log(eachPerson);

console.log("Each person ate"+" "+eachPerson+" "+"number of slices.");



    //Slice Of Pie part 2/


var sparkySlice = totalSlice % partyGoers;
console.log(sparkySlice);
console.log("Spartk ate"+" "+ sparkySlice+ " "+ "that night.");


    //Average Shopping Bill/

var groceryArray = [345, 453, 568, 134, 765]; //the list of all five weeks
var groceryTotal = groceryArray[0]+groceryArray[1]+groceryArray[2]+groceryArray[3]+groceryArray[4]; // the total of the 5 weeks
var groceryAverage = groceryTotal/ 5; //the average spent for 5 weeks
console.log(groceryArray);
console.log(groceryTotal);
console.log(groceryAverage);

console.log("You have spent a total of $"+groceryTotal+" on groceries over 5 weeks. That is an average of $"+groceryAverage+" per week");



    //Discounts/

var itemPrice = 40;
var discPercent = 10;
var itemDiscription = "Milk";
var normTax = 1.08375;
var discValue = (discPercent / 100) * itemPrice;
var calcNotax = itemPrice - discValue;
var calcTax = calcNotax * normTax;

console.log("Your "+itemDiscription+" was originally $"+itemPrice+", but after a "+discPercent+"% discount, it is now $"+calcNotax+" without tax and $"+calcTax+"with tax");

