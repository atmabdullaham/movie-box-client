import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  const manageProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // logout
  const handleLogout = () => {
    return signOut(auth)
      .then(() => {
        toast.success(`${user.displayName}'s Logout Successful`);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  const authInfo = {
    user,
    loading,
    handleRegister,
    manageProfile,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      <Toaster></Toaster>
    </div>
  );
};

export default AuthProvider;
