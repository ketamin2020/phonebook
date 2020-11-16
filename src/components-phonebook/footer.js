import React from "react";
import styles from "../views/styles/homepage.module.css";

const footer = () => (
  <div role="list" className={styles.list}>
    <div role="listitem" className={styles.item}>
      <i aria-hidden="true" className="users icon"></i>
      <div className="content">GoIT</div>
    </div>
    <div role="listitem" className={styles.item}>
      <i aria-hidden="true" className="marker icon"></i>
      <div className="content">Kiev, UA</div>
    </div>
    <div role="listitem" className={styles.item}>
      <i aria-hidden="true" className="mail icon"></i>
      <div className="content">
        <a href="mailto:m.v.kovalenko4@gmail.com">Send mail</a>
      </div>
    </div>
    <div role="listitem" className={styles.item}>
      <i aria-hidden="true" className="linkify icon"></i>
      <div className="content">
        <a href="https://github.com/ketamin2020?tab=repositories">GitHub</a>
      </div>
    </div>
  </div>
);

export default footer;
