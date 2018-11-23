import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// takes named exports from firebase
// dumps them on vabriable called firebase
// star give acces to all methods of object

// crud: create read update delete
// firebase does not support arrays !!!

// // use database tool
// // write string to database
// // data types: strings, numbers, booleans, objects, arrays

// const database = firebase.database();
// export { firebase, database as default };


// child_remove has event callback

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_change
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added, gets called for all childreen not only the new ones
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// read out data from database
// transform data
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// on does not allow promises
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


// create nodes in the datebase
// database.ref('expenses').push({
// description: 'rent 87657685',
// note: 'dfhnetn',
// amount: 3456543,
// createdAt: 7863246534
// });


// fetch records from database
// firebase creates a new property to the reference
// with unique generated id
// database.ref('notes').push({
//   title: 'to do 2',
//   body: 'go for a run 2'
// });


// access the individual node
// database.ref('notes/-LRa7Wcxlf21TTywIfNi').update({
//   body: 'go for a run 3'
// });
// database.ref('notes/-LRa7IG-COGqTj2mvpgb').remove();


// display real time data base changes
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });


// one time database change
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val); 
//     })
//     .catch((e) => {
//         console.log('error fetching data', e);
// });


// remove entries in the databasae
// database.ref('location/city')
//     .remove()
//     .then(() => {
//     console.log("data was removed");
//   }).catch((e) => {
//     console.log("remove failed: " + e);
// });


// remove entries with set
// database.ref('isSingle').set(null);
// database.ref().set({
//     properties
//     name: 'Andreas Meier',
//     age: 26,
//     level: 7,
//     job: {
//         title: 'developer',
//         company: 'feine-muehle.at'
//     },    
//     isSingle: true,
//     location: {
//         city: 'Vienna',
//         country: 'United States'
//     }
// promise, setup error handler
// }).then(() => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('this failed!', e);
// });


// important: updates are only on the root object
// syntax with slash on childreen
// database.ref().update({
//     level: 9,
//     'job/company': {
//         company: 'amazon',
//     },
//     'location/city': {
//         city: 'Berlin'
//     }
// });



//     job: 'manager',
//     'location/city': {
//     //location: {
//         city: 'Berlin'
//     }

// database.ref('attributes').set({
//     height: 74,
//     weight: 150
// }).then(() => {
//     console.log('second data is saved!');
// }).catch((e) => {
//     console.log('second data set failed!', e);
// });
// console.log('request for data change is ready!');


// set can take any data types to store in db
// set is called by specific location
// database.ref('age').set(27);
// database.ref('location/country').set('Germany');