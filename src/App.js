import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return (<ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
      </ol>
    );
  }
}
class App extends Component {
  render() {

    const contactList1 = [
      {name: 'Tayler'},
      {name: 'Karen'},
      {name: 'Richard'}
    ];

    const contactList2 = [
      {name: 'Luca'},
      {name: 'Francesca'},
      {name: 'Federica'},
      {name: 'Marco'}
    ];

    const contactList3 = [
      {name: 'María'},
      {name: 'Rocío'},
      {name: 'José'}
    ];
    
    return (
      <div className="App">
      <ContactList contacts = {contactList1}/>
      <ContactList contacts = {contactList2}/>
      <ContactList contacts = {contactList3}/>
      </div>
    );
  }
}

export default App;
