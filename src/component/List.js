import "./List.css";
import { Link } from "react-router-dom";

function List() {
  return (
    <ul className="List">
      <li>
        <Link to="/">Gallery</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}

export default List;
