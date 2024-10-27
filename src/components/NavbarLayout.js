import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavLayout({ children }) {

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const handleEvents = (e) => {
        e.preventDefault();
        navigate('/Events');
    };

    const handleHome = (e) => {
        e.preventDefault();
        navigate('/Home');
    };

    return (
      <>
            <nav className="navbar">

                <div className="navbar-brand">Project Social</div>

                <ul className="navbar-links">
                    <li><a href="#" onClick={handleHome}>Home</a></li>
                    <li><a href="#" onClick={handleEvents}>Events</a></li>
                    <li><Link to="/map">Map</Link></li>
                    <li><a href="#">Groups</a></li>
                    <li><a href="#" onClick={handleLogout}>Logout</a></li>
                </ul>

                {/* Checkbox for toggling the menu */}
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-button">
                &#9776; {/* Burger icon */}
                </label>

            </nav>
            <div className="content">
                {children}
            </div>
      </>
    );
  }
  
  export default NavLayout;