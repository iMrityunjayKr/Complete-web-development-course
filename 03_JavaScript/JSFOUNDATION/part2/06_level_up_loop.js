/* 1. Write a 'for' loop that loops through the array '["green tea", "black tea", "chai", "oolong tea"]'
and stop the loop when it finds "chai"
Store all teas before '"chai"' in a new array named 'selectedTeas'.
 */
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log( selectedTeas);

/* 2. Write a 'for' loop that loops through the array '["London", "New York", "Paris", "Berlin"]' and skips "Paris".
Store the other cities in a new array named 'visitedCities'.
 */

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris" || cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}

// console.log(visitedCities);

/* 3. Use a 'for-of' loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found.
Store the numbers before '4' in an array named 'smallNumbers'.
 */

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

/* Use a for-of loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip "herabal tea" 
Store the other teas in an array name 'preferredTeas.
*/

let tea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const index of tea) {
  if (index === "herbal tea") {
    continue;
  }
  preferredTeas.push(index);
}
// console.log(preferredTeas);

/* 5. User a for-in loop to loop through an object containing city populations.
Stop the loop when the population of "Berlin"  is found and store all previous cities population in a new object name 'cityPopulation'.

let citiesPopulation = {
"London": 8900000,
"New York":8400000,
"Paris": 2200000,
"Berlin": 3500000
}
*/
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulation = {};

for (const city in citiesPopulation) {
  // key = value
  if (city === "Berlin") {
    break;
  }
  cityPopulation[city] = citiesPopulation[city];
}
// console.log(cityPopulation);

/* 6. Use a 'for-in' loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object 'largeCities'.
let worldCities = {
"Sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris":2200000
}  */

let worldCities = {
  "Sydney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000,

};
let largeCities = {}

for (const city in worldCities) {
  if(worldCities[city]<3000000)
  {
    continue;
  }
  largeCities[city] = worldCities[city]
  
}
// console.log(largeCities);

/* 7. Write a 'forEach' loop that iterates through the array ["earl grey", "green tea", "chai","oolong tea"].
Stop the loop when "chai" os found, and store all previous tea types in an array name 'availableTeas'.
*/
let teaType = ["earl grey", "green tea", "chai","oolong tea"]
let availableTeas = []

teaType.forEach(function(tea){
  if(tea === "chai"){
    return;
  }
  availableTeas.push(tea)
});
// console.log(availableTeas);

/* 8. Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
Skip "Sydney" and store the other cities in a new array named 'travelledCities'.
*/

let bucketList = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = []
bucketList.forEach((city) =>{
  if(city === "Sydney")
  {
    return
  }
  travelledCities.push(city)
}
)// console.log(travelledCities);

/* 9. Write a for loop that iterates through the array [2, 5, 7, 9] 
Skip the value '7' and multiply rest by 2. Store the results in a new array named 'doubledNumbers'.
*/
let numArr = [2, 5, 7, 9]
let doubledNumbers = [];
for(let i =0; i<numArr.length;i++){
  if (numArr[i]=== 7 )
  {
    continue;
  }
  doubledNumbers.push((numArr[i] * 2))
  
}
// console.log(doubledNumbers);

/* 10. Use a 'for-of' loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
and stop when the length of the current tea name is greater than 10. Store teh teas iterated over in an array name 'shortTeas'.
*/
let chai = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = []
for (const tea of chai) {
  if (tea.length > 10)
  {
    break;
  }
  shortTeas.push(tea)
}
console.log(shortTeas);
