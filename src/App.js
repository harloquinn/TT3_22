import BuySell from "./BuySellPage.js";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
          <Switch>
              <Route path="/buySell" component={BuySell} />
              <Redirect from="*" to="/" />
          </Switch>
      </Router> 
    </div>
  );
}

export default App;
