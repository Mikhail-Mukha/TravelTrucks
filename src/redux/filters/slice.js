import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
    form: "",
  },
  reducers: {
    setForm(state, action) {
      state.form = action.payload;
    },
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
    setAC(state, action) {
      state.AC = action.payload;
    },
    setKitchen(state, action) {
      state.kitchen = action.payload;
    },
    setTV(state, action) {
      state.TV = action.payload;
    },
    setBathroom(state, action) {
      state.bathroom = action.payload;
    },
    resetFilters(state) {
      state.AC = false;
      state.transmission = "";
      state.kitchen = false;
      state.TV = false;
      state.bathroom = false;
      state.form = "";
    },
  },
});

export const {
  setForm,
  setTransmission,
  setAC,
  setKitchen,
  setTV,
  setBathroom,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
