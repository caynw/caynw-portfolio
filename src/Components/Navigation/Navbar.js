import React from "react";
import './Navbar.css';
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <HashLink smooth to= '/#about'>
                    <a className="nav-link" href="/about">
                    About <span className="sr-only"></span>
                    </a>
                    </HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth to= '/#projects'>
                    <a className="nav-link" href="/projects">
                    Projects
                    </a>
                    </HashLink>
                </li>
                <li className="nav-item">
                    <HashLink smooth to= '/#contact'>
                    <a className="nav-link" href="/contact">
                    Contact
                    </a>
                    </HashLink>
                </li>
                </ul>
        </nav>
    )
};
export default Navbar;
