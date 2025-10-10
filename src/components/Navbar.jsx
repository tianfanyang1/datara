import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-text">
            <div className="brand-main">DATARA</div>
            <div className="brand-sub">YOUR SOFTWARE RESOURCE CHOICE</div>
          </div>
        </div>

        <nav className="menu">
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : undefined)}>
            HOME
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>
            ABOUT
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : undefined)}>
            CONTACT
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
