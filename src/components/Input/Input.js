import React, { Component } from 'react'
import cs from 'classnames'

class Input extends Component {
  render () {
    const { field, form, ...props } = this.props
    const showError = form.touched[field.name] && form.errors[field.name]
    return (
      <input
        id={field.name}
        type='text'
        className={cs('Input', { error: showError })}
        {...field}
        {...props}
      />
    )
  }
}

export default Input
