// Packages
import { BrowserRouter, Route } from "react-router-dom";

// Componets
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

// context
import { createContext, useState } from "react";

export const AuthContext = createContext({} as any);

function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRoom} exact />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
