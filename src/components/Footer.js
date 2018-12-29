import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small mdb-color pt-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold footer-text">
                Ticker
              </h6>
              <p className="footer-text">
                Practice and Learn trading 100% free for 100% of the time.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold footer-text">
                Products
              </h6>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/marketplace">Marketplace</Link>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold footer-text">
                Useful links
              </h6>
              <p>
                <Link to="/account">Your Account</Link>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold footer-text">
                Contact
              </h6>
              <p>
                <i className="fas fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> ticker@gmail.com
              </p>
            </div>
          </div>

          <hr />

          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left footer-text">
                © 2018 Copyright:
                <Link to="/">
                  <strong> Ticker.com</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
