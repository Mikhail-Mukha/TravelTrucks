import { createAsyncThunk } from "@reduxjs/toolkit";
import { travelTrucksApi } from "../../config/travelTrucksApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { AC, transmission, kitchen, TV, bathroom, form } =
        getState().filters;

      const params = {
        form: form || "",
        AC: AC || undefined,
        transmission: transmission || "",
        kitchen: kitchen || undefined,
        TV: TV || undefined,
        bathroom: bathroom || undefined,
      };

      const response = await travelTrucksApi.get("/", {
        params: params,
      });

      if (response.status !== 200) {
        throw new Error(`Failed to fetch campers: ${response.statusText}`);
      }

      return response.data;
    } catch (error) {
      console.error("Error fetching campers:", error.message);
      return rejectWithValue(error.message);
    }
  }
);
