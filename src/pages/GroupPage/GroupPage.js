import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { string, shape } from 'prop-types'
import Header from '../../components/Header/Header'
import './GroupPage.scss'
import io from 'socket.io-client'

class GroupPage extends PureComponent {
  state = {
    socket: io('http://localhost:8080')
  }

  componentDidMount () {
    const { socket } = this.state

    socket.nsp = '/test'

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('disconnect', (reason) => {
      console.log('disconnected due to ', reason)
    })
  }

  componentWillUnmount () {
    const { socket } = this.state
    socket.disconnect()
  }

  static propTypes = {
    match: shape({
      params: shape({
        groupId: string.isRequired
      })
    })
  }

  render () {
    const { params } = this.props.match
    return (
      <>
        <Header />
        <section className='GroupPage'>
          <h2>Welcome {params.groupId}</h2>

        </section>
      </>
    )
  }
}

export default withRouter(GroupPage)
