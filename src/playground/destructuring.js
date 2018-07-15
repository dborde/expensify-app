// Object destructuring
// const person = {
//   name: 'David',
//   age: 56,
//   location: {
//     city: 'Chicago',
//     temp: 92
//   }
// };

// const {
//   name: firstName = 'Anonymous',
//   age
// } = person;

// console.log(`${firstName} is ${age}.`);

// const {
//   city,
//   temp: temperature
// } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   titile: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {
//   name: publisherName = 'Self-Published'
// } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philedelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`you are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
