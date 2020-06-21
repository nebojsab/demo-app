import React from 'react'
import { hot } from 'react-hot-loader/root'
import { LoanApplicationForm } from './forms/LoanApplicationForm'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <li>
            <Link to="/form">contact</Link>
          </li>
        </nav>

        <Switch>
          <Route exact path="/form" component={LoanApplicationForm} />
        </Switch>
      </Router>
    )
  }
}

export default hot(App)
