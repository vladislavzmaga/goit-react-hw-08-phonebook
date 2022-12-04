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

export const registration = createAsyncThunk(
  'auth/registration',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/signup');
      token.set(response.token);
    } catch (error) {}
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn ',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/login');
      token.set(response.token);
    } catch (error) {}
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut ',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/logout');
      token.set(response.token);
    } catch (error) {}
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh ',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.get('/user/current');
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
  },
  extraReducers: {},
});
