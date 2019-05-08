import React, { Component } from 'react'
import { func } from 'prop-types'

import ReactSelect from 'react-select'
import './SearchInput.scss'
import { SearchBarStyles, ClassicSelectTheme } from './SearchStyles'
import { EVENTS_OPTIONS } from '../../constants/constants'

class SearchInput extends Component {
  static propTypes = {
    handleChange: func.isRequired
  }

  render () {
    return (
      <section className='SearchInput'>
        <ReactSelect
          options={EVENTS_OPTIONS}
          isMulti
          placeholder='Select the dungeon(s), trial(s) you are looking for..'
          noOptionsMessage={() => 'No results'}
          styles={SearchBarStyles}
          theme={ClassicSelectTheme}
          onChange={this.props.handleChange}
        />
      </section>
    )
  }
}

export default SearchInput
