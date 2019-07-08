import React, { Component } from "react";
import ReactSelect from "react-select";
import {
  ClassicSelectTheme,
  getClassicSelectStyles
} from "../SearchInput/SearchStyles";
import { Props } from "react-select/base";

interface P extends Props {
  options: any;
  value: any;
  onChange: any;
}

class Select extends Component<P> {
  render() {
    const { options, field, form, ...props } = this.props;
    const showError = form.touched[field.name] && form.errors[field.name];

    return (
      <ReactSelect
        id={field.name}
        options={options}
        isSearchable={false}
        placeholder={field.placeholder}
        value={options.find(
          (item: { value: string }) => item.value === field.value
        )}
        onChange={(option: { value: string }) =>
          form.setFieldValue(field.name, option.value)
        }
        styles={getClassicSelectStyles(showError)}
        theme={ClassicSelectTheme}
        {...props}
      />
    );
  }
}

export default Select;
