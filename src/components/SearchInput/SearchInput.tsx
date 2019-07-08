import React, { Component } from "react";
import ReactSelect from "react-select";
import "./SearchInput.scss";
import { SearchBarStyles, ClassicSelectTheme } from "./SearchStyles";
import { EVENTS_OPTIONS } from "../../constants/constants";

type P = {
  handleChange: any;
};

class SearchInput extends Component<P> {
  render() {
    return (
      <section className="SearchInput">
        <ReactSelect
          options={EVENTS_OPTIONS}
          isMulti
          placeholder="Select the dungeon(s), trial(s) you are looking for.."
          noOptionsMessage={() => "No results"}
          styles={SearchBarStyles}
          theme={ClassicSelectTheme}
          onChange={this.props.handleChange}
        />
      </section>
    );
  }
}

export default SearchInput;
