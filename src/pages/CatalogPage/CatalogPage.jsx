import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.catalogMenu}>
      <div className={s.catalogSideBar}>
        <h3 className={s.titleLocation}>Location</h3>
        <button className={s.buttonLocation}>Kyiv, Ukraine</button>

        <h3 className={s.titleFilters}>Filters</h3>

        <div className={s.divVehicleEquipment}>
          <h2 className={s.vehicleEquipment}>Vehicle equipment</h2>
          <button className={s.filterButton}></button>
          <button className={s.filterButton}></button>
          <button className={s.filterButton}></button>
          <button className={s.filterButton}></button>
          <button className={s.filterButton}></button>
        </div>

        <div className={s.divVehicleType}>
          <h2 className={s.vehicleType}>Vehicle type</h2>
          <button className={s.filterButton}></button>
          <button className={s.filterButton}></button>
          <button className={s.filterButton}></button>
        </div>

        <button className={s.searchButton}> Search</button>
      </div>
      <div className={s.catalogCampers}></div>
    </div>
  );
};

export default CatalogPage;
