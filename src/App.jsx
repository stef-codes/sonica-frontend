import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Search from './containers/Search';
import SongItem from './components/SongItem';
import SongView from './containers/SongView'; 
import SongsSaved from './containers/SongsSaved'
import Journal from './containers/Journal';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state = {
    count: 0
  }

  theClicker () {
    this.setState(prevState => {
      return {count: (prevState.count + 1) * 4}
    })
  }

  render() {
    return (
    <div>
      {/* <button onClick={this.theClicker}>Increment</button>
      <p>Counter: {this.state.count}  </p> */}
      <Router>
        <NavBar/>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/song"} component={SongItem} />
        <Route exact path="/song/:trackId" component={SongView} />
        <Route exact path="/songs" component={SongsSaved} />
        <Route exact path="/journal" component={Journal} />
      </Router>
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
    </div>
    )
  }
}


export default App;
