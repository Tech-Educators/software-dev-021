//arrays
// storing our array in a variable

//structure of an array
let myArray = ["item", "item", "item", "item", "item", "item"];

//examples

let TechEdStaff = [
  "Manny",
  "Joe",
  "Nicky",
  "Bertie",
  "Jez",
  "Frankie",
  "Sam",
  "Rich",
];
let myFavouriteThings = ["the sea", 9, "nature", false, null]; //an array can have multiple data types stored in it

//length
//the length is the total amount of items in an array
//TechEdStaff has 7 items --> the length is 7

//we can access the length property -->
TechEdStaff.length;

console.log(TechEdStaff.length);
console.log(myFavouriteThings.length);

//index
//index is a value (number) that represents in which position an item is
//the index value starts at zero --> the first item in the array is assigned the value zero
TechEdStaff[0]; // "Manny"
TechEdStaff[3]; // "Bertie"
console.log(TechEdStaff[0]);
//what is the index number of the last item in the array?
console.log(TechEdStaff.length - 1);
console.log(TechEdStaff[TechEdStaff.length - 1]); //TechEdStaff[7]
