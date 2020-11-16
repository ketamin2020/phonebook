import React, { Component } from "react";
import { connect } from "react-redux";
import contactOperations from "../redux/contactOperation";
class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchTask();
  }

  render() {
    return <></>;
  }
}

const mapDispatchToProps = {
  fetchTask: contactOperations.fetchTask,
};

export default connect(null, mapDispatchToProps)(Phonebook);
