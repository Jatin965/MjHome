import React, { useEffect, useState } from "react";

import NavMenu from "./NavMenu";
import IconGroup from "./IconGroup";
import Sidebar from "./Sidebar";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  const closeSearch = () => {
    document.getElementById("search-overlay").style.display = "none";
  };

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };

  return (
    <React.Fragment>
      <header className="header-area clearfix header-absolute">
        <div
          className={`header-padding-1 sticky-bar header-res-padding clearfix ${
            scroll > headerTop ? "stick" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-1 col-lg-1 col-md-3 col-2">
                <a href="javascript:void(0)" onClick={openNav}>
                  <div className="bar-style">
                    {" "}
                    <i
                      className="fa fa-bars sidebar-bar"
                      aria-hidden="true"
                    ></i>
                  </div>
                </a>
                <Sidebar />
              </div>
              <div className="col-xl-1 col-lg-1 col-md-3 col-2">
                {/* header logo */}
                {/* <h2>me</h2> */}
                <h3 className="logo">MJ Homes</h3>
              </div>

              <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                {/* Nav menu */}
                <NavMenu openNav={openNav} />
              </div>

              <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                {/* Icon group */}
                <IconGroup search={openSearch} />
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
    </React.Fragment>
  );
};

export default Header;
