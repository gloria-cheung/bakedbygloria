import "./About.scss";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="gloria.jpg" alt="owner" />
        </div>
        <div className="col d-flex flex-column">
          <div className="col d-flex justify-content-center align-items-center">
            <h2>ABOUT US</h2>
          </div>
          <div className="col d-flex flex-column p-3">
            <p className="pb-4">
              Baked By Gloria is a custom cake service specializing in themed
              cakes with an Asian twist. Our cakes are made with reduced
              sweetness buttercream and comes in unique flavours such as matcha
              and earl grey.
            </p>
            <p>
              The business aims to serve beautiful creations that will also
              satisfy your sweet cravings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
