/* 1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and store the result in a variable named 'sum'
 */
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log(sum);

/* 2. Write a 'while' loop that counts from 5 to 1 and stores the numbers in an array name 'countdown'.

*/
let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

/* 3. Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter "stop". 
    Store each tea type in an array named 'teaCollection'.
*/
// let teaCollection = [];
// let favouriteTeaType;
// do {
//    favouriteTeaType = prompt(  //prompt is a browser tool, does not work in node.
//      `Enter your favourite tea type(type "stop" to finish) `
//    );
//   if(favouriteTeaType !== "stop"){
//      teaCollection.push(favouriteTeaType);
//   }

// } while (favouriteTeaType !== "stop");

/* 4. Write a 'do while' loop that adds numbers from 1 to 3 and stores teh result in a variable named 'total;
 */
let k = 1;
let total = 0;
do {
  total += k;
  k++;
} while (k <= 3);
// console.log(total);

/* 5. Write a 'for' loop that multiplies each element in the array '[2, 4, 6] by 2 and stores the result in a new array name 'multipliedNumbers'.
 */
let arr = [2, 4, 6]
let multipliedNumbers = []
for(let i = 0; i<arr.length;i++){
multipliedNumbers.push(arr[i]*2);
}
// console.log(multipliedNumbers);

/* 6. Write a 'for' loop that lists all the cities in the array 
'["Paris", "New York","Tokyo","London"]' and stores  each city in a new array named 'cityList'
 */

let myCity = ["Paris", "New York","Tokyo","London"]
let cityList = [];
for(let i =0; i<myCity.length;i++)
{
  cityList.push(myCity[i])
}
// console.log(cityList);
