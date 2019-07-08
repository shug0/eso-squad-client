import React from "react";
import { connect } from "formik";

interface P {
  onChange: Function;
  formik?: any;
}

class Effect extends React.Component<P> {
  componentWillReceiveProps(nextProps: any) {
    const { values, touched, errors, isSubmitting } = this.props.formik;
    const {
      values: nextValues,
      touched: nextTouched,
      errors: nextErrors,
      isSubmitting: nextIsSubmitting
    } = nextProps.formik;
    if (nextProps.formik !== this.props.formik) {
      this.props.onChange(
        {
          values,
          touched,
          errors,
          isSubmitting
        },
        {
          values: nextValues,
          touched: nextTouched,
          errors: nextErrors,
          isSubmitting: nextIsSubmitting
        }
      );
    }
  }

  render() {
    return null;
  }
}

// @ts-ignore
export default connect(Effect);
