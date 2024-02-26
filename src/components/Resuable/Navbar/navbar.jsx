import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./navbar.module.css";
import Logo from "./logo";

const Navbar = () => {
  const navItems = [
    { path: "/", name: "Hotels & Homes" },
    { path: "/register", name: "Register" },
    { path: "/login", name: "Login" },
  ];

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav>
      <div className={styles.navbarContainer}>
        <NavLink to="/" className={styles.logoContainer}>
          <Logo />
        </NavLink>

        <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <NavLink
                to={item.path}
                exact="true"
                className={({isActive})=> ("navLink", isActive) ? `${styles.active}`: `${styles.navLink}`}
                onClick={handleClick}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.menuIcon} onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
