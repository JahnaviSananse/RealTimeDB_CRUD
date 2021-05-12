import React from 'react';
import firebase from '@react-native-firebase/app';
import DB from './DB';
import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyAZIH1kf_x_09AIzh7ntVdk4eLBKtzrTCQ',
  authDomain: 'realtimedb-7980f.firebaseapp.com',
  databaseURL: 'https://realtimedb-7980f-default-rtdb.firebaseio.com',
  projectId: 'realtimedb-7980f',
  storageBucket: 'realtimedb-7980f.appspot.com',
  messagingSenderId: '633482430833',
  appId: '1:633482430833:web:c05b7a93a4224597074ed0',
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }
export {firebase, Auth, database};
function config() {
  return <DB />;
}
export default config;
