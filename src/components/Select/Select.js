import React, { Component } from 'react'
import ReactSelect from 'react-select'
import {
  ClassicSelectTheme,
  getClassicSelectStyles
} from '../SearchInput/SearchStyles'

class Select extends Component {
  render () {
    const { options, field, form, ...props } = this.props
    const showError = form.touched[field.name] && form.errors[field.name]

    return (
      <ReactSelect
        id={field.name}
        options={options}
        isSearchable={false}
        placeholder={field.placeholder}
        value={options.find(item => item.value === field.value)}
        onChange={option => form.setFieldValue(field.name, option.value)}
        styles={getClassicSelectStyles(showError)}
        theme={ClassicSelectTheme}
        {...props}
      />
    )
  }
}

export default Select
