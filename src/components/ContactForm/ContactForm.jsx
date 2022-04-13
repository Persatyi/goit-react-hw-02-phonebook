import s from './ContactForm.module.css';
import { Component, Fragment } from 'react';
import data from 'db/input.json';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;
    const contact = { id: nanoid(), name: nameValue, number: numberValue };

    this.props.addContact(contact);
    form.reset();
  };

  render() {
    const keysArr = Object.keys(this.state);
    return (
      <form className={s.form} onSubmit={this.onSubmit}>
        {keysArr.map(key => {
          const { id, type, name, pattern, title } = data[key];
          return (
            <Fragment key={id}>
              <label className={s.label} htmlFor={id}>
                {name}
              </label>
              <input
                id={id}
                className={s.input}
                type={type}
                name={name}
                pattern={pattern}
                title={title}
                required
              />
            </Fragment>
          );
        })}
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
