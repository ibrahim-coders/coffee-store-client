import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { createContext, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext();

const AuthProvired = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //creactuser
  const creactUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //user-Sigin
  const userLogin = (email, password) => {
    setUser(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    creactUser,
    userLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvired;
