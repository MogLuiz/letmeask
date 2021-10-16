// Packages
import { BrowserRouter, Route } from "react-router-dom";

// Componets
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

// context

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/rooms/new" component={NewRoom} exact />
    </BrowserRouter>
  );
}

export default App;
