import { NavLink } from "react-router-dom";
import "../css/portfolio-custom.css";

const NavBar = () => {
  const navLinkActive = ({ isActive }) => {
    return {
      color: isActive ? "#454545" : "",
    };
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-transparent fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" style={navLinkActive}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/landscaping"
                className="nav-link"
                style={navLinkActive}
              >
                Landscaping
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cooking" className="nav-link" style={navLinkActive}>
                Cooking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/av-tech" className="nav-link" style={navLinkActive}>
                AV Tech
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/photography"
                className="nav-link"
                style={navLinkActive}
              >
                Photography
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link"
                style={navLinkActive}
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
