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
import SvgIcon from "../SvgIcon/SvgIcon";

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
    const filters = {
      form,
      AC,
      transmission,
      kitchen,
      TV,
      bathroom,
    };

    dispatch(fetchCampers(filters));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    dispatch(fetchCampers());
  };

  return (
    <div className={s.catalogSideBar}>
      <h3 className={s.titleLocation}>Location</h3>
      <button className={s.buttonLocation}>
        <SvgIcon id="icon-locationMap" className={s.locationMapBtn} />
        Kyiv, Ukraine
      </button>

      <h3 className={s.titleFilters}>Filters</h3>

      <button onClick={handleResetFilters} className={s.resetButton}>
        Скинути фільтри
      </button>

      <h2 className={s.vehicleEquipment}>Vehicle equipment</h2>

      <hr />

      <div className={s.filterBtnGroup}>
        <button
          className={`${s.filterButton} ${AC ? s.active : ""}`}
          onClick={() => handleSetAC(!AC)}
        >
          <SvgIcon id="icon-ACFilter" className={s.ACFilterBtn} />
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
          <SvgIcon id="icon-diagramFilter" className={s.diagramFilterBtn} />
          Automatic
        </button>
        <button
          className={`${s.filterButton} ${kitchen ? s.active : ""}`}
          onClick={() => handleSetKitchen(!kitchen)}
        >
          <SvgIcon id="icon-kitchenFilter" className={s.kitchenFilterBtn} />
          Kitchen
        </button>
        <button
          className={`${s.filterButton} ${TV ? s.active : ""}`}
          onClick={() => handleSetTV(!TV)}
        >
          <SvgIcon id="icon-tvFilter" className={s.tvFilterBtn} />
          TV
        </button>
        <button
          className={`${s.filterButton} ${bathroom ? s.active : ""}`}
          onClick={() => handleSetBathroom(!bathroom)}
        >
          <SvgIcon id="icon-bathroomFilter" className={s.bathroomFilter} />
          Bathroom
        </button>
      </div>

      <h2 className={s.titleVehicleType}>Vehicle type</h2>

      <hr />

      <div className={s.filterBtnGroup}>
        <button
          className={`${s.filterButton} ${
            form === "panelTruck" ? s.active : ""
          }`}
          onClick={() => handleSetCamperForm("panelTruck")}
        >
          <SvgIcon id="icon-vanFormFilter" className={s.vanFormFilterBtn} />
          Van
        </button>
        <button
          className={`${s.filterButton} ${
            form === "fullyIntegrated" ? s.active : ""
          }`}
          onClick={() => handleSetCamperForm("fullyIntegrated")}
        >
          <SvgIcon
            id="icon-fullyIntegratedForm"
            className={s.fullyIntegratedFormBtn}
          />
          Fully Integrated
        </button>
        <button
          className={`${s.filterButton} ${form === "alcove" ? s.active : ""}`}
          onClick={() => handleSetCamperForm("alcove")}
        >
          <SvgIcon
            id="icon-alcoveFormFilter"
            className={s.alcoveFormFilterBtn}
          />
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
