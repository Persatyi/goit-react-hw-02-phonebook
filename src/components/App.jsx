import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };

  findTarget = word => {
    const newArr = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(word)
    );

    this.setState({
      filter: newArr,
    });
  };

  render() {
    return (
      <div
        style={{
          padding: '10px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter findTarget={this.findTarget} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
