import React, { useEffect } from 'react';
import { Form } from './Form/Form';
import { Wrapper } from './Box/Box';
import { Section } from './Section/Section';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsSlice';
import { Title } from './Section/Section.styled';

export const App = () => {
  const { items, error, isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      {isLoading && <Title>Loading...</Title>}
      {error && (
        <Title>
          Error:
          {error}
        </Title>
      )}
      {items.length > 0 && (
        <Section title={'Contacts'}>
          <Filter title={'Find contacts by name'} />
          <ContactsList />
        </Section>
      )}
    </Wrapper>
  );
};
