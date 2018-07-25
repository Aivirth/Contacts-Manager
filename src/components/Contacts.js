import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "john doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "karen doe",
        email: "karen@gmail.com",
        phone: "555-555-5455"
      },
      {
        id: 3,
        name: "jack doe",
        email: "jack@gmail.com",
        phone: "555-555-5559"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
            contact={contact}
            key={contact.id}
          />
        ))}
      </React.Fragment>
    );
  }
}
