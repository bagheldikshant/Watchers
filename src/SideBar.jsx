import React, { Component } from "react";
import MainPage from "./MainPage";
class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100"
              id="sidebar"
            >
              <ul className="nav flex-column flex-nowrap overflow-hidden">
                <li className="nav-item sidebar-item">
                  <a className="nav-link text-truncate" href="/">
                    <span className="d-none d-sm-inline">Account Main</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/">
                    <span className="d-none d-sm-inline">New Orders</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/">
                    <span className="d-none d-sm-inline">Orders History</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/">
                    <span className="d-none d-sm-inline">My Wishlist</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/">
                    <span className="d-none d-sm-inline">Transactions</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/">
                    <span className="d-none d-sm-inline">Profile Setting</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/">
                    <span className="d-none d-sm-inline">Log out</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col pt-2">
              <MainPage />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
