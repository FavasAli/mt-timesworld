import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Country {
  name: string;
  region: string;
  flag: string;
  independent: string;
}

interface CountryState {
  countries: Country[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CountryState = {
  countries: [],
  isLoading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk<Country[], string>(
  "countries/getCountriesByRegion",
  async (region) => {
    const response = await axios.get(
      "https://restcountries.com/v2/all?fields=name,region,flag,independent"
    );
    if (!region) {
      return response.data; // If region is not provided, return all countries
    }

    const filteredCountries = response.data.filter(
      (country: Country) =>
        country.region.toLowerCase() === region.toLowerCase()
    );
    return filteredCountries;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        console.log("pending checking");
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        console.log("fulfilled checking");

        state.isLoading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        console.log("rejected checking");

        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default countriesSlice.reducer;
