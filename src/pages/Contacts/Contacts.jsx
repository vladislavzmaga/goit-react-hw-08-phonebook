import React, { useEffect } from 'react';
import { Form } from '../../components/Form/Form';
import { Wrapper } from '../../components/Box/Box';
import { Section } from '../../components/Section/Section';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { Filter } from '../../components/Filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsSlice';
import { Title } from '../../components/Section/Section.styled';
import { ErrorMessage } from 'components/error.styled';

const Contacts = () => {
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
        <ErrorMessage>
          Error:
          {error}
        </ErrorMessage>
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

export default Contacts;
