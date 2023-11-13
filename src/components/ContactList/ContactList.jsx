import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch;

  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ name, number, id }) => (
          <li>
            {name}: {number}
            <button
              onClick={() => dispatch(deleteContact(id))}
              className={css.button}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
