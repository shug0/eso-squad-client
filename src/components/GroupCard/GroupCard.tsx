import React, { Component } from "react";
import { Link } from "react-router-dom";
import sum from "lodash/sum";
import "./GroupCard.scss";
import _events from "../../constants/data/eventsMap.json";
import { PlayersIcons, getRoleIcon } from "../Icons";
import { getImgById, getHeaderStyles } from "../../helpers/pictures";

interface GroupCardProps {
  id: string;
  eventId: string;
  playersTemplate: { [key: string]: string };
}

interface Event {
  id: string;
  name: string;
  type: string;
}

const events: { [key: string]: Event } = _events;

class GroupCard extends Component<GroupCardProps> {
  render() {
    const { eventId, playersTemplate, id }: GroupCardProps = this.props;
    const bgPath = getImgById(eventId);
    const bgStyles = getHeaderStyles(bgPath);
    console.log(playersTemplate);

    const playersInGroup = 0;
    const playerLimit = sum(Object.values(playersTemplate));

    return (
      <Link to={`/group/${id}`} className="GroupCard__link">
        <article className="Card GroupCard Appear">
          <header className="GroupCard__header" style={bgStyles}>
            <div className="GroupCard__header__gradiant">
              <div className="GroupCard__header__players">
                <PlayersIcons />
                {playersInGroup}/{playerLimit}
              </div>
              <h3 className="GroupCard__header__title">
                {events[eventId].name}
              </h3>
            </div>
          </header>
          <div className="GroupCard__roles">
            {Object.keys(playersTemplate).map(role => (
              <div className="GroupCard__roles__item">
                {getRoleIcon(role)}
                {playersTemplate[role]}
              </div>
            ))}
          </div>
        </article>
      </Link>
    );
  }
}

export default GroupCard;
