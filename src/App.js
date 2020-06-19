import React from 'react'
import { hot } from 'react-hot-loader/root'
import Form from './components/Form'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Router>
          <nav>
            <li>
              <Link to="/form">contact</Link>
            </li>
          </nav>

          <Switch>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
        </Router>
      </Router>
    )
  }
}

export default hot(App)
