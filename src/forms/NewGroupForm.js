import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import Effect from '../forms/Effect'
import { newGroupFormValidationSchema } from './schemas'
import events from '../constants/data/eventsMap'
import Select from '../components/Select/Select'
import {
  EVENTS_OPTIONS,
  PLATFORM_INPUT,
  REGIONS_INPUT,
  GROUP_TEMPLATE,
  ROLE_DD_NUM,
  ROLE_TANK_NUM, ROLE_HEAL_NUM
} from '../constants/constants'
import { getCookieUser } from '../helpers/user'
import Input from '../components/Input/Input'

class NewGroupForm extends Component {
  getInitialValue = () => {
    const cookieUser = getCookieUser()
    return {
      host: cookieUser.pseudo || '',
      platform: cookieUser.platform || '',
      region: cookieUser.region || '',
      [ROLE_DD_NUM]: 0,
      [ROLE_TANK_NUM]: 0,
      [ROLE_HEAL_NUM]: 0
    }
  };

  state = {
    initialValue: this.getInitialValue()
  }

  updateInitialValue = (values) => {
    const type = events[values.event].type
    this.setState({
      initialValue: {
        ...values,
        ...GROUP_TEMPLATE[type]
      }
    })
  }

  render () {
    return (
      <Formik
        initialValues={this.state.initialValue}
        validationSchema={newGroupFormValidationSchema}
        onSubmit={this.props.handleSubmit}
        enableReinitialize
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Effect onChange={({ values: currentValues }, { values: nextValues }) => {
                if (currentValues.event !== nextValues.event) {
                  this.updateInitialValue(nextValues)
                }
              }} />
              <div className='InputWrapper'>
                <label className='Label' htmlFor='host'>
                  Host
                </label>
                <Field
                  id='host'
                  name='host'
                  component={Input}
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
                    type='number'
                    id='tank_number'
                    name='tank_number'
                    component={Input}
                  />
                </span>

                <span>
                  <label className='Label' htmlFor='heal_number'>
                    № HEAL
                  </label>
                  <Field
                    type='number'
                    id='heal_number'
                    name='heal_number'
                    component={Input}
                  />
                </span>

                <span>
                  <label className='Label' htmlFor='dd_number'>
                    № DD
                  </label>
                  <Field
                    type='number'
                    id='dd_number'
                    name='dd_number'
                    component={Input}
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
