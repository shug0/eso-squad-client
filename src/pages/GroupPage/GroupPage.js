import React, { PureComponent } from 'react'
import { objectOf, string } from 'prop-types'
import Header from '../../components/Header/Header'
import './GroupPage.scss'
import playerPropsType from '../../constants/types/player.type'

const Player = ({ player }) => {
  return (
    <div>{player.pseudo}</div>
  )
}

Player.propTypes = { player: playerPropsType }

class GroupPage extends PureComponent {
  static propTypes = {
    players: objectOf(string)
  }

  render () {
    const { players } = this.props
    console.log('Players updated', players)

    const playersKeys = Object.keys(players)

    return (
      <>
        <Header />
        <section className='GroupPage'>
          <h2>Socket loading...</h2>
          {!!playersKeys.length && playersKeys.map(key => (
            <Player key={key} player={JSON.parse(players[key])} />
          ))}
        </section>
      </>
    )
  }
}

export default GroupPage
