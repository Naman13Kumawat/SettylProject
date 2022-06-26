import "./Navbar.scss";

export default function Navbar({ setAdd, add }) {
  const handleClick = () => {
    setAdd(!add);
  };
  return (
    <div className="navbar">
      <ul>
        <li>
          Users
        </li>
        <li>
          Employees
        </li>
        <li>
          <button onClick={handleClick}>Add User</button>
        </li>
      </ul>
    </div>
  );
}
