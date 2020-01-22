import React, { Component } from "react";
import GroupCard from "../GroupCard/GroupCard";
import "./GroupList.scss";
import api from "../../helpers/api";
import { Link } from "react-router-dom";
import { API_GROUPS } from "../../constants/api";
import {Groups} from "../../constants/models/Group";

interface P {
  search: string;
}

interface S {
  groups: Groups;
  loading: boolean;
}

class GroupsList extends Component<P> {
  state: S = {
    groups: {},
    loading: true
  };

  fetchGroups = (search: string) => {
    this.setState({ loading: true });
    api
      .get(`${API_GROUPS}/${search}`)
      .then(({ data }) => this.setState({ groups: data, loading: false }));
  };

  componentDidMount() {
    this.fetchGroups("");
  }

  componentWillReceiveProps(nextProps: P) {
    if (nextProps.search !== this.props.search) {
      this.fetchGroups(nextProps.search);
    }
  }

  render() {
    const {
      groups,
      loading
    }: { groups: Groups; loading: boolean } = this.state;
    const groupsKeys = Object.keys(groups);

    return (
      <section className="GroupList">
        <header className="GroupList__header">
          <h3 className="Title">Last Groups</h3>

          <Link className="Button Button--isSmall" to="/new">
            New Group
          </Link>
        </header>
        <div className="GroupList__content">
          {loading && <span>Loading...</span>}
          {!loading && !groupsKeys.length && <span>No result..</span>}
          {!loading &&
            !!groupsKeys.length &&
            groupsKeys.map((key: string) => (
              <GroupCard
                key={groups[key].eventId}
                id={key}
                eventId={groups[key].eventId}
                playersTemplate={groups[key].players_template}
              />
            ))}
        </div>
      </section>
    );
  }
}

export default GroupsList;
