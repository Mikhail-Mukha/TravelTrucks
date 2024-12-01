import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    type: "",
    equipment: [],
  },
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setEquipment(state, action) {
      const { item } = action.payload;
      const currentEquipment = state.equipment;

      if (currentEquipment.includes(item)) {
        state.equipment = currentEquipment.filter((eq) => eq !== item);
      } else {
        state.equipment = [...currentEquipment, item];
      }
    },
    resetFilters(state) {
      state.type = "";
      state.equipment = [];
    },
  },
});

export const { setType, setEquipment, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
