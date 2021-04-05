import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react"

import Nav from "./components/Nav"

import HomeRoot from "./components/Home/HomeRoot"
import NumGuessRoot from "./components/NumGuess/NumGuessRoot"
import TiledGenRoot from "./components/TiledGen/TiledGenRoot"
import TypingGameRoot from "./components/TypingGame/TypingGameRoot"


function App() {

  const [renderxd, renderlololol] = useState();
  const pageHistory = useHistory();

  useEffect(() => {
      if(pageHistory.location.pathname === "/") {
        pageHistory.push("/home");
      }
      renderlololol("bruh");
  }, [])

  return (
      <div className="app-div">
        <Nav />
          <div className="container">
              <Switch>
                <Route exact path="/home">
                  <HomeRoot />
                </Route>
                <Route exact path="/typing">
                  <TypingGameRoot />
                </Route>
                <Route exact path="/numguess">
                  <NumGuessRoot />
                </Route>
                <Route exact path="/tiledgen">
                  <TiledGenRoot />
                </Route>
              </Switch>
          </div>
      </div>
  );
}

export default App;
