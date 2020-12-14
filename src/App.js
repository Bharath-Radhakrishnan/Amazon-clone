import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact="true">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>checkoooooooooouuuut</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
