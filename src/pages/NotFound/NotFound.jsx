import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div>
      <h1 className={s.notFound}>404</h1>
      <Link className={s.link} to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
