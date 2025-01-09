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
import SvgIcon from "../SvgIcon/SvgIcon.jsx";

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

  const handleSearch = async () => {
    try {
      const filters = {
        form: "panelTruck",
        AC: true,
        transmission: "automatic",
        kitchen: true,
        TV: true,
        bathroom: true,
      };

      await dispatch(fetchCampers(filters)).unwrap();
    } catch (error) {
      console.error("Search failed:", error);
    }
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
        Reset filters
      </button>

      <h2 className={s.vehicleEquipment}>Vehicle equipment</h2>

      <hr />

      <div className={s.filterCheckboxGroup}>
        <label className={`${s.checkboxLabel} ${AC ? s.active : ""}`}>
          <input
            type="checkbox"
            id="AC"
            name="checkbox"
            checked={AC}
            onChange={(e) => handleSetAC(e.target.checked)}
          />
          <SvgIcon id="icon-ACFilter" className={s.filterIcon} />
          <span>AC</span>
        </label>
        <label className={`${s.checkboxLabel} ${transmission ? s.active : ""}`}>
          <input
            type="checkbox"
            id="transmission"
            name="checkbox"
            checked={transmission === "automatic"}
            onChange={(e) =>
              handleSetTransmission(e.target.checked ? "automatic" : "")
            }
          />
          <SvgIcon id="icon-diagramFilter" className={s.filterIcon} />
          <span>Automatic</span>
        </label>
        <label className={`${s.checkboxLabel} ${kitchen ? s.active : ""}`}>
          <input
            type="checkbox"
            id="kitchen"
            name="checkbox"
            checked={kitchen}
            onChange={(e) => handleSetKitchen(e.target.checked)}
          />
          <SvgIcon id="icon-kitchenFilter" className={s.filterIcon} />
          <span>Kitchen</span>
        </label>
        <label className={`${s.checkboxLabel} ${TV ? s.active : ""}`}>
          <input
            type="checkbox"
            id="TV"
            name="checkbox"
            checked={TV}
            onChange={(e) => handleSetTV(e.target.checked)}
          />
          <SvgIcon id="icon-tvFilter" className={s.filterIcon} />
          <span>TV</span>
        </label>
        <label className={`${s.checkboxLabel} ${bathroom ? s.active : ""}`}>
          <input
            type="checkbox"
            id="bathroom"
            name="checkbox"
            checked={bathroom}
            onChange={(e) => handleSetBathroom(e.target.checked)}
          />
          <SvgIcon id="icon-bathroomFilter" className={s.filterIcon} />
          <span>Bathroom</span>
        </label>
      </div>

      <h2 className={s.titleVehicleType}>Vehicle type</h2>

      <hr />

      <div className={s.filterRadioGroup}>
        <label
          className={`${s.radioLabel} ${form === "panelTruck" ? s.active : ""}`}
        >
          <input
            type="radio"
            name="form"
            id="panelTruck"
            checked={form === "panelTruck"}
            onChange={() => handleSetCamperForm("panelTruck")}
          />
          <SvgIcon id="icon-vanFormFilter" className={s.filterIcon} />
          <span>Van</span>
        </label>
        <label
          className={`${s.radioLabel} ${
            form === "fullyIntegrated" ? s.active : ""
          }`}
        >
          <input
            type="radio"
            name="form"
            id="fullyIntegrated"
            checked={form === "fullyIntegrated"}
            onChange={() => handleSetCamperForm("fullyIntegrated")}
          />
          <SvgIcon id="icon-fullyIntegratedForm" className={s.filterIcon} />
          <span className={s.fullyIntegrated}>Fully Integrated</span>
        </label>
        <label
          className={`${s.radioLabel} ${form === "alcove" ? s.active : ""}`}
        >
          <input
            type="radio"
            name="form"
            id="alcove"
            checked={form === "alcove"}
            onChange={() => handleSetCamperForm("alcove")}
          />
          <SvgIcon id="icon-alcoveFormFilter" className={s.filterIcon} />
          <span>Alcove</span>
        </label>
      </div>

      <button className={s.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default CatalogSideBar;
