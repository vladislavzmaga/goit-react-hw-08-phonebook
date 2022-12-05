import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

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
      const response = await axios.post('/users/signup', user);
      token.set(response.data.token);
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
      const response = await axios.post('/users/login', user);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue("Can't log in. Server error. Try again.");
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut ',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/logout', user);
      token.unset();
      return response.data;
    } catch (error) {
      return rejectWithValue("Can't log out. Server error. Try again.");
    }
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
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },
  extraReducers: {
    [registration.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registration.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [registration.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    [logIn.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    [logOut.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [logOut.fulfilled]: (state, action) => {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = true;
    },
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
