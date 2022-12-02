import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/contactsSlice';

import { FilterWrapper, FilterTitile, FilterInput } from './Filter.styled';

export const Filter = ({ title }) => {
  const dispatch = useDispatch();

  const searchByName = evt => {
    const filter = evt.target.value;
    dispatch(filteredContacts(filter));
  };

  return (
    <FilterWrapper>
      <FilterTitile>{title}</FilterTitile>
      <FilterInput type="text" name="filter" onChange={searchByName} />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
