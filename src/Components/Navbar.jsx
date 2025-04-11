// - business
// - entertainment
// - general
// - health
// - science
// - sports
// - technology 


const Navbar = ({ setCategory, setCountry }) => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory("general")}>General</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory("entertainment")}>Entertainment</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory("health")}>Health</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory("science")}>Science</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory("sports")}>Sports</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory("technology")}>Technology</a></li>
  
              {/* Country Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Country</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={() => setCountry("in")}>India</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => setCountry("us")}>USA</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => setCountry("ru")}>Russia</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => setCountry("jp")}>Japan</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};
  
export default Navbar;
  