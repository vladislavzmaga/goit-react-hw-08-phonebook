import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { authSlice } from './operationSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    auth: authSlice.reducer,
  },
});
