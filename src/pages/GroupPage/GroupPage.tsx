import React, { PureComponent } from "react";
import moment from "moment";
import Header from "../../components/Header/Header";
import "./GroupPage.scss";
import get from "lodash/get";
import Player, { Players } from "../../constants/models/Player";
import Group from "../../constants/models/Group";
import eventsMap from "../../constants/data/eventsMap.json";
import { getHeaderStyles, getImgById } from "../../helpers/pictures";
import { getRoleIcon } from "../../components/Icons";
import { ROLE_DD, ROLE_HEAL, ROLE_TANK } from "../../constants/constants";

type P = {
  players: Players;
  group: Group;
};

const PlayerCard = ({ player, role }: { player: any; role: any }) => {
  return (
    <article className={`GroupPage__Lobby__Card`}>
      {getRoleIcon(role)} -{" "}
    </article>
  );
};

class GroupPage extends PureComponent<P> {
  render() {
    const { group, players } = this.props;
    const eventName = get(eventsMap, `${group.eventId}.name`);

    const bgPath = getImgById(group.eventId, "low");
    const bgStyles = getHeaderStyles(bgPath);

    const templateSeats = Object.keys(group.players_template).map(role => (
      <div className={`GroupPage__Lobby__${role}`}>
        {[...Array(group.players_template[role])].map((key, i) => (
          <PlayerCard key={`${role}-${i}`} role={role} player={null} />
        ))}
      </div>
    ));

    console.log({ group });

    return (
      <>
        <Header />
        <section className="GroupPage Card Appear">
          <header className="GroupPage__header" style={bgStyles}>
            <div className="GroupPage__header__overlay" />
            <div className="GroupPage__header__content">
              <h2 className="GroupPage__header__title">{eventName}</h2>
              <aside className="GroupPage__header__date">
                Created {moment(group.created).fromNow()}{" "}
              </aside>
            </div>
          </header>
          <div className="GroupPage__Lobby">
            {/*!!playersKeys.length &&
              playersKeys.map(key => (
                <PlayerCard key={key} player={players[key]} />
              ))*/}

            {templateSeats}
          </div>
        </section>
      </>
    );
  }
}

export default GroupPage;
