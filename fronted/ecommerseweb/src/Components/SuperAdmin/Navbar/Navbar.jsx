import React, { useState } from "react";
import logo from "../../assets/logo.png"
import {
  FaSearch,
  FaShoppingCart,
  FaToggleOn,
  FaToggleOff,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa"; // Import toggle icons
import "./Navbar.css";

const Navbar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];

  const Dropdownlinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

  const [isToggled, setIsToggled] = useState(false); 
  return (
    <div>
      <nav className="Navbar-container">
        <div className="Navbar">
          <div className="logoset">
            <div className="logo-container">
              <div>
                <img src={logo} alt="Logo" className="logoimage" />
              </div>
              <a href="#" className="logo-link">
                Shopsy
              </a>
            </div>
          </div>
          <div>
            <div className="nav-link">
              <div className="search-container">
                <input type="text" placeholder="Search" className="search" />
                <FaSearch className="search-icon" /> {/* Search Icon */}
              </div>
              {/* Cart container with icon inside */}
              <div className="cart-container">
                <button className="cart-button">
                  <span className="cart-text">Order</span>{" "}
                  {/* Hidden by default, shown on hover */}
                  <FaShoppingCart className="cart-icon" />
                </button>
              </div>
              {/* Toggle container with icon inside */}
              <div className="toggle-container">
                <button className="toggle-button">
                <FaToggleOn />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

{/* navbar below */}
<div className="Navbar-below-container">
  <div className="Navbar-below">
    <ul className="Navbar-below-ullist">
      {Menu.map((data) => (
        <li key={data.id} className="Navbar-below-list">
          <a href={data.link} className="navbar-below-link">
            {data.name}
          </a>
        </li>
      ))}

      {/* Trending Dropdown */}
      <li className="Navbar-below-list-trending" >
        <a href="#" className="navbar-below-link">
        Trending Products
        <span>{<FaCaretUp className="caret-icon"/>}</span>
      </a>

        {/* Dropdown menu as nested ul */}
              <ul className="dropdown-menu">
                {Dropdownlinks.map((Menu) => (
                  <li key={Menu.id}>
                    <a href={Menu.link}>{Menu.name}</a>
                  </li>
                ))}
              </ul>
      </li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default Navbar;
