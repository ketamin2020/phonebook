import React, { Component } from "react";
import { connect } from "react-redux";
import contactOperations from "../redux/contactOperation";
import contactSelectors from "../redux/contactSelectors";
import { notify } from "../components-phonebook/reactNotification";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

class ContactCreator extends Component {
  state = {
    name: "",
    number: "",
  };

  handleAddContact = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  clearState = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    const { createTask, items } = this.props;
    e.preventDefault();
    const sameName = items.some((contact) => contact.name === name);
    if (sameName) {
      notify("Contact already exsist!");
    } else {
      createTask(name, number);
    }

    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="unstackable one fields">
            <div className="field">
              <label>Name</label>
              <div className="ui input">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  value={this.state.name}
                  onChange={this.handleAddContact}
                />
              </div>
            </div>

            <div className="field">
              <label>Phone</label>
              <div className="ui input">
                <PhoneInput
                  inputStyle={{ paddingLeft: "40px" }}
                  inputProps={{
                    required: true,
                    placeholder: "Phone",
                  }}
                  required={true}
                  country={"ua"}
                  value={this.state.number}
                  onChange={(number) => this.setState({ number })}
                />
              </div>
            </div>
          </div>

          <div className="ui buttons two">
            <button
              className="ui black basic button"
              type="reset"
              onClick={this.clearState}
            >
              Cancel
            </button>
            <div className="or"></div>
            <button className="ui positive button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createTask: contactOperations.createTask,
};

const mapStateToProps = (state) => ({
  items: contactSelectors.getAllContact(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactCreator);
