import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import { newGroupFormValidationSchema } from './schemas'
import Select from '../components/Select/Select'
import cs from 'classnames'
import { EVENTS_OPTIONS, PLATFORM_INPUT, REGIONS_INPUT } from '../constants/constants'
import { getCookieUser } from '../helpers/user'

class NewGroupForm extends Component {
  getInitialValue = () => {
    const cookieUser = getCookieUser()
    return {
      host: cookieUser.pseudo || '',
      platform: cookieUser.platform || '',
      region: cookieUser.region || ''
    }
  };

  render () {
    const { handleSubmit } = this.props

    return (
      <Formik
        initialValues={this.getInitialValue()}
        validationSchema={newGroupFormValidationSchema}
        onSubmit={handleSubmit}
        render={({ handleSubmit, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className='InputWrapper'>
                <label className='Label' htmlFor='host'>
                  Host
                </label>
                <Field
                  className={cs('Input', { error: errors['pseudo'] })}
                  type='text'
                  id='host'
                  name='host'
                  disabled
                />
              </div>

              <div className='InputWrapper Row Gap'>
                <span>
                  <label className='Label' htmlFor='platform'>
                    Platform
                  </label>
                  <Field
                    id='platform'
                    name='platform'
                    options={PLATFORM_INPUT}
                    component={Select}
                  />
                </span>

                <span>
                  <label className='Label' htmlFor='region'>
                    Region
                  </label>
                  <Field
                    id='region'
                    name='region'
                    options={REGIONS_INPUT}
                    component={Select}
                  />
                </span>
              </div>

              <div className='InputWrapper'>
                <label className='Label' htmlFor='event'>
                  Event
                </label>
                <Field
                  id='event'
                  name='event'
                  isSearchable
                  placeholder='Select the event'
                  options={EVENTS_OPTIONS}
                  component={Select}
                />
              </div>

              <div className='InputWrapper Row Gap'>
                <span>
                  <label className='Label' htmlFor='tank_number'>
                    № TANK
                  </label>
                  <Field
                    className={cs('Input', { error: errors['tank_number'] })}
                    type='number'
                    id='tank_number'
                    name='tank_number'
                  />
                </span>

                <span>
                  <label className='Label' htmlFor='heal_number'>
                    № HEAL
                  </label>
                  <Field
                    className={cs('Input', { error: errors['heal_number'] })}
                    type='number'
                    id='heal_number'
                    name='heal_number'
                  />
                </span>

                <span>
                  <label className='Label' htmlFor='dd_number'>
                    № DD
                  </label>
                  <Field
                    className={cs('Input', { error: errors['dd_number'] })}
                    type='number'
                    id='dd_number'
                    name='dd_number'
                  />
                </span>
              </div>

              <button type='submit' className='Button Button--isBig'>
                Create the group
              </button>
            </form>
          )
        }}
      />
    )
  }
}

export default NewGroupForm
