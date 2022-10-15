import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './details';

const store = configureStore({
  reducer: {
    countryInfo: countrySlice,
  },
});

export default store;
