import React, { useReducer } from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { User } from './components/User';
import { Dashboard } from './components/Dashboard';
import lodashGet from 'lodash.get';
import { StoreContext } from './store';
import { reducer, initialState } from './store/reducer';

const App = () => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  const userType = lodashGet(globalState, 'userType');

  return (
    <div className="App">
      <StoreContext.Provider value={[globalState, dispatch]}>
        <Router>
          <Header />
          <div className="content">
            <User userType={userType} />
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </StoreContext.Provider>
    </div>
  );
};

export default App;
