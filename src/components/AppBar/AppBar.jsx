import s from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <div className={s.divInfo}>
      <p className={s.travelLogo}>
        Travel<span className={s.spanTravelLogo}>Tracks</span>
      </p>
      <Navigation />
    </div>
  );
};

export default AppBar;
