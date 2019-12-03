import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    console.log(`meta for ${input.name}: `, meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div className="red-text">{meta.error}</div>
      </div>
    );
  }
  onSubmit(formValues) {
    console.log("submitted values from the form: ", formValues);
  }

  render() {
    console.log("reduxForm props: ", this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title is required";
  }
  if (!formValues.description) {
    errors.description = "Description is required";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
