import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import s from "./CatalogCamper.module.css";
import SvgIcon from "../../components/SvgIcon/SvgIcon";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";

const CatalogCamper = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) {
    return <p>Camper with ID {id} not found.</p>;
  }

  return (
    <div>
      {camper.items.map((camper) => (
        <div key={camper.id}>
          <div className={s.gallery}>
            <div className={s.camperInfo}>
              <h4 className={s.camperName}>{camper.name}</h4>
              <p className={s.camperRating}>
                <SvgIcon id="icon-starFilter" className={s.starFilterIcon} />
                {camper.rating}
              </p>
              <p className={s.camperLocation}>
                <SvgIcon id="icon-locationMap" className={s.locationMapIcon} />
                {camper.location}
              </p>
              <p className={s.camperPrise}>€{camper.price}</p>
            </div>
            {camper.gallery.map((image, index) => (
              <img
                key={index}
                src={image.thumb}
                alt={`${camper.name} image ${index + 1}`}
                className={s.galleryImage}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogCamper;
