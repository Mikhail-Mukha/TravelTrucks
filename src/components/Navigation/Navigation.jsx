import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.navLinkHome} to="/">
        Home
      </NavLink>
      <NavLink className={s.navLinkCatalog} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
