import React, { Component } from 'react'
import ReactSelect from 'react-select'
import {
  ClassicSelectTheme,
  getClassicSelectStyles
} from '../SearchInput/SearchStyles'

class Select extends Component {
  render () {
    const { options, field, form, ...props } = this.props

    return (
      <ReactSelect
        id={field.name}
        options={options}
        isSearchable={false}
        placeholder={field.placeholder}
        value={options.find(item => item.value === field.value)}
        onChange={option => form.setFieldValue(field.name, option.value)}
        styles={getClassicSelectStyles(form.errors[field.name])}
        theme={ClassicSelectTheme}
        {...props}
      />
    )
  }
}

export default Select
