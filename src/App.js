import "./assets/scss/style.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Product from "./pages/Product";
import Home from "./pages/Home";
import Header from "./components/Nav/HeaderIkea/Header";
import Footer from "./components/Nav/Footer";
import LoginRegister from "./pages/LoginRegister";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login-register">
              <LoginRegister />
            </Route>

            <Route path="/product-details/:id">
              <Product />
            </Route>
          </Switch>
        </main>

        <Footer
          backgroundColorClass="bg-gray"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
        />
      </Router>
    </div>
  );
}

export default App;
