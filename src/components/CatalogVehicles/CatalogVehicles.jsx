import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { selectCampers } from "../../redux/campers/selectors";
import {
  selectAC,
  selectTransmission,
  selectKitchen,
  selectTV,
  selectBathroom,
  selectForm,
} from "../../redux/filters/selectors";
import s from "./CatalogVehicles.module.css";

const CatalogVehicles = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const AC = useSelector(selectAC);
  const transmission = useSelector(selectTransmission);
  const kitchen = useSelector(selectKitchen);
  const TV = useSelector(selectTV);
  const bathroom = useSelector(selectBathroom);
  const form = useSelector(selectForm);

  useEffect(() => {
    const filters = {};
    if (AC) filters.AC = true;
    if (transmission) filters.transmission = transmission;
    if (kitchen) filters.kitchen = true;
    if (TV) filters.TV = true;
    if (bathroom) filters.bathroom = true;
    if (form) filters.type = form;

    dispatch(fetchCampers(filters));
  }, [dispatch, AC, transmission, kitchen, TV, bathroom, form]);

  return (
    <div className={s.catalogVehicles}>
      <div className={s.catalogCampers}>
        {Array.isArray(campers?.items) ? (
          campers.items.map((camper) => (
            <div key={camper.id} className={s.camperCard}>
              <h4>{camper.name}</h4>
              <p>
                <strong>Price:</strong> ${camper.price}
              </p>
              <p>
                <strong>Rating:</strong> {camper.rating}
              </p>
              <p>
                <strong>Location:</strong> {camper.location}
              </p>
              <p>
                <strong>Description:</strong> {camper.description}
              </p>
              <div>
                <ul>
                  {camper.AC && <li>AC</li>}
                  {camper.transmission && <li>{camper.transmission}</li>}
                  {camper.engine && <li>{camper.engine}</li>}
                  {camper.kitchen && <li>kitchen</li>}
                  {camper.TV && <li>TV</li>}
                  {camper.bathroom && <li>bathroom</li>}
                </ul>
              </div>
              <div className={s.gallery}>
                {camper.gallery && camper.gallery[0] && (
                  <img
                    src={camper.gallery[0].thumb}
                    alt={`${camper.name} - main image`}
                    className={s.galleryImage}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No campers found.</p>
        )}
      </div>
    </div>
  );
};

export default CatalogVehicles;
