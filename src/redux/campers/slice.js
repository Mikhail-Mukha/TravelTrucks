import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "catalog/campers",
  async (filters, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        {
          params: filters,
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

const initialState = {
  items: [],
  status: "idle",
  campers: [],
  filters: {},
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    resetVehicles(state) {
      state.campers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setFilters, resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
