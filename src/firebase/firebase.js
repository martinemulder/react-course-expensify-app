import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAsIvm_MlM5eKZwfKcPLS5T2KKFM9gSsUc",
  authDomain: "expensify-47d57.firebaseapp.com",
  databaseURL: "https://expensify-47d57.firebaseio.com",
  projectId: "expensify-47d57",
  storageBucket: "expensify-47d57.appspot.com",
  messagingSenderId: "577438178315"
};

firebase.initializeApp(config);

const database = firebase.database();
export { firebase, database as default };

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 9834753530
// });

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// Save array once
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
//     console.log(expenses)
//   });

// Save array when expenses changes
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses)
//   });
