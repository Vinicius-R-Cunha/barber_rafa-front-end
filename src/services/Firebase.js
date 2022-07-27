import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import * as api from "../services/api";

const firebaseConfig = {
  apiKey: "AIzaSyBnyLKvrtUZGud6UOn6kNY3Y3-cQsr9OeU",
  authDomain: "barber-rafa.firebaseapp.com",
  projectId: "barber-rafa",
  storageBucket: "barber-rafa.appspot.com",
  messagingSenderId: "190606916580",
  appId: "1:190606916580:web:b44a9786f281f1c4b2e5f1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export async function signInWithGoogle(setToken, setModalIsOpen) {
  try {
    const result = await signInWithPopup(auth, provider);

    const id = result.user.uid;
    const name = result.user.displayName;
    const email = result.user.email;

    const response = await api.googleOAuth({
      id: id,
      name: name,
      email: email || `google${id}.gmail.com`,
      phone: "",
    });

    localStorage.setItem("token", response.data.token);
    setToken(response.data.token);
    setModalIsOpen(false);
    return;
  } catch (error) {
    console.log(error);
  }
}
