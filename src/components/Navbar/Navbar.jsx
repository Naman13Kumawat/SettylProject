import "./Navbar.scss";
import {Link} from "react-router-dom";

export default function Navbar({ setAdd, add }) {
  const handleClick = () => {
    setAdd(!add);
  };
  return (
    <div className="navbar">
      <ul>
        <li>
         <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="employees">Employees</Link>
        </li>
        <li>
          <button onClick={handleClick}>Add User</button>
        </li>
      </ul>
    </div>
  );
}
