import { createAsyncThunk } from "@reduxjs/toolkit";
import { travelTrucksApi } from "../../config/travelTrucksApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { camperType, equipment } = getState().filters;

      const params = new URLSearchParams({
        type: camperType || "",
        equipment: equipment.join(",") || "",
      }).toString();

      const response = await fetch(`${travelTrucksApi}?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch campers");
      }
      const data = await response.json();
      if (data.items && Array.isArray(data.items)) {
        return data.items;
      } else {
        throw new Error("Incorrect data structure");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
