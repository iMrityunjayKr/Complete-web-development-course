/*
1. Declare an array name 'teaFlavors' that contains the strings "greeen tea", "black tea", and "oolong tea".
Acess the first element of the array and store it in a variable name 'firstTea'.
*/

let teaFlavors = ["oolong tea", "black tea", "oolong tea"];

let teaFl = new Array("oolong tea", "black tea", "oolong tea");

let firstTea = teaFlavors[0];
// console.log(firstTea);

/* 
2. Declare an array name 'cities' containing "London", "Tokyo", "Paris" and "New York".
Access the third elemnent from the array and store them.

 */

let cities = ["London", "Tokyo", "Paris", "New York"];

const favouriteCity = cities[2];

/* 
3. You have an array named 'teaTypes' containing "herbal tea", "white tea", and "masala chai".
change teh second element of the array to "jasmine tea"
 */
let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

// console.log(teaTypes);

/* 
4.Declare an array name 'citiVisited' containing "Mumbai" and "Sydney".
  Add "Berlin" to the array using the 'push' method.
*/

let citiVisited = ["Mumbai", "Sydney"];
citiVisited.push("Berlin");

// console.log(citiVisited);

/* 5.You have an array name 'teaOrders' with "chai", "iced tea", "matcha", "earl grey".
Remove the last element of the array usign the 'pop' method and store it in a variable name 'lastOrder'.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
lastOrder = teaOrders.pop();
// console.log(lastOrder);

/* 6. You have an array name 'popularTeas' containing "green tea", "oolong tea", "chai".
Create a soft copy of this array named 'softcopyTeas'.
 */

let popularTeas = ["green tea", "oolong tea", "chai"];
popularTeas.pop();
let softcopyTeas = popularTeas; // this is called softcopy - that means changes in the popularTea will also effect softcopyTeas and vice versa.

/* 7. You have an array named 'topCities' containing "Berlin", "Singapore", and "New Your"
  Create a hard copy of this array name 'hardCopyCities'.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
hardCopyCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);

/*  8. You have two arrays 'europeanCities' containing "Paris", "Rome" and 'asianCities' containing "Tokyo", "Bangkok"
Merge these two arrays into a new arry named 'worldCities'.
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

let worldCities_old = europeanCities + asianCities; // it converts both array into a string
let worldCities_oldd = [europeanCities, asianCities]; // it creates 2-D array.

let worldCities_worksfine = europeanCities.concat(asianCities); // this does the job

let worldCities = [...europeanCities, ...asianCities]; // this also does the job
console.log(worldCities);

/* 9. You have an array name 'teaMenu' containing   "oolong tea", "green tea", "earl grey"
Find length of the array and store it in a variable name 'menuLength'. 
*/

let teaMenu = ["oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

/* . You have an array name 'cityBucketList' containing "kyoto", "London", "Cape Town", "Vancouver".

check if "London" is in the array and store the result in a variable name 'isLondonInList'

*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]

let isLondonInList = cityBucketList.includes("london")

console.log(isLondonInList);
