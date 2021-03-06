import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../common/Input";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  handleChange = ({ currentTarget: input }) => {
    const error = this.validateInput(input);
    const errors = { ...this.state.errors };
    if (error) errors[input.name] = error;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors: errors || {} });
  };
  validateInput({ name, value }) {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }
  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    this.doSubmit();
  };

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        label={label}
      />
    );
  }
  //   renderSelect(name, label, options) {
  //     const { data, errors } = this.state;

  //     return (
  //       <Select
  //         name={name}
  //         value={data[name]}
  //         label={label}
  //         options={options}
  //         onChange={this.handleChange}
  //         error={errors[name]}
  //       />
  //     );
  //   }
  renderButton(label) {
    return (
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={this.validate()}
        >
          {label}
        </button>
      </div>
    );
  }
}

export default Form;
