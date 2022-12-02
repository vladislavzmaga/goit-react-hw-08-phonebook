import { ContactsListItem } from './ContactsItem/ContactsItem';
import { ContactList } from './Contacts.styled';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ContactList>
      {filteredContacts.map(item => {
        const { name, number, id } = item;

        return (
          <ContactsListItem key={id} name={name} number={number} id={id} />
        );
      })}
    </ContactList>
  );
};
