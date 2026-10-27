import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <span className="logo">Incident Tracker</span>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/by-state">By state</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/add">Add incident</NavLink>
      </nav>
    </header>
  );
}
