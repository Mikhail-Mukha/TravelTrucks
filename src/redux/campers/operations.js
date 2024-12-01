import { createAsyncThunk } from "@reduxjs/toolkit";
import { travelTrucksApi } from "../../config/travelTrucksApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { camperType, equipment } = getState().filters;

      const params = new URLSearchParams();
      if (camperType) params.append("type", camperType);
      if (equipment.length > 0) params.append("equipment", equipment.join(","));

      const response = await fetch(`${travelTrucksApi}?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch campers");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
