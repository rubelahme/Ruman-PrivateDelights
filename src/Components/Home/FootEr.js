import React from "react";
import "../HomeStyle/FootEr.css";

const FootEr = () => {
  return (
    <div className="FootEr">
      <div className="container">
        <div className="row text-center pt-5">
          <div className="col-md-2 ">
            <div className="Contact fw-bold">Contact PrivateDelights</div>
          </div>
          <div className="col-md-2  ">
            <div className="Contact fw-bold">Blog</div>
          </div>
          <div className="col-md-2 ">
            <div className="Contact fw-bold">Twitter</div>
          </div>
          <div className="col-md-2 ">
            <div className="Contact fw-bold">Locations</div>
          </div>
          <div className="col-md-2 ">
            {" "}
            <div className="Contact fw-bold">Privacy Policy</div>
          </div>
          <div className="col-md-2">
            <div className="Contact fw-bold">Terms</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center  p-5">
            @ 2023 PrivateDelights.ch
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootEr;
