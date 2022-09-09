import "./Nav.scss";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar border-bottom sticky-top nav-bg">
      <a class="navbar-brand" href="/">
        <img src="bakedbygloria.png" alt="logo" className="w-75 me-5" />
      </a>
      <button
        class="navbar-toggler me-4"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 justify-content-evenly ms-5">
          <li class="nav-item">
            <a class="nav-link p-4" href="/cakes">
              CAKES
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-4" href="/pricing">
              PRICING
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-4" href="/contact">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
