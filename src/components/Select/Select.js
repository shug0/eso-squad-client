import React, { Component } from 'react'
import {
  ClassicSelectStyles,
  ClassicSelectTheme
} from '../SearchInput/SearchStyles'
import ReactSelect from 'react-select'

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
        styles={ClassicSelectStyles}
        theme={ClassicSelectTheme}
        {...props}
      />
    )
  }
}

export default Select
