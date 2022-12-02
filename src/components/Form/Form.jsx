import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { Forms, FormLable, FormInput, FormButton } from './Form.styled';

export const Form = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const hundleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    addUser(newContact);
    evt.target.reset();
  };

  const addUser = newContact => {
    let isContains = false;
    contacts.map(contact => {
      if (contact.name === newContact.name) {
        isContains = true;
      }
      return isContains;
    });
    isContains
      ? Notiflix.Report.failure(
          'Error',
          `${newContact.name} is already in contacts`,
          'close'
        )
      : dispatch(addContact(newContact));
  };

  return (
    <Forms onSubmit={hundleSubmit}>
      <FormLable>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLable>
      <FormLable>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLable>
      <FormButton type="submit">Save contact</FormButton>
    </Forms>
  );
};
