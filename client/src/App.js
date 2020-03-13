import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';

class App extends Component {

  render() {
    return (

      <Router>

        <div>

          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />

        </div>



      </Router>

    )
  }

}

export default App;