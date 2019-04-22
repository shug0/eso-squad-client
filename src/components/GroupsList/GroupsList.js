import React, { Component } from 'react'
import GroupCard from '../GroupCard/GroupCard'
import './GroupList.scss'
import { Link } from 'react-router-dom'

const recentGroups = [
  { eventId: 'fungal-grotto-i' },
  { eventId: 'ruins-of-mazzatun' },
  { eventId: 'asylum-sanctorium' },
  { eventId: 'hel-ra-citadel' },
  { eventId: 'frostvault' },
  { eventId: 'depths-of-malatar' },
  { eventId: 'sanctum-ophidia' },
  { eventId: 'maw-of-lorkhaj' },
  { eventId: 'cloudrest' },
  { eventId: 'halls-of-fabrication' }
]

class GroupsList extends Component {
  render () {
    return (
      <section className='GroupList'>
        <header className='GroupList__header'>
          <h3 className='Title'>
            Hot Groups
          </h3>

          <Link className='Button Button--isSmall' to='/new'>
            New Group
          </Link>
        </header>
        <div className='GroupList__content'>
          {recentGroups.map(group => (
            <GroupCard
              key={group.eventId}
              eventId={group.eventId}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default GroupsList
