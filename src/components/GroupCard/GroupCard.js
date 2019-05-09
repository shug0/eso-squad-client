import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sum from 'lodash/sum'
import './GroupCard.scss'
import { string, object } from 'prop-types'
import events from '../../constants/data/eventsMap'
import { PlayersIcons } from '../Icons'
import { COLORS } from '../../constants/theme'

class GroupCard extends Component {
  getImgById = (id) => {
    const path =
      `${process.env.PUBLIC_URL}/assets/illustrations/low/${id}.jpg`
        .replace('-veteran', '')
        .replace(/(-i.jpg)|(-ii.jpg)/, '.jpg')

    return path
  }

  getHeaderStyles = (url) => ({
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundColor: COLORS.backgroundDark
  })

  static propTypes = {
    id: string.isRequired,
    eventId: string.isRequired,
    playersTemplate: object.isRequired
  }

  render () {
    const { eventId, playersTemplate, id } = this.props
    const bgPath = this.getImgById(eventId)
    const bgStyles = this.getHeaderStyles(bgPath)

    const playersInGroup = 0
    const playerLimit = sum(Object.values(playersTemplate))

    return (
      <Link to={`/group/${id}`} className='GroupCard__link'>
        <article className='Card GroupCard Appear'>
          <header className='GroupCard__header' style={bgStyles} >
            <div className='GroupCard__header__gradiant'>
              <div className='GroupCard__header__players'>
                <PlayersIcons />
                {playersInGroup}/{playerLimit}
              </div>
              <h3 className='GroupCard__header__title'>{events[eventId].name}</h3>
            </div>
          </header>
          <div className='GroupCard__content'>
            Veteran
          </div>
        </article>
      </Link>
    )
  }
}

export default GroupCard
