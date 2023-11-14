import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.header}>Phonebook</h2>
      <ContactForm />
      <Loader />
      <h3 className={css.header}>Contacts</h3>
      <FilterContact />
      <ContactList />
    </div>
  );
};
