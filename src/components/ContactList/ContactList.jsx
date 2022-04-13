import s from './ContactList.module.css';

const ContactList = props => {
  const { contacts } = props;
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <p id={contact.id}>
            {contact.name}: {contact.number}
          </p>
          <button className={s.button} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
