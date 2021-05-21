import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCd_Gi8ptnTAEwJlcogD8PZXufmHBCHc0I",
  authDomain: "muso-ninjas-1d36d.firebaseapp.com",
  databaseURL: "https://muso-ninjas-1d36d-default-rtdb.firebaseio.com",
  projectId: "muso-ninjas-1d36d",
  storageBucket: "muso-ninjas-1d36d.appspot.com",
  messagingSenderId: "405118197332",
  appId: "1:405118197332:web:3c4da093bf467a591e57c1"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

