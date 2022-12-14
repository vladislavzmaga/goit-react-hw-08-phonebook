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
  EditButton,
  UserButtonBox,
  UserInfoBox,
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
      <UserInfoBox>
        <ContactsName>{name}</ContactsName>
        <ContactTel>{number}</ContactTel>
      </UserInfoBox>
      <UserButtonBox>
        <EditButton type="button" onClick={openModal}>
          edit
        </EditButton>
        <DeleteBtn type="button" data-id={id} onClick={deleteUser}>
          delete
        </DeleteBtn>
      </UserButtonBox>

      {isModalOpen && <Modal onClose={closeModal} id={id} />}
    </ContactsItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
