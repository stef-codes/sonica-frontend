import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';


class App extends React.Component {
  render() {
    return (
    <div>
      <Router>
        <Route exact path={"/"} component={HomePage} />
      </Router>
    </div>
    )
  }
}

export default App;
