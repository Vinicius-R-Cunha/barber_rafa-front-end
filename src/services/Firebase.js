import { initializeApp } from "firebase/app";
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
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

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export async function signInWithGoogle(setToken, setModalIsOpen) {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const response = await api.googleOAuth(getUserData(result));
    persistToken(response.data.token, setToken, setModalIsOpen);

    return;
  } catch (error) {
    console.log(error);
  }
}

export async function signInWithFacebook(setToken, setModalIsOpen) {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const response = await api.facebookOAuth(getUserData(result));
    persistToken(response.data.token, setToken, setModalIsOpen);

    return;
  } catch (error) {
    console.log(error);
  }
}

function getUserData(result) {
  const id = result.user.uid;
  const name = result.user.displayName;
  const email = result.user.email;

  return {
    id: id,
    name: name,
    email: email || `${id}.gmail.com`,
    phone: "",
  };
}

function persistToken(token, setToken, setModalIsOpen) {
  localStorage.setItem("token", token);
  setToken(token);
  setModalIsOpen(false);
  return;
}
