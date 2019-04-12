const stock = [
  { name: 'Cake', price: 3 },
  { name: 'Lemons', price: 2 },
  { name: 'Baked Beans', price: 1 },
  { name: 'Milk', price: 1 },
  { name: 'Baked Beans', price: 1 },
  { name: 'Cheese', price: 3 },
  { name: 'Lemons', price: 2 }
]

// Create a new array with the names of the items. The array should not contain any duplicates.

const names = stock.map(item => item.name);
const uniqueNames = names.filter((name, index, array) => {
  return array.indexOf(name) === index;
});

const names = stock.map((item) => {
  return item.name
});
const namesSet = new Set(names);
const namesArray = Array.from(namesSet)


// Someone buys one can of backed beans, remove the item from the stock.

const foundItem = stock.find((item) => {
  return item.name === 'Baked Beans'
})

const indexToSplice = stock.indexOf(foundItem);
stock.splice(indexToSplice, 1)

console.log(stock);

// Lemons are half priced. Go through the stock and modify

stock.forEach((item) => {
  if(item.name === 'Lemons'){
    item.price /= 2;
  }
})

console.log(stock);
