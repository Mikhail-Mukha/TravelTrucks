import s from "./CatalogSideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setForm,
  setAC,
  setTransmission,
  setKitchen,
  setTV,
  setBathroom,
  resetFilters,
} from "../../redux/filters/slice";
import {
  selectAC,
  selectTransmission,
  selectKitchen,
  selectTV,
  selectBathroom,
  selectForm,
} from "../../redux/filters/selectors";
import { fetchCampers } from "../../redux/campers/operations";

const CatalogSideBar = () => {
  const dispatch = useDispatch();
  const form = useSelector(selectForm);
  const AC = useSelector(selectAC);
  const transmission = useSelector(selectTransmission);
  const kitchen = useSelector(selectKitchen);
  const TV = useSelector(selectTV);
  const bathroom = useSelector(selectBathroom);

  const handleSetCamperForm = (newType) => {
    dispatch(setForm(newType));
  };

  const handleSetAC = (value) => {
    dispatch(setAC(value));
  };

  const handleSetTransmission = (value) => {
    dispatch(setTransmission(value));
  };

  const handleSetKitchen = (value) => {
    dispatch(setKitchen(value));
  };

  const handleSetTV = (value) => {
    dispatch(setTV(value));
  };

  const handleSetBathroom = (value) => {
    dispatch(setBathroom(value));
  };

  const handleSearch = () => {
    dispatch(fetchCampers());
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    dispatch(fetchCampers({}));
  };

  return (
    <div className={s.catalogSideBar}>
      <h3 className={s.titleLocation}>Location</h3>
      <button className={s.buttonLocation}>Kyiv, Ukraine</button>

      <h3 className={s.titleFilters}>Filters</h3>

      <button onClick={handleResetFilters} className={s.resetButton}>
        Скинути фільтри
      </button>

      <div className={s.divVehicleEquipment}>
        <h2 className={s.vehicleEquipment}>Vehicle equipment</h2>
        <button
          className={`${s.filterButton} ${AC ? s.active : ""}`}
          onClick={() => handleSetAC(!AC)}
        >
          AC
        </button>
        <button
          className={`${s.filterButton} ${transmission ? s.active : ""}`}
          onClick={() =>
            handleSetTransmission(
              transmission === "Automatic" ? "" : "Automatic"
            )
          }
        >
          Automatic
        </button>
        <button
          className={`${s.filterButton} ${kitchen ? s.active : ""}`}
          onClick={() => handleSetKitchen(!kitchen)}
        >
          Kitchen
        </button>
        <button
          className={`${s.filterButton} ${TV ? s.active : ""}`}
          onClick={() => handleSetTV(!TV)}
        >
          TV
        </button>
        <button
          className={`${s.filterButton} ${bathroom ? s.active : ""}`}
          onClick={() => handleSetBathroom(!bathroom)}
        >
          Bathroom
        </button>
      </div>

      <div className={s.divVehicleType}>
        <h2 className={s.vehicleType}>Vehicle type</h2>
        <button
          className={`${s.filterButton} ${form === "Van" ? s.active : ""}`}
          onClick={() => handleSetCamperForm("Van")}
        >
          Van
        </button>
        <button
          className={`${s.filterButton} ${
            form === "Fully Integrated" ? s.active : ""
          }`}
          onClick={() => handleSetCamperForm("Fully Integrated")}
        >
          Fully Integrated
        </button>
        <button
          className={`${s.filterButton} ${form === "Alcove" ? s.active : ""}`}
          onClick={() => handleSetCamperForm("Alcove")}
        >
          Alcove
        </button>
      </div>

      <button className={s.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default CatalogSideBar;
