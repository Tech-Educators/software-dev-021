//objects
//data containers for more complex data

//structure
// we use {} for objects
//each property has two parts --> key: value
let city = {
  cityName: "Norwich",
  population: 250000,
  hasTrainStation: true,
};

console.log(city);

//TODO: see the value of cityName in the console
console.log(city.cityName); // "Norwich"

//TODO: see the value of population in the console
console.log(city.population);

//TODO: Add a new property for country
city.country = "UK";
console.log(city);

let newCity = {
  cityName: "Kingston-Upon-Hull",
  population: 250000,
  hasTrainStation: true,
  coffeeShops: ["Great Coffee", "Amazing Coffee", "Just Average Coffee"],
  companies: [
    { companyName: "Tech Educators", location: "some building" },
    { companyName: "Tech Providers", location: "another building" },
  ],
};

console.log(newCity.coffeeShops);
console.log(newCity.coffeeShops[1]);

//TODO: I want to see Tech Educators in the console
console.log(newCity.companies[0].companyName);
