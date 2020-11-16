import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import contactOperations from "../redux/contactOperation";
import contactSelectors from "../redux/contactSelectors";
import listTransition from "../components-phonebook/styles/list-transition.module.css";
import PropTypes from "prop-types";
import styles from "../components-phonebook/styles/ContactList.module.css";
const ContactList = ({ items, removeContact }) => (
  <TransitionGroup component="ul" className={styles.items}>
    {items.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={400} classNames={listTransition}>
        <li key={id} className={styles.card}>
          <div className="ui  cards">
            <div className="ui  card">
              <div className="content">
                <img
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                  className="ui mini right floated image"
                  alt="contact"
                />
                <div className="header">{name}</div>
                <div className="description">Tel.{number}</div>
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <a href={`tel:${number}`} className="ui green basic button">
                    Call
                  </a>
                  <button
                    className="ui red basic button"
                    onClick={() => removeContact(id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

const mapStateToProps = (state) => ({
  items: contactSelectors.getFilterContact(state),
});

const mapDispatchToProps = {
  removeContact: contactOperations.removeTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
