// Packages
import { BrowserRouter, Route } from "react-router-dom";

// Componets
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

// context
import { createContext } from "react";

export const TestContext = createContext("");

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={"teste"}>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRoom} exact />
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
