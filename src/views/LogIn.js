import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/authOperations";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles/auth.module.css";
import "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <Link to="/" className={styles.authArrowBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <section className={styles.authContainer}>
          <div className="ui placeholder segment">
            <div className="ui stackable very relaxed two column grid">
              <div className="column">
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                  <div className="field">
                    <label>Email</label>
                    <div className="ui left icon input">
                      <input
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                        required
                        autoComplete="true"
                      />
                      <i aria-hidden="true" className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={this.handleInputChange}
                        required
                        autoComplete="true"
                      />
                      <i aria-hidden="true" className="lock icon"></i>
                    </div>
                  </div>
                  <button className="ui primary button" type="submit">
                    Login
                  </button>
                </form>
              </div>
              <div className="middle aligned column">
                <NavLink to="register">
                  <button className="ui big button">
                    <i aria-hidden="true" className="signup icon"></i>Sign up
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="ui vertical divider">Or</div>
          </div>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.loginUser,
};

export default connect(null, mapDispatchToProps)(LogIn);
