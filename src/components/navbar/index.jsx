import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import './styles.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
        document.body.classList.toggle('navbar-active', toggleIcon);
    };

    // Function to close the navbar after clicking a menu item
    const closeNavbar = () => {
        setToggleIcon(false);
        document.body.classList.remove('navbar-active');
    };

    return (
        <div>
            <nav className="navbar">
                {/* <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>
                </div> */}
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar__container__menu__item">
                            <Link 
                                className="navbar__container__menu__item__links"
                                to={item.to}
                                onClick={closeNavbar} // Close the navbar on menu item click
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
