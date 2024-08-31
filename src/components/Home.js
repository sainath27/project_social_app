import React from "react";
import './Home.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Home() {

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        
        navigate('/');
      };

    return(
        <div className="home">

            <nav className="navbar">

                <div className="navbar-brand">Project Social</div>
                
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Map</a></li>
                    <li><a href="#" onClick={handleLogout}>Logout</a></li>
                </ul>

                {/* Checkbox for toggling the menu */}
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-button">
                &#9776; {/* Burger icon */}
                </label>

            </nav>

            <main>
                <div>
                    <h1>Welcome to the HomePage</h1>
                </div>
            </main>
            

        </div>
    );
}

export default Home;