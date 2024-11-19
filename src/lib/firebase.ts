import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCiEc1yPaC-Tjdx-_sdC17rabfmB10qwUk",
  authDomain: "zwajo-9b781.firebaseapp.com",
  projectId: "zwajo-9b781",
  storageBucket: "zwajo-9b781.firebasestorage.app",
  messagingSenderId: "710532126927",
  appId: "1:710532126927:web:6430416ca079d55cde3fba",
  measurementId: "G-X1HGCJKKJZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);