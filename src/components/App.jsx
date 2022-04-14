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

  addContact = (contact, form) => {
    const ifName = this.state.contacts.find(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (ifName) {
      alert(`${ifName.name} is already exist, please type new name`);
      return;
    }

    const ifNumber = this.state.contacts.find(
      el => el.number.replaceAll('-', '') === contact.number.replaceAll('-', '')
    );

    if (ifNumber) {
      alert(`${ifNumber.number} is already exist, please type new number`);
      return;
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));

    form();
  };

  findTarget = word => {
    if (!word) {
      this.setState({
        filter: '',
      });
      return;
    }

    const newArr = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(word)
    );

    this.setState({
      filter: newArr,
    });
  };

  deleteItem = e => {
    const id = e.target.id;
    const newList = this.state.contacts.filter(el => el.id !== id);
    this.setState({
      contacts: newList,
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
        <ContactList
          deleteItem={this.deleteItem}
          contacts={this.state.filter || this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
