import "./assets/scss/style.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Product from "./pages/Product";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route to="/">
          <Home />
        </Route>

        <Route to="/product-details">
          <Product />
        </Route>
      </Router>
    </div>
  );
}

export default App;
