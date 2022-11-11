import Section from './Section/Section';
import Form from './Form/Form';
import SearchForm from './SearchForm/SearchForm';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import { useSelector } from 'react-redux';

export function App() {

  const contacts = useSelector(state => {
    return state.items;
  });
  const filter = useSelector(state => {
    return state.filter;
  });

  const getFilteredContacts = () => {
    return contacts.filter(it => it.name.toLowerCase().includes(filter));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={s.container}>
      <Section title="Phone Book">
        <Form />
      </Section>

      <Section title="Contacts">
        <SearchForm />
        <ContactList contacts={filteredContacts} />
      </Section>
    </div>
  );
}
