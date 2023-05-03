import React, { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import { app } from "../Firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Continue with google
  const googleProvider = new GoogleAuthProvider();

  const continueWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Continue with GitHub
  const githubProvider = new GithubAuthProvider();
  const continueWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // sign in
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update profile
  const userProfile = (displayName, photoURL) => {
    const user = auth.currentUser;
    return updateProfile(user, { displayName, photoURL });
  };

  //   user log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log("User", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    continueWithGoogle,
    continueWithGithub,
    loading,
    createUser,
    loginUser,
    userProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
