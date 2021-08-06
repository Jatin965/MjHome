import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../../index.scss";

const Header = () => {
  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 576) {
        document.getElementById("sticky").classList.remove("fixed");
      } else document.getElementById("sticky").classList.add("fixed");
    } else {
      document.getElementById("sticky").classList.remove("fixed");
    }
  };

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  const closeSearch = () => {
    document.getElementById("search-overlay").style.display = "none";
  };

  return (
    <div>
      <header id="sticky" className="sticky">
        {/* {isLoading ? <Pace color="#27ae60" /> : null} */}
        <div className="mobile-fix-option"></div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <a href="javascript:void(0)" onClick={openNav}>
                      <div className="bar-style">
                        {" "}
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </a>
                    {/*SideBar Navigation Component*/}
                    <Sidebar />
                  </div>
                  <div className="brand-logo">
                    {/* <LogoImage logo={props.logoName} /> */}
                    <h4>MJ Homes</h4>
                  </div>
                </div>
                <div className="menu-right pull-right">
                  {/*Top Navigation Bar Component*/}
                  <Navbar />

                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                            <i
                              className="fa fa-search"
                              onClick={openSearch}
                            ></i>
                          </div>
                        </li>
                        <li className="onhover-div mobile-setting">
                          <div>
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`}
                              className="img-fluid"
                              alt=""
                            />
                            <i className="fa fa-cog"></i>
                          </div>
                        </li>
                        {/*Header Cart Component */}
                        {/* <CartContainer /> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="search-overlay" className="search-overlay">
        <div>
          <span
            className="closebtn"
            onClick={closeSearch}
            title="Close Overlay"
          >
            ×
          </span>
          <div className="overlay-content">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Search a Product"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
