import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './Navbar';
import Create from './Create';
import Edit from './Edit';
import Feed from './Feed';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Feed} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/wiki/new' component={Create} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;