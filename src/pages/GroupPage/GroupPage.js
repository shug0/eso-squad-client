import React, { PureComponent } from 'react'
import { objectOf, string, object } from 'prop-types'
import Header from '../../components/Header/Header'
import './GroupPage.scss'
import playerPropsType from '../../constants/types/player.type'
// import { getHeaderStyles, getImgById } from '../../helpers/pictures'

const Player = ({ player }) => {
  return (
    <div>{player.pseudo}</div>
  )
}

Player.propTypes = { player: playerPropsType }

class GroupPage extends PureComponent {
  static propTypes = {
    group: object,
    players: objectOf(string)
  }

  render () {
    const { players } = this.props
    // const { group, players } = this.props
    // console.log('Players updated', players)
    // console.log('Current group', group)

    const playersKeys = Object.keys(players)

    // const bgPath = getImgById(group.eventId)
    // const bgStyles = getHeaderStyles(bgPath)

    return (
      <>
        <Header />
        <section className='GroupPage Card Appear'>
          <header>
            Hello guys
          </header>
          {!!playersKeys.length && playersKeys.map(key => (
            <Player key={key} player={JSON.parse(players[key])} />
          ))}
        </section>
      </>
    )
  }
}

export default GroupPage
