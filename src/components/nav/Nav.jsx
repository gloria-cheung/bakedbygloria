import "./Nav.scss";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar border-bottom sticky-top nav-bg">
      <a class="navbar-brand" href="/">
        <img src="bakedbygloria.png" alt="logo" className="w-75" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div className="w-100 d-flex justify-content-around">
          <ul class="navbar-nav">
            <li class="nav-item p-4">
              <a class="nav-link" href="/cakes">
                CAKES
              </a>
            </li>
            <li class="nav-item p-4">
              <a class="nav-link" href="/pricing">
                PRICING
              </a>
            </li>
            <li class="nav-item p-4">
              <a class="nav-link" href="/contact">
                CONTACT US
              </a>
            </li>
            <li class="nav-item p-4">
              <a class="nav-link" href="/about">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
