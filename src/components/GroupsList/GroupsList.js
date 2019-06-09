import React, { Component } from 'react'
import { string } from 'prop-types'
import GroupCard from '../GroupCard/GroupCard'
import './GroupList.scss'
import api from '../../helpers/api'
import { Link } from 'react-router-dom'
import { API_GROUPS } from '../../constants/api'

class GroupsList extends Component {
  static propTypes = {
    search: string.isRequired
  }

  state = {
    events: [],
    loading: true
  }

  fetchGroups = (search) => {
    this.setState({ loading: true })
    api.get(`${API_GROUPS}/${search}`)
      .then(({ data }) => this.setState({ events: data, loading: false }))
  }

  componentDidMount () {
    this.fetchGroups('')
  }

  componentWillReceiveProps (nextProps, nextContext) {
    if (nextProps.search !== this.props.search) {
      this.fetchGroups(nextProps.search)
    }
  }

  render () {
    const { events, loading } = this.state
    const eventsKeys = Object.keys(events)

    return (
      <section className='GroupList'>
        <header className='GroupList__header'>
          <h3 className='Title'>
            Last Groups
          </h3>

          <Link className='Button Button--isSmall' to='/new'>
            New Group
          </Link>
        </header>
        <div className='GroupList__content'>
          {loading && <span>Loading...</span>}
          {!loading && !eventsKeys.length && <span>Aucun résultat..</span>}
          {!loading && !!eventsKeys.length && eventsKeys.map(key => (
            <GroupCard
              key={events[key].eventId}
              id={key}
              eventId={events[key].eventId}
              playersTemplate={events[key].players_template}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default GroupsList
