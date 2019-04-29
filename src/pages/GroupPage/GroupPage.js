import React, { PureComponent } from 'react'
import Header from '../../components/Header/Header'
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

  render () {
    return (
      <>
        <Header />
        <h2>Welcome </h2>
      </>
    )
  }
}

export default GroupPage
