var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

console.log(groceries.length);

var deleteDuplicates = function (list) {
  var cleanList = [];
  for (const item of list) {
    if(!cleanList.includes(item)){
      // if the new array does not have the item, then put item into the end of the new array
      cleanList.push(item);
    }
  } // end of for loop
  return cleanList;
};

console.log(deleteDuplicates(groceries));

var newGroceries = deleteDuplicates(groceries);
console.log(newGroceries.length);

console.log(`This week's shopping list: `);
newGroceries.forEach((element, index) => {
  console.log(`#${index + 1} ${element}`);
});