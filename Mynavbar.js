import React, { useState } from 'react';

export default function Mynavbar() {
  // State to handle the visibility of the submenu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function to open/close the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="head">
        <div className="navbar">
          <div className="search">
         
            <i className="fa-solid fa-magnifying-glass"></i>
           
           
            <input className="input" type="text" placeholder="Search" />
          </div>
          <div className="date">
            2024[Jan-Dec]
          </div>
          <div className="msg">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className="bell">
            <i className="fa-regular fa-bell"></i>
          </div>
          <div className="imag">
            <img
              src="https://plus.unsplash.com/premium_vector-1682305509510-94abf193d3fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMG1lbiUyMGFuaW1hdGVkfGVufDB8fDB8fHww"
              alt="Avatar"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className={`drop ${isMenuOpen ? 'open-menu' : ''}`}>
          <div className="dropmenu">
            <a href="#">
              <img
                src="https://smsdemo.solushyfy.com/public/backEnd/assets/img/icons/profile.svg"
                alt="Profile"
              />
              <p>View Profile</p>
            </a>
            <a href="#">
              <img
                src="https://smsdemo.solushyfy.com/public/backEnd/assets/img/icons/password.svg"
                alt="Password"
              />
              <p>View Password</p>
            </a>
            <a href="#">
              <img
                src="https://smsdemo.solushyfy.com/public/backEnd/assets/img/icons/logout.svg"
                alt="Logout"
              />
              <p>Logout</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
