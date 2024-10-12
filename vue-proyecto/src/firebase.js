import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC7V2FG5RD9fcDk01kIcf9-vWcXxW2ihTo',
  authDomain: 'horarios-6c098.firebaseapp.com',
  projectId: 'horarios-6c098',
  storageBucket: 'horarios-6c098.appspot.com',
  messagingSenderId: '272469144397',
  appId: '1:272469144397:web:c067da4d195934ce4afd04',
  measurementId: 'G-TNZFYLNS1D'
}

// Inicializa Firebase
const app = initializeApp(firebaseConfig)

// Inicializa Firestore
const db = getFirestore(app)

export { db } // Aquí estás exportando db, no database
