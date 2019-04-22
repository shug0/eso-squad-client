import React, { Component } from 'react'
import StartPage from './pages/StartPage/StartPage'
import HomePage from './pages/HomePage/HomePage'
import NewGroupPage from './pages/NewGroupPage/NewGroupPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { userFormValidationSchema } from './forms/schemas'
import { getCookieUser } from './helpers/user'

// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:8080')

class App extends Component {
  checkUserCookies = () => userFormValidationSchema.isValidSync(getCookieUser())

  render () {
    return (
      <Router>
        <main className='Wrapper'>
          <Route
            exact
            path='/'
            render={() =>
              !this.checkUserCookies() ? (
                <Redirect to='/setup' />
              ) : (
                <HomePage />
              )
            }
          />
          <Route path='/setup' component={StartPage} />
          <Route path='/new' component={NewGroupPage} />
        </main>
      </Router>
    )
  }
}

export default App
