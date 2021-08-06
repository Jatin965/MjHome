import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({openNav}) => {
  return (
    <div className="main-menu">
      <nav>
        <ul>
          <li>
            <button onClick={openNav} className="btn bg-transparent nb">Products</button>
          </li>

          <li>
            <button onClick={openNav} className="btn bg-transparent nb">Rooms</button>
          </li>

          <li>
            <button onClick={openNav} className="btn bg-transparent nb">B2B</button>
          </li>

          <li>
            <button onClick={openNav} className="btn bg-transparent nb">Custom</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
