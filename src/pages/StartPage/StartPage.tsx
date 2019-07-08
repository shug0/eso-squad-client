import React, { Component } from 'react'
import './StartPage.scss'
import UserForm from '../../forms/UserForm'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import { setCookieUser } from '../../helpers/user'
import Player from "../../constants/models/Player";

class StartPage extends Component<RouteComponentProps> {
  handleSubmit = (values: Player) => {
    const { history } = this.props
    setCookieUser(values)
    history.push('/')
  };

  render () {
    return (
      <section className='StartPage'>
        <h1 className='StartPage__title'>ESO Squad</h1>
        <h2 className='StartPage__slogan'>
          Your realtime LFG, LFM tool
        </h2>
        <div className='StartPage__wrapper Card Appear'>
          <UserForm handleSubmit={this.handleSubmit} />
        </div>
      </section>
    )
  }
}

export default withRouter(StartPage)
