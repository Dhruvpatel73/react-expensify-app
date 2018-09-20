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

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.apiKey,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     });
// // database.ref('expenses').push({
// //     descitpion: 'Grocery Bill',
// //     note: 'Bill',
// //     amount: 49,
// //     createdAt: ''
// // });

// // database.ref('expenses').push({
// //     descitpion: 'Internet Bill',
// //     note: 'iBill',
// //     amount: 109,
// //     createdAt: ''
// // });

// // database.ref('expenses').push({
// //     descitpion: 'laundrament',
// //     note: 'laundry',
// //     amount: 10,
// //     createdAt: ''
// // });

// // database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }); 

// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e);
// //     });

// // database.ref().set({
// //     name: 'Dhruv Patel',
// //     age: 25,
// //     stresslevel: 6,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Jersey City',
// //         county: 'United States'
// //     }
// // }).then(() => {
// //     console.log('data is saved');
// // }).catch((e) => {
// //     console.log('This is failed..', e );
// // });

// // database.ref().update({
// //     stresslevel: 9,
// //     'job/company': 'amazon',
// //     'location/city': 'Seattle'
// // });