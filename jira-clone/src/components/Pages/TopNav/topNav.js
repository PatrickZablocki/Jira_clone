import React from "react";


function MobileNav() {
  return (
    <div className="topNav">
      <div className="left">
        <div className="logo">
        <a href="/">
                <img
                  className="Logo-Image"
                  src="/LogoImage/Logo.png"
                  alt="Logo from Jira"
                />
              </a>
        </div>
        <ul>
              <li>
                <a href="#">Your Work</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Filters</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">People</a>
              </li> 
            </ul>
            <button className="CreateBtn">Create</button>
      </div>
      <div className="right">
        <div className="close">
        <span class="icon"></span>
        </div>
        
          
        
      </div>
    </div>
  );
}

export default MobileNav;