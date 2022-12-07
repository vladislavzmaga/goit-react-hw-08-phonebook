import PropTypes from 'prop-types';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contactsSlice';
import { ModalWrapper } from './Modal.styled';

export const Modal = ({ onClose, id }) => {
  const user = useSelector(state =>
    state.contacts.items.find(item => item.id === id)
  );
  const [name, setName] = useState(user.name);
  const [number, setNumber] = useState(user.number);
  const dispatch = useDispatch();

  const handleNameChange = evt => {
    setName(evt.currentTarget.value);
  };

  const handleNumberChange = evt => {
    setNumber(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const currentUser = {
      id,
      name,
      number,
    };
    dispatch(updateContact(currentUser));
    onClose();
  };
  return createPortal(
    <ModalWrapper>
      <button type="button" onClick={onClose}>
        close
      </button>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit" data-id={id} onClick={handleSubmit}>
          save change
        </button>
      </form>
    </ModalWrapper>,
    document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
