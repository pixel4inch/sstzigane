import logo from '../../assets/img/logo_main.png'

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
            <a className="navbar-brand" href="/">
              <img src={logo} alt="SST Zigane Logo" className="default-logo" />
              <img src={logo} alt="SST Zigane Logo" className="alt-logo" />
              <img src={logo} alt="SST Zigane Logo" className="mobile-logo" />
            </a>
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
                  <a href="/" className="nav-link">Home</a>
                </li>

                <li className="nav-item">
                  <a href="/about" className="nav-link">About</a>
                </li>

                {/* Dropdown */}
                <li className="nav-item dropdown dropdown-with-icon-style02">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="projectsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                    <li>
                      <a className="dropdown-item" href="/ongoing">
                        On Going Projects
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/completed">
                        Completed Projects
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="/services" className="nav-link">Services</a>
                </li>

                <li className="nav-item">
                  <a href="/careers" className="nav-link">Careers</a>
                </li>

                <li className="nav-item">
                  <a href="/contact" className="nav-link">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="col-auto col-xxl-2 col-lg-3 text-end d-none d-sm-flex">
            <div className="header-icon">
              <div className="header-button">
                <a
                  href="/src/assets/images/SStzigane.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-small btn-rounded btn-base-color btn-box-shadow me-15px"
                >
                  Brochure
                </a>
              </div>
            </div>

            <button id="theme-toggle" className="theme-toggle mt-25px d-none">
              <span className="sun-icon">☀️</span>
              <span className="moon-icon">🌙</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
