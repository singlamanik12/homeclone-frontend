import React, { Component } from "react";
import _ from "lodash";
class Input extends Component {
  state = {};
  render() {
    const { name, value, type, onChange, error, label } = this.props;
    return (
      <React.Fragment>
        <div className="form-group input-group">
          <input
            value={value}
            onChange={onChange}
            id={name}
            name={name}
            type={type}
            className="form-control"
            placeholder={_.startCase(_.toLower(label))}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
      </React.Fragment>
    );
  }
}

export default Input;
