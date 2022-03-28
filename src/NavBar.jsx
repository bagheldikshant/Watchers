import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand " href="/">
            <img
              className="logo"
              src="https://e7.pngegg.com/pngimages/996/491/png-clipart-shopify-e-commerce-logo-web-design-design-web-design-logo.png"
              width="30"
              height="30"
              alt=""
            />
            <span className="logo-text">Watchers.com</span>
          </a>
          <div class="order-lg-last col-lg-5 col-sm-8 col-8">
            <div class="float-end">
              <a href="/" class="btn btn-light nav-button btn-sm nav-button">
                <i class="fa fa-user"></i>
                <span class="ms-1 d-none d-sm-inline-block ">Sign in </span>
              </a>
              <a href="/" class="btn btn-light btn-sm nav-button">
                <i class="fa fa-heart"></i>
                <span class="ms-1 d-none d-sm-inline-block ">Wishlist</span>
              </a>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvas_cart"
                class="btn btn-light btn-sm nav-button"
              >
                <i class="fa fa-shopping-cart"></i>
                <span class="ms-1">My cart </span>
              </a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
