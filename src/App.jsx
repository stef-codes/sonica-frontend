import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Search from './containers/Search';
import SongItem from './components/SongItem';
import SongView from './containers/SongView'; 
import SongsSaved from './containers/SongsSaved'
import Journal from './containers/Journal';


class App extends React.Component {
  render() {
    return (
    <div>
      <Router>
        <NavBar/>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/song"} component={SongItem} />
        <Route exact path="/song/:trackId" component={SongView} />
        <Route exact path="/songs" component={SongsSaved} />
        <Route exact path="/journal" component={Journal} />
      </Router>
    </div>
    )
  }
}

export default App;
