import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand " href="/">
            <img
              classNameName="logo"
              src="https://e7.pngegg.com/pngimages/996/491/png-clipart-shopify-e-commerce-logo-web-design-design-web-design-logo.png"
              width="30"
              height="30"
              alt="dick"
            />
            <span className="logo-text">Watchers.com</span>
          </a>
          <div className="order-lg-last col-lg-5 col-sm-8 col-8">
            <div className="float-end">
              <a href="/" className="btn btn-light nav-button btn-sm nav-button">
                <i className="fa fa-user"></i>
                <span className="ms-1 d-none d-sm-inline-block ">Sign in </span>
              </a>
              <a href="/" className="btn btn-light btn-sm nav-button">
                <i className="fa fa-heart"></i>
                <span className="ms-1 d-none d-sm-inline-block ">Wishlist</span>
              </a>
              <a
                data-bs-toggle="offcanvas"
                href="/"
                className="btn btn-light btn-sm nav-button"
              >
                <i className="fa fa-shopping-cart"></i>
                <span className="ms-1">My cart </span>
              </a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
