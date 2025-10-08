//TypeScript basics
//- the extension of TypeScript files is .ts /

//variables

//TypeScript will infer the data type you store in a variable and it will enforce it --> type inference
//TypeScript has a type system --> guidelines of types, based on the shape of the types
// type annotation --> how we tell the type a variable will store
// (: number)
//data types in TS are similar to the ones in JS --> primitive and complex data types
let myAge: number = 57; // integer, number
myAge = 89;

let myName: string = "Manny";

let isInstructor: boolean = true;

//in complex data types, we also need to specify the types of the inner items
let favouriteColours: string[] = ["purple", "yellow"];
let favouriteFood: Array<string> = ["pizza", "burritos", "waffles"];
let favouriteThings: (number | string | boolean)[] = [7, "sun", false, "water"];
let moreFavouriteThings: Array<string | number | boolean> = [7, "sun", false];

let staff: { staffName: string; location: string; role: string } = {
  staffName: "Bertie",
  location: "super secret",
  role: "TA",
};

//if we have to reuse a data annotation, we could declare it separately as a type
type staffType = {
  staffName: string;
  location: string;
  role: string;
  contract?: string; //optional chaining ?. --> if we want to have a property in our type that may or may not be part of the following objects, we could make it "optional". The optional chaining operator can only be used with objects
};

let staff2: staffType = {
  staffName: "Joe",
  location: "unknown",
  role: "TA",
};

let staff3: staffType = {
  staffName: "Tim",
  location: "unknown",
  role: "course director",
  contract: "full time",
};
//don't overuse type "any"
let myVariable: any = null;

//functions
function add(a: number, b: number) {
  return a + b;
}

// add(1, "2"); //this will error because the b parameter needs a number

//type inference
let thisVariable; //undefined
thisVariable = 6;
thisVariable = "string";
thisVariable = null;

console.log(typeof thisVariable); //when we have an undefined variable, TS will infer type "any"

//union types
//union types are custom types that you can create to have more control over your data

type schoolSubjects = "maths" | "english" | "science" | "pe";

// let mySubjects: schoolSubjects = "spanish"; //this errors because "spanish" is not defined in the schoolSubjects type

let bertiesSubjects: schoolSubjects = "science";

type menu = {
  name: string;
  menuItem: "food" | "drink" | "snack";
  price: number;
  period: "morning" | "afternoon" | "evening";
  customerReview?: string; //optional property
};

const breakfast: menu = {
  name: "breakfast",
  menuItem: "food",
  price: 5,
  period: "morning",
};

//type annotation for an array of objects
//in this case, we have a separate type for our objects (menu), so we need to add the menu type with []
const restaurantMenu: menu[] = [
  {
    name: "breakfast",
    menuItem: "food",
    price: 5,
    period: "morning",
  },
  {
    name: "lunch",
    menuItem: "food",
    price: 10,
    period: "afternoon",
  },
];
