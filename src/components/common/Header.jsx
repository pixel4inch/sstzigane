import logo from '../../assets/img/logo_main.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="position-relative">
      <nav
        className="navbar navbar-expand-lg header-transparent bg-white header-reverse position-relative"
        data-header-hover="light"
      >
        <div className="container-fluid">
          {/* Logo */}
          <div className="col-auto col-xxl-3 col-lg-3 me-lg-0 me-auto">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="SST Zigane Logo" className="default-logo" />
              <img src={logo} alt="SST Zigane Logo" className="alt-logo" />
              <img src={logo} alt="SST Zigane Logo" className="mobile-logo" />
            </NavLink>
          </div>

          {/* Menu */}
          <div className="col-auto menu-order position-static">
            <button
              className="navbar-toggler float-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav alt-font">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About</NavLink>
                </li>

                {/* Dropdown */}
                <li className="nav-item dropdown dropdown-with-icon-style02">
                  <NavLink to="#"
                    className="nav-link dropdown-toggle"
                    id="projectsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </NavLink>

                  <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                    <li>
                      <NavLink className="dropdown-item" to="/ongoing">
                        On Going Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/completed">
                        Completed Projects
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink to="/services" className="nav-link">Services</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/careers" className="nav-link">Careers</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="col-auto col-xxl-2 col-lg-3 text-end d-none d-sm-flex">
            <div className="header-icon">
              <div className="header-button">
                <NavLink
                  to="/src/assets/images/SStzigane.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-small btn-rounded btn-base-color btn-box-shadow me-15px"
                >
                  Brochure
                </NavLink>
              </div>
            </div>

           
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
