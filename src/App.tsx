// Packages
import { BrowserRouter, Route } from "react-router-dom";

// Componets
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

// Services
import { auth, firebase } from "./services/firebase";

// context
import { createContext, useState } from "react";
interface IUser {
  id: string;
  name: string;
  avatar: string;
}
interface IAuthContext {
  user: IUser | undefined;
  signInWithGoogle: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

function App() {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [user, setUser] = useState<IUser>();

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((response) => {
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
    });
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRoom} exact />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
