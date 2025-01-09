import { createAsyncThunk } from "@reduxjs/toolkit";
import { travelTrucksApi } from "../../config/travelTrucksApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { AC, transmission, kitchen, TV, bathroom, form } =
        getState().filters;
      const params = {};

      if (form && ["fullyIntegrated", "panelTruck", "alcove"].includes(form)) {
        params.form = form;
      }
      if (AC) params.AC = true;
      if (transmission) params.transmission = transmission;
      if (kitchen) params.kitchen = true;
      if (TV) params.TV = true;
      if (bathroom) params.bathroom = true;

      const response = await travelTrucksApi.get("/", { params });

      if (response.status !== 200) {
        throw new Error(`Failed to fetch campers: ${response.statusText}`);
      }

      if (response.status === 404 || response.data.length === 0) {
        return rejectWithValue("No campers found for the selected filters.");
      }

      return response.data;
    } catch (error) {
      console.error("Error fetching campers:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await travelTrucksApi.get(`/${id}`);

      if (response.status !== 200) {
        throw new Error(`Failed to fetch camper: ${response.statusText}`);
      }

      if (!response.data) {
        return rejectWithValue("Camper not found.");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
