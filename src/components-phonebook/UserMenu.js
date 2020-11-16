import React, { useState } from "react";
import { connect } from "react-redux";
import authSelectors from "../redux/authSelectors";
import authOperations from "../redux/authOperations";
import styles from "../components-phonebook/styles/userMenu.module.css";
import user from "../assets/user.png";
import PortalContactCreator from "./ContactCreatorPortal";
import ContactListPortal from "./ContactListPortal";
import "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const UserMenu = ({ userName, onLogout }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className={styles.userMenuContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.user} src={user} alt="user" />
        <span className={styles.userMenuGreeting}>{userName}</span>
      </div>
      <PortalContactCreator />
      <ContactListPortal />
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
        trigger={
          <button className={styles.userMenuButton} type="button">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        }
      >
        <Header icon>
          <Icon name="address book" />
          Do you want to exit the phone book?
        </Header>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted onClick={() => onLogout()}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </section>
  );
};

const mapStateToProps = (state) => ({
  userName: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
