import React from "react";
import { image } from '../../Constans'

import './Navbar.scss';

const Navbar = () => {

    return (
        <div>
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <img src={image.logo} alt="Logo of Netflix"/>
                </div>
                <ul className="app__navbar-links">
                    {['Homepage', 'Series', 'Movies', 'New and Popular', 'My list'].map((item) => (
                        <li className="app__navbar-link" key={`link-${item}`}>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>
                {/*<div className="app__navbar-mobile-menu">*/}
                {/*    */}
                {/*</div>*/}
            </nav>
        </div>
    )
};

export default Navbar;