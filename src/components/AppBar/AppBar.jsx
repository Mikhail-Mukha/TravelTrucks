import s from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import sprite from "../../photos/Icons/TravelTracks.svg";

const AppBar = () => {
  return (
    <div className={s.divInfo}>
      <NavLink className={s.travelLogo} to="/">
        <svg className="icon" fill="none" width="136" height="16">
          <use xlinkHref={`${sprite}#TravelTracks`}></use>
        </svg>
      </NavLink>
      <Navigation />
    </div>
  );
};

export default AppBar;
