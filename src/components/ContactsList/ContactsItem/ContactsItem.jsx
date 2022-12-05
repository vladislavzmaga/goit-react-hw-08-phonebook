import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import {
  ContactsItem,
  ContactsName,
  ContactTel,
  DeleteBtn,
} from './ContactsItem.styled';

export const ContactsListItem = ({ name, number, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const deleteUser = evt => {
    const currentId = evt.target.dataset.id;
    dispatch(deleteContact(currentId));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContactsItem>
      <ContactsName>{name}</ContactsName>
      <ContactTel>{number}</ContactTel>
      <DeleteBtn type="button" data-id={id} onClick={deleteUser}>
        delete
      </DeleteBtn>
      <button type="button" onClick={openModal}>
        edit
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </ContactsItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
