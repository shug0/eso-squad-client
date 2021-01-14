import React, {useState, useEffect} from "react";
import GroupCard from "../GroupCard/GroupCard";
import "./GroupList.scss";
import api from "../../helpers/api";
import { Link } from "react-router-dom";
import { API_GROUPS } from "../../constants/api";


function GroupsList(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState(false);
  const { search = "" } = props;

  const fetchGroups = (search: string) => {
    setIsLoading(true);

    api
        .get(`${API_GROUPS}/${search}`)
        .then(({ data }) => {
          setGroups(data)
          setIsLoading(false)
        });
  };

  useEffect(() => {
    fetchGroups(search)
  }, [search])

  const groupsKeys = Object.keys(groups);

  return ((
      <section className="GroupList">
        <header className="GroupList__header">
          <h3 className="Title">Last Groups</h3>

          <Link className="Button Button--isSmall" to="/new">
            New Group
          </Link>
        </header>
        <div className="GroupList__content">
          {isLoading && <span>Loading...</span>}
          {!isLoading && !groupsKeys.length && <span>No result..</span>}
          {!isLoading &&
          !!groupsKeys.length &&
          groupsKeys.map((key: string, i) => (
              <GroupCard
                  key={groups[key].eventId + i}
                  id={key}
                  eventId={groups[key].eventId}
                  playersTemplate={groups[key].players_template}
              />
          ))}
        </div>
      </section>
  ))
}


export default GroupsList;
