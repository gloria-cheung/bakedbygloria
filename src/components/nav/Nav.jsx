import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar border-bottom sticky-top nav-bg">
      <a className="navbar-brand" href="/">
        <img src="bakedbygloria.png" alt="logo" className="w-75 me-5" />
      </a>
      <button
        className="navbar-toggler me-4"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100 justify-content-evenly ms-5">
          <li className="nav-item">
            <a className="nav-link p-4" href="/cakes">
              CAKES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link p-4" href="/pricing">
              PRICING
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link p-4" href="/contact">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
