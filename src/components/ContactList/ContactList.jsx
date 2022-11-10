import PT from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PT.arrayOf(
    PT.shape({
      id: PT.string.isRequired,
      name: PT.string.isRequired,
      number: PT.string.isRequired,
    })
  ).isRequired,
};
