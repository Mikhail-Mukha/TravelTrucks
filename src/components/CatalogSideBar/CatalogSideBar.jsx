import s from "./CatalogSideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCamperType, setEquipment } from "../../store/filters/slice";
import { selectEquipment, selectType } from "../../redux/filters/selectors";

const CatalogSideBar = () => {
  const type = useSelector(selectType);
  const equipment = useSelector(selectEquipment);
  const dispatch = useDispatch();

  const handleSetCamperType = (newType) => {
    dispatch(setCamperType(newType));
  };

  const handleSetEquipment = (item) => {
    dispatch(setEquipment({ item }));
  };
  return (
    <div className={s.catalogSideBar}>
      <h3 className={s.titleLocation}>Location</h3>
      <button className={s.buttonLocation}>Kyiv, Ukraine</button>

      <h3 className={s.titleFilters}>Filters</h3>

      <div className={s.divVehicleEquipment}>
        <h2 className={s.vehicleEquipment}>Vehicle equipment</h2>
        <button
          className={`${s.filterButton} ${
            equipment.includes("AC") ? s.active : ""
          }`}
          onClick={() => handleSetEquipment("AC")}
        >
          AC
        </button>
        <button
          className={`${s.filterButton} ${
            equipment.includes("Automatic") ? s.active : ""
          }`}
          onClick={() => handleSetEquipment("Automatic")}
        >
          Automatic
        </button>
        <button
          className={`${s.filterButton} ${
            equipment.includes("Kitchen") ? s.active : ""
          }`}
          onClick={() => handleSetEquipment("Kitchen")}
        >
          Kitchen
        </button>
        <button
          className={`${s.filterButton} ${
            equipment.includes("TV") ? s.active : ""
          }`}
          onClick={() => handleSetEquipment("TV")}
        >
          TV
        </button>
        <button
          className={`${s.filterButton} ${
            equipment.includes("Bathroom") ? s.active : ""
          }`}
          onClick={() => handleSetEquipment("Bathroom")}
        >
          Bathroom
        </button>
      </div>

      <div className={s.divVehicleType}>
        <h2 className={s.vehicleType}>Vehicle type</h2>
        <button
          className={`${s.filterButton} ${type === "Van" ? s.active : ""}`}
          onClick={() => handleSetCamperType("Van")}
        >
          Van
        </button>
        <button
          className={`${s.filterButton} ${
            type === "Fully Integrated" ? s.active : ""
          }`}
          onClick={() => handleSetCamperType("Fully Integrated")}
        >
          Fully Integrated
        </button>
        <button
          className={`${s.filterButton} ${type === "Alcove" ? s.active : ""}`}
          onClick={() => handleSetCamperType("Alcove")}
        >
          Alcove
        </button>
      </div>

      <button className={s.searchButton}> Search</button>
    </div>
  );
};

export default CatalogSideBar;
