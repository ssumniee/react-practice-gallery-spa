import "./List.css";
import { Link } from "react-router-dom";

function List() {
  return (
    <li className="List">
      <Link to="/">Gallery</Link>
      <Link to="/about">About</Link>
    </li>
  );
}

export default List;
