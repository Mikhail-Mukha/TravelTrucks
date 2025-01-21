export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectCamperById = (state, id) =>
  state.campers.items.find((camper) => camper.id === id);
