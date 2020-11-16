import React, { Component } from "react";
import { Button, Grid, Segment, TransitionablePortal } from "semantic-ui-react";
import ContactCreator from "./ContactCreator";
import Section from "./Section";
export default class TransitionablePortalExampleTransition extends Component {
  state = { animation: "slide down", duration: 700, open: false };
  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }));
  handleClose = () => this.setState({ open: false });
  render() {
    const { animation, duration, open } = this.state;
    return (
      <Grid columns={2}>
        <Grid.Column>
          <Button
            content={open ? "Close window" : "New contact"}
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
              {" "}
              <Section title="Phonebook">
                <ContactCreator />
              </Section>
            </Segment>
          </TransitionablePortal>
        </Grid.Column>
      </Grid>
    );
  }
}
