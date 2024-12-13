import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar.jsx";
import CatalogVehicles from "../../components/CatalogVehicles/CatalogVehicles.jsx";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.catalog}>
      <CatalogSideBar />
      <CatalogVehicles />
    </div>
  );
};

export default CatalogPage;
