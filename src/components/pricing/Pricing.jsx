import "./Pricing.scss";

export default function Pricing() {
  return (
    <div className="container">
      <h2 className="d-flex justify-content-center m-4">CAKES</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col-7 d-flex flex-column justify-content-center align-items-center border mb-3">
          <p className="mt-4 p-2">
            4" 2 LAYER MINI CAKE (FEEDS 2-3 PEOPLE) - $30+
          </p>
          <p className="p-2">6" 2 LAYER CAKE (FEEDS 6-8 PEOPLE) - $45+</p>
          <p className="p-2">6" 3 LAYER CAKE (FEEDS 8-10 PEOPLE) - $60+</p>
          <p className="p-2">6" 4 LAYER CAKE (FEEDS 12-14 PEOPLE) - $75+</p>
          <p className="p-2">8" 2 LAYER CAKE (FEEDS 10-12 PEOPLE) - $55+</p>
          <p className="p-2">8" 3 LAYER CAKE (FEEDS 12-14 PEOPLE) - $75+</p>
          <p className="p-2">8" 4 LAYER CAKE (FEEDS 15-17 PEOPLE) - $95+</p>
          <p className="p-2">9" 2 LAYER CAKE (FEEDS 12-14 PEOPLE) - $70+</p>
          <p className="p-2">9" 3 LAYER CAKE (FEEDS 16-18 PEOPLE) - $90+</p>
          <p className="p-2">9" 4 LAYER CAKE (FEEDS 20-24 PEOPLE) - $110+</p>
          <p className="p-2">10" 4 LAYER CAKE (FEEDS 12-14 PEOPLE) - $130+</p>
          <p className="p-2 mb-4">2 TIERED CAKES - $155+</p>
        </div>
        <div className="col"></div>
      </div>
      <h2 className="d-flex justify-content-center m-4">CUPCAKES</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col-7 d-flex flex-column justify-content-center align-items-center border mb-3">
          <p className="mt-4 p-2">6 CUPCAKES SINGLE FLAVOR - $21</p>
          <p className="p-2">12 CUPCAKES TWO FLAVORS - $40</p>
          <p className="p-2 mb-4">2 CUPCAKES SINGLE FLAVOR - $36</p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
