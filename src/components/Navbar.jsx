import { NavLink } from "react-router-dom";
import Logo from "../assets/datara-logo-icon.svg"; 

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <div className="brand">
          <img src={Logo} alt="Datara logo" className="brand-logo" />
          <div className="brand-text">
            <div className="brand-main">DATARA</div>
            <div className="brand-sub">YOUR SOFTWARE RESOURCE</div>
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
