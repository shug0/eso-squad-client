import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import GroupPage from './GroupPage'
import io from 'socket.io-client'
import { SERVER_URL } from '../../constants/api'
import { EVENT_USER_JOIN, PLAYERS_NAMESPACE, EVENT_PLAYERS_UPDATE } from '../../constants/sockets'
import { getCookieUser } from '../../helpers/user'
import { shape, string } from 'prop-types'

class GroupPageContainer extends PureComponent {
  static propTypes = {
    match: shape({
      params: shape({
        groupId: string.isRequired
      })
    })
  }

  state = {
    socket: null,
    players: {}
  }

  componentDidMount () {
    const { params: { groupId } } = this.props.match
    const socket = io(`${SERVER_URL}/${PLAYERS_NAMESPACE}`)
    this.setState({ socket })

    const currentUser = getCookieUser()

    socket.on('connect', () => {
      // Send current user data
      socket.emit(EVENT_USER_JOIN, { user: currentUser, groupId })
      // Catch group update event
      socket.on(EVENT_PLAYERS_UPDATE, data => (
        this.setState({ players: data })
      ))
    })
  }

  componentWillUnmount () {
    const { socket } = this.state
    socket.disconnect()
  }

  render () {
    const { players } = this.state
    return (
      <GroupPage players={players} />
    )
  }
}

export default withRouter(GroupPageContainer)
