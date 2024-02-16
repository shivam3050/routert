import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="navbar-list-items" id="navbar-logo">
          RS
        </li>
        <li className="navbar-list-items">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-list-items">
          <Link to="contacts">Contacts</Link>
        </li>
        <li className="navbar-list-items">
          <Link to="about">About</Link>
        </li>
        <li className="navbar-list-items">
          <Link to="services">Services</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
