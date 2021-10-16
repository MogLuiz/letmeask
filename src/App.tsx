// Packages
import { BrowserRouter, Route } from "react-router-dom";

// Componets
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import Room from "./pages/Room";

// context
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRoom} exact />
        <Route path="/rooms/:id" component={Room} exact />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
