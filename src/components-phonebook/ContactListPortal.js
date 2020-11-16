import React, { Component } from "react";
import { Button, Grid, Segment, TransitionablePortal } from "semantic-ui-react";
import Section from "./Section";
import FilterContact from "./FilterContact";
import ContactList from "./ContactList";
import { connect } from "react-redux";
import contactSelectors from "../redux/contactSelectors";

class TransitionablePortalExampleTransition extends Component {
  state = { animation: "slide down", duration: 700, open: false };
  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }));
  handleClose = () => this.setState({ open: false });
  render() {
    const { animation, duration, open } = this.state;
    const { items } = this.props;
    return (
      <Grid columns={2} style={{ margin: "0px" }}>
        <Grid.Column>
          <Button
            content={open ? "Close contact" : "Open contact"}
            negative={open}
            positive={!open}
            onClick={this.handleClick}
          />

          <TransitionablePortal
            open={open}
            transition={{ animation, duration }}
            onClose={this.handleClose}
          >
            <Segment
              style={{
                left: "5%",
                position: "fixed",
                top: "90px",
                zIndex: 1000,
              }}
            >
              <Section
                title={items.length > 0 ? "Contacts" : "Do not have contacts"}
              >
                {items.length > 0 && <FilterContact />}

                <ContactList />
              </Section>
            </Segment>
          </TransitionablePortal>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  items: contactSelectors.getAllContact(state),
});

export default connect(mapStateToProps)(TransitionablePortalExampleTransition);
