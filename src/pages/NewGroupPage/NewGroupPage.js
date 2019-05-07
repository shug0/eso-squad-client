import React, { Component } from 'react'
import './NewGroupPage.scss'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header/Header'
import NewGroupForm from '../../forms/NewGroupForm'
import api from '../../helpers/api'
import { API_GROUPS } from '../../constants/api'
import NewGroupFormatter from '../../forms/NewGroupFormatter'

class NewGroupPage extends Component {
  handleSubmit = (values) => {
    const event = NewGroupFormatter(values)
    api.post(API_GROUPS, event).then(res => {
      console.log('Group properly created')
    })
  };

  render () {
    return (
      <>
        <Header />
        <section className='NewGroupPage'>
          <h3 className='NewGroupPage__title Title'>New Group</h3>
          <div className='NewGroupPage__content  Card'>
            <NewGroupForm handleSubmit={this.handleSubmit} />
          </div>
        </section>
      </>
    )
  }
}

export default withRouter(NewGroupPage)
