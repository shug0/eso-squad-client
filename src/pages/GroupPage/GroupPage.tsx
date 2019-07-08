import React, { PureComponent } from "react";
import Header from "../../components/Header/Header";
import "./GroupPage.scss";
import Player, { Players } from "../../constants/models/Player";
import Group from "../../constants/models/Group";
// import { getHeaderStyles, getImgById } from '../../helpers/pictures'

const PlayerCard = ({ player }: { player: Player }) => {
  return <div>{player.pseudo}</div>;
};

type P = {
  players: Players;
  group: Group;
}

class GroupPage extends PureComponent<P> {
  render() {
    const { players } = this.props;
    // const { group, players } = this.props
    // console.log('Players updated', players)
    // console.log('Current group', group)

    const playersKeys = Object.keys(players);

    // const bgPath = getImgById(group.eventId)
    // const bgStyles = getHeaderStyles(bgPath)

    return (
      <>
        <Header />
        <section className="GroupPage Card Appear">
          <header>Hello guys</header>
          {!!playersKeys.length &&
            playersKeys.map(key => (
              <PlayerCard key={key} player={players[key]} />
            ))}
        </section>
      </>
    );
  }
}

export default GroupPage;
