/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let outputTransaction = {};
  transactions.forEach(transaction => {
    if(outputTransaction[transaction.category]) {
      outputTransaction[transaction.category] = outputTransaction[transaction.category] + transaction.price;
    } else {
      outputTransaction[transaction.category] = transaction.price;
    }
  });

  
  return Object.keys(outputTransaction).map(category => {
    return { category: category,
      totalSpent: outputTransaction[category]}
  });
}

const findByItems = (eq) => (arr) => arr.filter(
  (x, i) => arr.find((y, j) => i !== j && eq(x, y))
)

module.exports = calculateTotalSpentByCategory;
