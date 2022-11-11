import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  filter: '',
  items: [],
};
export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    delItem: (state, action) => {
      state.items = state.items.filter(it => it.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'react-06-phonebook',
  storage,
};

export const persistedPhoneBookReduser = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);
