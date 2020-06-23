import React from 'react'
import Main from './components/Main'
import Footer from './components/footer'
import { hot } from 'react-hot-loader/root'
import GlobalLayout from './components/globalLayout'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ScrollIntoView from './helpers/ScrollIntoView'
import ScrollUpButton from 'react-scroll-up-button'

class App extends React.Component {
  render() {
    const currentPath = window.location.pathname

    return (
      <Router>
        <ScrollIntoView>
          <div id="content">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/form" component={GlobalLayout} />
            </Switch>
            <ScrollUpButton
              ContainerClassName="scroll--up"
              TransitionClassName="scroll--up-transition"
            ></ScrollUpButton>
          </div>
          <Footer />
        </ScrollIntoView>
      </Router>
    )
  }
}

export default hot(App)
