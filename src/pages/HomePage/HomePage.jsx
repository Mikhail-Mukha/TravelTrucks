import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <h1 className={s.titleHomePage}>Campers of your dreams</h1>
      <p className={s.paragraphHomePage}>
        You can find everything you want in our catalog
      </p>
      <NavLink className={s.navLinkButton} to="/campers">
        View Now
      </NavLink>
    </div>
  );
};

export default HomePage;
