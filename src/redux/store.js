import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './phoneBook.slice';

export const store = configureStore({ reducer: phoneBookSlice.reducer });
