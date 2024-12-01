import s from "./CatalogVehicles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors";
import { selectType, selectEquipment } from "../../redux/filters/selectors";

const CatalogVehicles = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const camperType = useSelector(selectType);
  const equipment = useSelector(selectEquipment);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch, camperType, equipment]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={s.catalogVehicles}>
      <div className={s.catalogCampers}>
        {campers.map((camper) => (
          <div key={camper.id} className={s.camperCard}>
            <h4>{camper.name}</h4>
            <p>Type: {camper.type}</p>
            <p>Equipment: {camper.equipment.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogVehicles;
