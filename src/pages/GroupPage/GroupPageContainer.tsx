import React, { PureComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import GroupPage from "./GroupPage";
import io from "socket.io-client";
import { API_GROUP, SERVER_URL } from "../../constants/api";
import {
  EVENT_USER_JOIN,
  PLAYERS_NAMESPACE,
  EVENT_PLAYERS_UPDATE
} from "../../constants/sockets";
import { getCookieUser } from "../../helpers/user";
import api from "../../helpers/api";
import { Players } from "../../constants/models/Player";
import Group from "../../constants/models/Group";

// Your component own properties
type P = RouteComponentProps<{ groupId: string }> & {
  someString: string;
};

type S = {
  socket: SocketIOClient.Socket | undefined;
  players: Players;
  group: Group | undefined;
};

class GroupPageContainer extends PureComponent<P> {
  state: S = {
    socket: undefined,
    players: {},
    group: undefined
  };

  componentDidMount() {
    const {
      params: { groupId }
    } = this.props.match;
    const socket = io(
      `${SERVER_URL}/${PLAYERS_NAMESPACE}`
    ) as SocketIOClient.Socket;
    this.setState({ socket });

    const currentUser = getCookieUser();

    this.fetchGroup(groupId);

    socket.on("connect", () => {
      // Send current user data
      socket.emit(EVENT_USER_JOIN, { user: currentUser, groupId });
      // Catch group update event
      socket.on(EVENT_PLAYERS_UPDATE, (data: { [key: string]: string }) => {
        const players: Players = Object.keys(data).reduce(
          (previousValue: Players, key) => {
            previousValue[key] = JSON.parse(data[key]);
            return previousValue;
          },
          {}
        );

        this.setState({ players });
      });
    });
  }

  fetchGroup = (groupId: string) => {
    this.setState({ loading: true });
    api
      .get(`${API_GROUP}/${groupId}`)
      .then(({ data }) =>
        this.setState({ group: data[groupId], loading: false })
      );
  };

  componentWillUnmount() {
    const { socket } = this.state;
    if (socket) {
      socket.disconnect();
    }
  }

  render() {
    const { players, group } = this.state;

    if (!group) return "Loading...";

    return <GroupPage players={players} group={group} />;
  }
}

export default withRouter(GroupPageContainer);
