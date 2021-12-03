import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      <NavLink to="/apartments/new">
        <button>Add Apartment</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
