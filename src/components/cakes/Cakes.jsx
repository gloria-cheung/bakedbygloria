import { useState } from "react";
import Cake from "./Cake";
import "./Cakes.scss";
import { twoTierCakeData, themedCakeData } from "../../data";

export default function Cakes() {
  const [themedCakes, setThemedCakes] = useState(false);
  const [twoTierCakes, setTwoTierCakes] = useState(false);

  const twoTierCakeHandler = () => {
    setTwoTierCakes(true);
    if (themedCakes) {
      setThemedCakes(false);
    }
  };

  const themedCakeHandler = () => {
    setThemedCakes(true);
    if (twoTierCakes) {
      setTwoTierCakes(false);
    }
  };

  const reset = () => {
    setThemedCakes(false);
    setTwoTierCakes(false);
  };

  const backToTop = (
    <div className="d-flex justify-content-center m-3">
      <button onClick={reset} className="btn">
        Back to Main
      </button>
    </div>
  );

  const themeCakeDataArray = themedCakeData.map((item) => (
    <Cake {...item} type="theme_cakes" />
  ));

  const twoTierCakeDataArray = twoTierCakeData.map((item) => (
    <Cake {...item} type="twotier_cakes" />
  ));

  return (
    <div className="container">
      <div className="row d-flex m-5">
        <div className="col"></div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <h3 className="heading">THEMED CAKES</h3>
          <img
            src="/theme_cakes/79.JPG"
            alt="themedcake"
            onClick={themedCakeHandler}
          />
        </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <h3 className="heading">TWO TIER CAKES</h3>
          <img
            src="/twotier_cakes/18.JPG"
            alt="twotiercake"
            onClick={twoTierCakeHandler}
          />
        </div>
        <div className="col"></div>
      </div>
      {themedCakes ? (
        <div className="row d-flex flex-wrap">
          <h3 className="heading d-flex justify-content-center mb-4">
            CAKE GALLERY
          </h3>
          {themeCakeDataArray} {backToTop}
        </div>
      ) : (
        ""
      )}

      {twoTierCakes ? (
        <div className="row d-flex flex-wrap">
          <h3 className="heading d-flex justify-content-center mb-4">
            CAKE GALLERY
          </h3>
          {twoTierCakeDataArray} {backToTop}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
