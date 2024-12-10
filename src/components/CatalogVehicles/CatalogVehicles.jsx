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
import SvgIcon from "../SvgIcon/SvgIcon";

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
    if (form) filters.form = form;

    dispatch(fetchCampers(filters));
  }, [dispatch, AC, transmission, kitchen, TV, bathroom, form]);

  return (
    <div className={s.catalogVehicles}>
      <div className={s.catalogCampers}>
        {Array.isArray(campers?.items) ? (
          campers.items.map((camper) => (
            <div key={camper.id} className={s.camperCard}>
              <div className={s.gallery}>
                {camper.gallery && camper.gallery[0] && (
                  <img
                    src={camper.gallery[0].thumb}
                    alt={`${camper.name} - main image`}
                    className={s.galleryImage}
                  />
                )}
              </div>
              <div className={s.camperInfo}>
                <div className={s.namePrise}>
                  <h4 className={s.camperName}>{camper.name}</h4>
                  <p className={s.camperPrice}>
                    €{camper.price}
                    <button className={s.heartButton}>
                      <SvgIcon
                        id="icon-heartFavorites"
                        className={s.heartIconBtn}
                      />
                    </button>
                  </p>
                </div>
                <div className={s.ratingLocation}>
                  <p className={s.camperRating}>
                    <SvgIcon
                      id="icon-starFilter"
                      className={s.starFilterIcon}
                    />
                    {camper.rating}
                  </p>
                  <p className={s.camperLocation}>
                    <SvgIcon
                      id="icon-locationMap"
                      className={s.locationMapIcon}
                    />
                    {camper.location}
                  </p>
                </div>
                <p className={s.camperDescription}>{camper.description}</p>
                <div className={s.camperFilterResult}>
                  <ul className={s.camperList}>
                    {camper.AC && (
                      <li className={s.camperItem}>
                        <SvgIcon id="icon-ACFilter" className={s.FilterBtn} />
                        AC
                      </li>
                    )}
                    {camper.transmission && (
                      <li className={s.camperItem}>
                        <SvgIcon
                          id="icon-diagramFilter"
                          className={s.FilterBtn}
                        />
                        {camper.transmission}
                      </li>
                    )}
                    {camper.engine && (
                      <li className={s.camperItem}>
                        <SvgIcon
                          id="icon-engineFilter"
                          className={s.FilterBtn}
                        />
                        {camper.engine}
                      </li>
                    )}
                    {camper.kitchen && (
                      <li className={s.camperItem}>
                        <SvgIcon
                          id="icon-kitchenFilter"
                          className={s.FilterBtn}
                        />
                        Kitchen
                      </li>
                    )}
                    {camper.TV && <li className={s.camperItem}>TV</li>}
                    {camper.bathroom && (
                      <li className={s.camperItem}>
                        <SvgIcon
                          id="icon-bathroomFilter"
                          className={s.FilterBtn}
                        />
                        Bathroom
                      </li>
                    )}
                  </ul>
                </div>
                <button className={s.showMoreBtn}>Show more</button>
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
