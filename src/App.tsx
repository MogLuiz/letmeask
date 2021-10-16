// Packages
import { BrowserRouter, Route } from "react-router-dom";

// Componets
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

// context
import { createContext, useState } from "react";

export const TestContext = createContext({} as any);

function App() {
  const [value, setValue] = useState();
  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue }}>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRoom} exact />
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
