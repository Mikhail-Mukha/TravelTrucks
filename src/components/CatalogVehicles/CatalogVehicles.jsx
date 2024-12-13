import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";

import s from "./CatalogVehicles.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";

const CatalogVehicles = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  // if (error) {
  //   return <div className={s.errorMessage}>{error}</div>;
  // }

  if (!campers || campers.items.length === 0) {
    return <div className={s.noResultsMessage}>No campers found.</div>;
  }
  return (
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
                  <SvgIcon id="icon-starFilter" className={s.starFilterIcon} />
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
                      <SvgIcon id="icon-engineFilter" className={s.FilterBtn} />
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
  );
};

export default CatalogVehicles;
