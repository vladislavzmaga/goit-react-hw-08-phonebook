import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import {
  ContactsItem,
  ContactsName,
  ContactTel,
  DeleteBtn,
} from './ContactsItem.styled';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteUser = evt => {
    const currentId = evt.target.dataset.id;
    dispatch(deleteContact(currentId));
  };

  return (
    <ContactsItem>
      <ContactsName>{name}</ContactsName>
      <ContactTel>{number}</ContactTel>
      <DeleteBtn type="button" data-id={id} onClick={deleteUser}>
        delete
      </DeleteBtn>
    </ContactsItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
