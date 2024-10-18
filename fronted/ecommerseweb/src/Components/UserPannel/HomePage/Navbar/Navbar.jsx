import React from 'react';
import logo from '../../../../Container/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Layout = () => {
    const menus = [
        {
            label:"Home",
            href:"/"
        },
        {
            label:"Products",
            href:"/product"
        },
        {
            label:"Category",
            href:"/category"
        },
        {
            label:"Contact us",
            href:"/contact-us"
        },
        {
            label:"Sign-up",
            href:"/sign-up"
        },
        {
            label:"Log-in",
            href:"/log-in"
        }
    ]
    return (
        <div>
              <nav className="UserPannel-navbar-container">
                <div  className="UserPannel-navbar-logo">
                <img src={logo} alt="" className="Navbar-logo"/>
                </div>
                <div>
                 <ul className="UserPannel-navbar-link-list">
                    {menus.map( (item, index ) =>(
                        <li key={index}>
                            <Link to={item.href} className="UserPannel-navbar-link">{item.label}</Link>
                        </li>
                    ))}
                 </ul>
                 </div>
              </nav>
        </div>
    );
}

export default Layout;
