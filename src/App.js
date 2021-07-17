import "./assets/scss/style.scss";

import Home from "./pages/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route to="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
