import React from 'react'
import Header from './components/header'
import Main from './components/Main'
import Footer from './components/footer'
import { hot } from 'react-hot-loader/root'
import { LoanApplicationForm } from './forms/LoanApplicationForm'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    const currentPath = window.location.pathname

    return (
      <Router>
        <Header />
        <div
          id="content"
          className={currentPath.includes('/form') ? 'home--page' : ''}
        >
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/form" component={LoanApplicationForm} />
          </Switch>
        </div>
        <Footer />
      </Router>
    )
  }
}

export default hot(App)
