import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', user);
      token.set(response.token);
      return response.data;
    } catch (error) {
      return rejectWithValue("Can't register. Server error. Try again.");
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn ',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login');
      token.set(response.token);
    } catch (error) {}
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut ',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/logout');
      token.set(response.token);
    } catch (error) {}
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh ',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users/current');
      token.set(response.token);
    } catch (error) {}
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      emai: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },
  extraReducers: {
    [registrationUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registrationUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [registrationUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
  },
});
