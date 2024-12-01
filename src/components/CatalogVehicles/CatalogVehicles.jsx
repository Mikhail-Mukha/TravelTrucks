import s from "./CatalogVehicles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../store/campers/operations";
import {
  selectCampers,
  selectLoading,
  selectError,
} from "../../store/campers/selectors";
import { selectType, selectEquipment } from "../../store/filters/selectors";

const CatalogVehicles = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const camperType = useSelector(selectType);
  const equipment = useSelector(selectEquipment);
  return (
    <div className={s.catalogVehicles}>
      <div className={s.catalogCampers}></div>
    </div>
  );
};

export default CatalogVehicles;
