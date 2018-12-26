// import * as firebase from 'firebase';

import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyB5FNr-XW9kEpjiWOxDrkN8dd8gBwr9R9c",
  authDomain: "expensify-23277.firebaseapp.com",
  databaseURL: "https://expensify-23277.firebaseio.com",
  projectId: "expensify-23277",
  storageBucket: "expensify-23277.appspot.com",
  messagingSenderId: "970689875114"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
//   name: 'David Borde',
//   age: 56,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Gogo'
//   },
//   location: {
//     city: 'Chicago',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// const dataSub = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Mike',
//     'job/company': 'Google',
//     'location/city': 'Mountain View'
//   });
// }, 3500);

// setTimeout(() => {
//   database.ref().update({
//     name: 'Michael',
//     'job/company': 'Google',
//     'location/city': 'Mountain View'
//   });
// }, 7500);

// setTimeout(() => {
//   database.ref().off('value', dataSub);
// }, 10500);

// setTimeout(() => {
//   database.ref().update({
//     name: 'Mikey',
//     'job/company': 'Googley',
//     'location/city': 'Mountain Viewy'
//   });
// }, 13500);

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // // database.ref('age').set(57);
// // // database.ref('location/city').set('Irving Park');

// // database.ref('attributes').set({
// //   height: 72,
// //   weight: 220
// // }).then(() => {
// //   console.log('Second set call worked!');
// // }).catch((e) => {
// //   console.log('Things didn\'t work for the second error', e);
// // });

// // database.ref('isSingle')
// //   .set(null);

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Remove isSingle succeeded.');
// //   }).catch((error) => {
// //     console.log('Remove isSingle failed: ', error.message);
// //   });

// // database.ref('expenses').push(
// //   {
// //     description: 'gum',
// //     note: 'I like gum',
// //     amount: 1250,
// //     createdAt: '12172018'
// //   }
// // );
// // database.ref('expenses').push(
// //   {
// //     description: 'pop',
// //     note: 'I like pop',
// //     amount: 2251,
// //     createdAt: '12172018'
// //   }
// // );
// // database.ref('expenses').push(
// //   {
// //     description: 'hoagie',
// //     note: 'I like hoagies',
// //     amount: 5250,
// //     createdAt: '12172018'
// //   }
// // );
