import React from 'react';
import { FaBars } from 'react-icons/fa'; // Importing the icon from react-icons
import './NavBar.scss'; // Importing the SCSS file for styling

const NavBar = () => {
    
    function showSidebar(){
        const sidebar = document.querySelector('.navbar_links')
        sidebar.style.display = 'flex'
    }

    function hideSidebar() {
        const hidebar = document.querySelector('.navbar_links')
        hidebar.style.display = 'none'
    }



  return (
    <section className="nav-section">
        <div className="container">
            <nav className="navbar">
                <div className="logo-name">
                    Brian Mungai..
                </div>
                <div className="menu">
                    <ul className={'navbar_links $ {showNav ? "show-nav" : ""}'}>
                    <li onClick={hideSidebar} className="closebar">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </a>
                     </li>
                        <li>
                            <a href="#skills">// Skills</a>
                        </li>
                        <li>
                            <a href="#projects">// Projects</a>
                        </li>
                        <li>
                            <a href="https://github.com/lbryant-sss/brian-s-portfolio/blob/main/Brian%20Mungai's%20Resume.pdf">// Resume</a>
                        </li>
                        <li>
                            <a href="https://github.com/lbryant-sss">// Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/brian-mungai-0911181b8">// LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div onClick={showSidebar} className={'navbar_menubar $ {showNav ? "bg-color" : ""}'}>
                    <FaBars />
                </div>
            </nav>
        </div>
    </section>
  );
};

export default NavBar;
