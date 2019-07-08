import React, { PureComponent } from "react";
import Header from "../../components/Header/Header";
import "./GroupPage.scss";
import get from "lodash/get";
import Player, { Players } from "../../constants/models/Player";
import Group from "../../constants/models/Group";
import eventsMap from "../../constants/data/eventsMap.json";
import { getHeaderStyles, getImgById } from "../../helpers/pictures";

const PlayerCard = ({ player }: { player: Player }) => {
  return (
    <article className="GroupPage__Players__Card">{player.pseudo}</article>
  );
};

type P = {
  players: Players;
  group: Group;
};

class GroupPage extends PureComponent<P> {
  render() {
    const { group, players } = this.props;
    const eventName = get(eventsMap, `${group.eventId}.name`);
    const playersKeys = Object.keys(players);

    const bgPath = getImgById(group.eventId);
    const bgStyles = getHeaderStyles(bgPath);

    return (
      <>
        <Header />
        <section className="GroupPage Card Appear">
          <header className="GroupPage__header" style={bgStyles}>
            <h2 className="GroupPage__header__title">{eventName}</h2>
          </header>
          <div className="GroupPage__Players">
            {!!playersKeys.length &&
              playersKeys.map(key => (
                <PlayerCard key={key} player={players[key]} />
              ))}
          </div>
        </section>
      </>
    );
  }
}

export default GroupPage;
