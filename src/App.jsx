import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CatalogCamper from "./pages/CatalogCamper/CatalogCamper";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/campers" element={<CatalogPage />} />
      </Route>
      <Route path="/campers/:id" element={<CatalogCamper />}></Route>
    </Routes>
  );
};

export default App;
