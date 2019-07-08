import React, { Component } from "react";
import { Formik, Field } from "formik";
import Effect from "./Effect";
import get from "lodash/get";
import { newGroupFormValidationSchema } from "./schemas";
import _events from "../constants/data/eventsMap.json";
import Select from "../components/Select/Select";
import { Events } from "../constants/models/Event";
import {
  EVENTS_OPTIONS,
  GROUP_TEMPLATE,
  ROLE_DD_NUM,
  ROLE_TANK_NUM,
  ROLE_HEAL_NUM
} from "../constants/constants";
import { getCookieUser } from "../helpers/user";
import Input from "../components/Input/Input";
import FormGroup from "../constants/models/FormGroup";

const events: Events = _events;

type P = {
  handleSubmit: any;
};

class NewGroupForm extends Component<P> {
  getInitialValue = () => {
    const cookieUser = getCookieUser();
    return {
      host: cookieUser,
      [ROLE_DD_NUM]: 0,
      [ROLE_TANK_NUM]: 0,
      [ROLE_HEAL_NUM]: 0
    };
  };

  state = {
    initialValue: this.getInitialValue()
  };

  // Allow us to re-fill the default value with another
  updateInitialValue = (values: FormGroup) => {
    const dungeonType = events[values.event].type as string;
    const template = get(GROUP_TEMPLATE, dungeonType);

    this.setState({
      initialValue: {
        ...values,
        ...template
      }
    });
  };

  render() {
    return (
      <Formik
        initialValues={this.state.initialValue}
        validationSchema={newGroupFormValidationSchema}
        onSubmit={this.props.handleSubmit}
        enableReinitialize
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Effect
                onChange={(
                  { values: currentValues }: any,
                  { values: nextValues }: any
                ) => {
                  if (currentValues.event !== nextValues.event) {
                    this.updateInitialValue(nextValues);
                  }
                }}
              />
              <div className="InputWrapper">
                <label className="Label" htmlFor="event">
                  Event
                </label>
                <Field
                  id="event"
                  name="event"
                  isSearchable
                  placeholder="Select the event"
                  options={EVENTS_OPTIONS}
                  component={Select}
                />
              </div>

              <div className="InputWrapper Row Gap">
                <span>
                  <label className="Label" htmlFor="tank_number">
                    № TANK
                  </label>
                  <Field
                    type="number"
                    id="tank_number"
                    name="tank_number"
                    component={Input}
                  />
                </span>

                <span>
                  <label className="Label" htmlFor="heal_number">
                    № HEAL
                  </label>
                  <Field
                    type="number"
                    id="heal_number"
                    name="heal_number"
                    component={Input}
                  />
                </span>

                <span>
                  <label className="Label" htmlFor="dd_number">
                    № DD
                  </label>
                  <Field
                    type="number"
                    id="dd_number"
                    name="dd_number"
                    component={Input}
                  />
                </span>
              </div>

              <button type="submit" className="Button Button--isBig">
                Create the group
              </button>
            </form>
          );
        }}
      />
    );
  }
}

export default NewGroupForm;
