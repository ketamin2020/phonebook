import React, { Component } from "react";
import styles from "./styles/auth.module.css";
import authOperations from "../redux/authOperations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <Link to="/login" className={styles.authArrowBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <section className={styles.authContainer}>
          <h2 className={styles.authTitle}>Registration</h2>
          <div className="ui placeholder segment">
            <div className="ui stackable very relaxed one column grid">
              <div className="column">
                <form className="ui form" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                      <input
                        type="text"
                        placeholder="Username"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                        required
                        autoComplete="true"
                      />
                      <i aria-hidden="true" className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <div className="ui left icon input">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                        required
                        autoComplete="true"
                      />
                      <i aria-hidden="true" className="at icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleInputChange}
                        required
                        autoComplete="true"
                      />
                      <i aria-hidden="true" className="lock icon"></i>
                    </div>
                  </div>
                  <button className="ui primary button" type="submit">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
