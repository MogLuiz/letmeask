// Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Componets
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import Room from "./pages/Room";
import AdminRoom from "./pages/AdminRoom";

// context
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rooms/new" component={NewRoom} exact />
          <Route path="/rooms/:id" component={Room} exact />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
