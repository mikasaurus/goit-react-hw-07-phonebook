import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <h2 className={css.header}>Phonebook</h2>
      <ContactForm />
      <h3 className={css.header}>Contacts</h3>
      <FilterContact />
      <ContactList />
    </div>
  );
};
