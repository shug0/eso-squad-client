import React, { Component } from 'react'
import './NewGroupPage.scss'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header/Header'
import NewGroupForm from '../../forms/NewGroupForm'

class NewGroupPage extends Component {
  handleSubmit = () => {
    console.log('SUBMITED !')
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
