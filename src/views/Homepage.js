import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/homepage.module.css";
import Footer from "../components-phonebook/footer";

const Homepage = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeTitleContainer}>
          <h2 className={styles.homeTitle}>Phonebook</h2>
          <p className={styles.homeSubtitle}>
            Helps you save and manage your contacts
          </p>
        </div>
        <div className={styles.homeButtonsContainer}>
          <NavLink
            to="/login"
            className={`${styles.homeButton} ${styles.homeButtonLogIn}`}
          >
            Start to work
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
