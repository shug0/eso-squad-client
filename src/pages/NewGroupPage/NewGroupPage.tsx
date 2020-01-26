import React, { Component } from "react";
import "./NewGroupPage.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import NewGroupForm from "../../forms/NewGroupForm";
import api from "../../helpers/api";
import { API_GROUPS } from "../../constants/api";
import NewGroupFormatter from "../../forms/NewGroupFormatter";
import { ROUTE_GROUP } from "../../constants/routes";

class NewGroupPage extends Component<RouteComponentProps> {
  handleSubmit = (values: any) => {
    const { history } = this.props;
    const event = NewGroupFormatter(values);
    api.post(API_GROUPS, event).then(({ data }) => {
      if (data.groupKey) {
        history.push(`${ROUTE_GROUP}/${data.groupKey}`);
      }
    });
  };

  render() {
    return (
      <>
        <section className="NewGroupPage">
          <h3 className="NewGroupPage__title Title">New Group</h3>
          <div className="NewGroupPage__content  Card">
            <NewGroupForm handleSubmit={this.handleSubmit} />
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(NewGroupPage);
