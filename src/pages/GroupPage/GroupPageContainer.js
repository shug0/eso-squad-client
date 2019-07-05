import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import GroupPage from './GroupPage'
import io from 'socket.io-client'
import { API_GROUP, SERVER_URL } from '../../constants/api'
import { EVENT_USER_JOIN, PLAYERS_NAMESPACE, EVENT_PLAYERS_UPDATE } from '../../constants/sockets'
import { getCookieUser } from '../../helpers/user'
import { shape, string } from 'prop-types'
import api from '../../helpers/api'

class GroupPageContainer extends PureComponent {
  static propTypes = {
    match: shape({
      params: shape({
        groupId: string.isRequired
      })
    })
  }

  state = {
    players: {},
    socket: undefined,
    group: undefined
  }

  componentDidMount () {
    const { params: { groupId } } = this.props.match
    const socket = io(`${SERVER_URL}/${PLAYERS_NAMESPACE}`)
    this.setState({ socket })

    const currentUser = getCookieUser()

    this.fetchGroup(groupId)

    socket.on('connect', () => {
      // Send current user data
      socket.emit(EVENT_USER_JOIN, { user: currentUser, groupId })
      // Catch group update event
      socket.on(EVENT_PLAYERS_UPDATE, data => (
        this.setState({ players: data })
      ))
    })
  }

  fetchGroup = (groupId) => {
    this.setState({ loading: true })
    api.get(`${API_GROUP}/${groupId}`)
      .then(({ data }) => this.setState({ group: data, loading: false }))
  }

  componentWillUnmount () {
    const { socket } = this.state
    socket.disconnect()
  }

  render () {
    const { players, group } = this.state

    if (!group) return 'Loading...'

    return (
      <GroupPage players={players} group={group} />
    )
  }
}

export default withRouter(GroupPageContainer)
