import React, { Component } from "react";
import { SettingsIcon } from "../Icons";
import "./Header.scss";
import { Link } from "react-router-dom";
import { getCookieUser } from "../../helpers/user";

class Header extends Component {
  render() {
    const user = getCookieUser();
    const { pseudo, role, region, platform, cp } = user;

    return (
      <header className="Header">
        <div>
          <Link className="Header__link" to="/">
            <h1 className="Header__title">ESO Squad</h1>
            <h2 className="Header__slogan">Your LFG, LFM realtime tool</h2>
          </Link>
        </div>
        <aside className="Header__infos">
          <span className="Header__infos__detail">
            <strong>@</strong>
            {pseudo}
          </span>
          <span className="Header__infos__detail">
            <strong>{platform}</strong> - {region}
          </span>
          <span className="Header__infos__detail">
            Role <strong>{role}</strong>
          </span>
          <span className="Header__infos__detail">
            CP <strong>{cp}</strong>
          </span>

          <div className="Header__infos__settings">
            <Link to="/setup">
              <SettingsIcon />
            </Link>
          </div>
        </aside>
      </header>
    );
  }
}

export default Header;
