import { useEffect, useRef } from 'react';
import Section from './Section/Section';
import Form from './Form/Form';
import SearchForm from './SearchForm/SearchForm';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { phoneBookSlice } from 'redux/phoneBook.slice';

const LOCAL_KEY = 'Task04/contacts';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.items;
  });
  const filter = useSelector(state => {
    return state.filter;
  });

  const isFirst = useRef(true);

  useEffect(() => {
    const newContacts = isFirst.current
      ? JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? contacts
      : contacts;

    if (isFirst.current)
      dispatch(phoneBookSlice.actions.setItems([...newContacts]));

    isFirst.current = false;

    localStorage.setItem(LOCAL_KEY, JSON.stringify(newContacts));
  }, [contacts, dispatch]);

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
