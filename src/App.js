import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Search from './containers/Search';
import SongItem from './components/SongItem';
import SongView from './components/SongView'; 
import SongsSaved from './components/SongsSaved'
import Journal from './components/Journal';


class App extends React.Component {
  render() {
    return (
    <div>
      <Router>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/song"} component={SongItem} />
        <Route exact path="/song/:trackId" component={SongView} />
        <Route exact path="/saved" component={SongsSaved} />
        <Route exact path="/journal" component={Journal} />
      </Router>
    </div>
    )
  }
}

export default App;
