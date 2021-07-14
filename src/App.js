import "./App.css";
import Gallery from "./page/Gallery";
import About from "./page/About";
import { Switch, Route } from "react-router-dom";
import List from "./component/List";

function App() {
  return (
    <div className="App">
      <List />
      <div className="content-area">
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
