import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDFB8Su9GAnWJoF7LXOa4aLD6qxgwKwuo",
  authDomain: "fluento-ai-web.firebaseapp.com",
  projectId: "fluento-ai-web",
  storageBucket: "fluento-ai-web.firebasestorage.app",
  messagingSenderId: "125465765061",
  appId: "1:125465765061:web:0331cbeaa78868ca2a3cac",
  measurementId: "G-80ST7TFD0Z"
};

// Initialize Firebase only if it hasn't been initialized already (useful for Next.js SSR)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { app, db };
