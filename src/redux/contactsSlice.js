import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get('/contacts');
      const contacts = await response.data;
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      dispatch(deleteContacts({ id }));
      return response.data;
    } catch (error) {
      return rejectWithValue('Can`t delete contact. Server error');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (contact, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.post('/contacts', {
        name: contact.name,
        number: contact.number,
      });
      dispatch(addContacts(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue('Can`t add contact. Server error');
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async function (user, { rejectWithValue, dispatch }) {
    const { id, name, number } = user;
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      dispatch(updateContacts(response.data));
    } catch (error) {
      return rejectWithValue('Can`t update contact. Server error');
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    updateContacts(state, action) {
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }
        return item;
      });
    },
    filteredContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
    },

    [updateContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addContacts, deleteContacts, filteredContacts, updateContacts } =
  contactsSlice.actions;
