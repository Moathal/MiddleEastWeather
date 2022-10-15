import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import countries from '../components/countries';

export const countryThunk = createAsyncThunk('countryInfo/fetchData', async (id) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${id}&APPID=cf39c6f88aa0a95c15fa95010ee67d61`).then((res) => res.json());
  const [country] = countries.filter((place) => place.id === id);
  return {
    ...data, img: country.img, name: country.name, country_id: id,
  };
});

const countrySlice = createSlice({
  name: 'countryInfo',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(countryThunk.fulfilled, (state, action) => {
      if (Object.keys(action.payload).length !== 0) return { ...state, data: action.payload };
      return state;
    });
  },
});

export default countrySlice.reducer;
