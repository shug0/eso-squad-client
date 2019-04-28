import React, { Component } from 'react'
import cs from 'classnames'

class Input extends Component {
  render () {
    const { field, form, ...props } = this.props
    return (
      <input
        id={field.name}
        type='text'
        className={cs('Input', { error: form.errors[field.name] })}
        {...field}
        {...props}
      />
    )
  }
}

export default Input
