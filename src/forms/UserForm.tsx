import React, { Component } from "react";
import { Formik, Field } from "formik";
import { userFormValidationSchema } from "./schemas";
import Select from "../components/Select/Select";
import {
  PLATFORM_INPUT,
  REGIONS_INPUT,
  ROLES_INPUT
} from "../constants/constants";
import { getCookieUser } from "../helpers/user";
import Input from "../components/Input/Input";

type P = {
  handleSubmit: any;
};

class UserForm extends Component<P> {
  getInitialValue = () => {
    const cookieUser = getCookieUser();
    return {
      pseudo: cookieUser.pseudo || "",
      platform: cookieUser.platform || "",
      region: cookieUser.region || "",
      lvl: cookieUser.lvl || 50,
      cp: cookieUser.cp || 160,
      role: cookieUser.role || ""
    };
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Formik
        initialValues={this.getInitialValue()}
        validationSchema={userFormValidationSchema}
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="InputWrapper">
                <label className="Label" htmlFor="pseudo">
                  Account Pseudo*
                </label>
                <Field component={Input} id="pseudo" name="pseudo" />
              </div>

              <div className="InputWrapper Row Gap">
                <span>
                  <label className="Label" htmlFor="platform">
                    Platform*
                  </label>
                  <Field
                    id="platform"
                    name="platform"
                    options={PLATFORM_INPUT}
                    component={Select}
                  />
                </span>

                <span>
                  <label className="Label" htmlFor="region">
                    Region
                  </label>
                  <Field
                    id="region"
                    name="region"
                    options={REGIONS_INPUT}
                    component={Select}
                  />
                </span>
              </div>

              <div className="InputWrapper">
                <label className="Label" htmlFor="role">
                  Role*
                </label>
                <Field
                  id="role"
                  name="role"
                  options={ROLES_INPUT}
                  component={Select}
                />
              </div>

              <div className="InputWrapper Row Gap">
                <span>
                  <label className="Label" htmlFor="lvl">
                    LVL*
                  </label>
                  <Field component={Input} id="lvl" name="lvl" />
                </span>

                <span>
                  <label className="Label" htmlFor="cp">
                    CP
                  </label>
                  <Field component={Input} id="cp" name="cp" />
                </span>
              </div>

              <button type="submit" className="Button Button--isBig">
                Submit
              </button>
            </form>
          );
        }}
      />
    );
  }
}

export default UserForm;
