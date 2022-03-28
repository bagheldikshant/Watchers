import React, { Component } from "react";
import MainPage from "./MainPage";
class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100"
              id="sidebar"
            >
              <ul class="nav flex-column flex-nowrap overflow-hidden">
                <li class="nav-item sidebar-item">
                  <a class="nav-link text-truncate" href="#">
                    <span class="d-none d-sm-inline">Account Main</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-truncate" href="#">
                    <span class="d-none d-sm-inline">New Orders</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-truncate" href="#">
                    <span class="d-none d-sm-inline">Orders History</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-truncate" href="#">
                    <span class="d-none d-sm-inline">My Wishlist</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-truncate" href="#">
                    <span class="d-none d-sm-inline">Transactions</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-truncate" href="#">
                    <span class="d-none d-sm-inline">Profile Setting</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-truncate" href="#">
                    <span class="d-none d-sm-inline">Log out</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col pt-2">
              <MainPage />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
