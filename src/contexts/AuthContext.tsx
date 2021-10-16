// Packages
import { createContext, ReactNode, useEffect, useState } from "react";

// services
import { auth, firebase } from "../services/firebase";

interface IUser {
  id: string;
  name: string;
  avatar: string;
}
interface IAuthContext {
  user: IUser | undefined;
  signInWithGoogle: () => Promise<void>;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthContextProvider = (props: IAuthContextProviderProps) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [user, setUser] = useState<IUser>();

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const response = await auth.signInWithPopup(provider);

    if (response.user) {
      const { displayName, photoURL, uid } = response.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  };
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
};
