import React, { Component } from 'react'
import StartPage from './pages/StartPage/StartPage'
import HomePage from './pages/HomePage/HomePage'
import NewGroupPage from './pages/NewGroupPage/NewGroupPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GroupPage from './pages/GroupPage/GroupPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

class App extends Component {
  render () {
    return (
      <Router>
        <main className='Wrapper'>
          <PrivateRoute exact path='/' component={HomePage} />
          <PrivateRoute path='/new' component={NewGroupPage} />
          <PrivateRoute path='/group' component={GroupPage} />
          <Route path='/setup' component={StartPage} />
        </main>
      </Router>
    )
  }
}

export default App
