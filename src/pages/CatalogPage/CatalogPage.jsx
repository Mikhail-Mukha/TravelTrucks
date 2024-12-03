
import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar.JSX";
import CatalogVehicles from "../../components/CatalogVehicles/CatalogVehicles.JSX";
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
