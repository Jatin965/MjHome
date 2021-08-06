import React from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  };
  return (
    <div id="mySidenav" className="sidenav">
      <a
        href="javascript:void(0)"
        className="sidebar-overlay"
        onClick={closeNav}
      ></a>

      <nav>
        <a onClick={closeNav}>
          <div className="sidebar-back text-center">
            <i className="fa fa-cross pr-2" aria-hidden="true"></i> MJ Homes
          </div>
        </a>

        <ul id="sub-menu" className="sidebar-menu">
          <li>
            <Link className='text-center link'>Products</Link>
          </li>

          <li>
            <Link className='text-center link'>Rooms</Link>
          </li>

          <li>
            <Link className='text-center link'>B2B</Link>
          </li>

          <li>
            <Link className='text-center link'>Custom</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
