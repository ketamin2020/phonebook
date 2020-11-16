import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import phonebook from "../components-phonebook/styles/phonebook-transition.module.css";

function Section({ title, children }) {
  return (
    <section className="section">
      <CSSTransition
        in={true}
        appear={true}
        key={title}
        timeout={1100}
        classNames={phonebook}
        mountOnEnter
      >
        <h2>{title}</h2>
      </CSSTransition>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

export default Section;
