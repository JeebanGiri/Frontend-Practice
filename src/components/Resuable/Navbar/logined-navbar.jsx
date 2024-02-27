// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import styles from "./navbar.module.css";
// import Logo from "./logo";
// import { IoNotifications } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import Profile from "../../../assets/profile.jpg";
// import { TbBrandBooking } from "react-icons/tb";

// const LoginedNavbar = () => {
//   const [click, setClick] = useState(false);
//   const [showProfileBox, setShowProfileBox] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   const handleProfileClick = () => {
//     console.log("Profile icon clicked");
//     setShowProfileBox(!showProfileBox);
//   };

//   const notifi = <IoNotifications />;
//   const profile = <CgProfile />;
//   let username = "Jeeban Giri";

//   const navItems = [
//     { path: "/", name: "Hotels & Homes" },
//     {
//       path: "/notification",
//       name: notifi,
//     },
//     { path: "#", name: profile, onClick: handleProfileClick },
//   ];

//   return (
//     <>
//       <nav>
//         <div className={styles.navbarContainer}>
//           <NavLink to="/" className={styles.logoContainer}>
//             <Logo />
//           </NavLink>

//           <ul
//             className={
//               click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
//             }
//           >
//             {navItems.map((item, index) => (
//               <li key={index} className={styles.navItem}>
//                 <NavLink
//                   to={item.path}
//                   exact="true"
//                   className={({ isActive }) =>
//                     ("navLink", isActive)
//                       ? `${styles.active}`
//                       : `${styles.navLink}`
//                   }
//                   onClick={handleClick}
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           <div className={styles.menuIcon} onClick={handleClick}>
//             {click ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>
//       </nav>

//       <div
//         className={
//           showProfileBox
//             ? `${styles.profilebox} ${styles.profileBoxVisible}`
//             : styles.profileBoxHidden
//         }
//       >
//         <div className={styles.title}>
//           <p>My Account</p>
//         </div>
//         <div className={styles.profileimage}>
//           <img src={Profile} alt="Profile Image" height={100} width={100} />
//           <p>{username}</p>
//         </div>
//         <hr />
//         <ul>
//           <div className={styles.firstli}>
//             <p className={styles.icons}>
//               <TbBrandBooking />
//             </p>
//             <li>My Booking</li>
//           </div>
//           <div className={styles.secondli}>
//             <p className={styles.icons}>
//               <CgProfile />
//             </p>
//             <li>Profile</li>
//           </div>
//         </ul>
//         <button className={styles.signout}>Sign Out</button>
//       </div>
//       {/* )} */}
//     </>
//   );
// };

// export default LoginedNavbar;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./navbar.module.css";
import Logo from "./logo";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Profile from "../../../assets/profile.jpg";
import { TbBrandBooking } from "react-icons/tb";

const LoginedNavbar = ({ handleLogout }) => {
  const navigateTo = useNavigate();
  const [click, setClick] = useState(false);
  const [showProfileBox, setShowProfileBox] = useState(false); // State to toggle profile box visibility

  const handleClick = () => {
    setClick(!click);
  };

  const handleProfileClick = () => {
    setShowProfileBox(!showProfileBox);
  };

  const notifi = <IoNotifications size={25} />;
  const profile = <CgProfile size={30} />;
  const username = "Jeeban Giri";

  return (
    <>
      <nav>
        <div className={styles.navbarContainer}>
          <NavLink to="/" className={styles.logoContainer}>
            <Logo />
          </NavLink>
          <ul
            className={
              click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
            }
          >
            <li key="home" className={styles.navItem}>
              <NavLink
                to="/"
                exact="true"
                // className={styles.navLink}
                className={({ isActive }) =>
                  ("navLink", isActive)
                    ? `${styles.active}`
                    : `${styles.navLink}`
                }
                onClick={handleClick}
              >
                Hotels & Homes
              </NavLink>
            </li>
            <li key="notification" className={styles.navItem}>
              <NavLink
                to="/notification"
                className={styles.navLink}
                onClick={handleClick}
              >
                {notifi}
              </NavLink>
            </li>
            <li key="profile" className={styles.navItem}>
              <NavLink
                to="#"
                className={styles.navLink}
                onClick={handleProfileClick}
              >
                {profile}
              </NavLink>
            </li>
          </ul>

          <div className={styles.menuIcon} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {showProfileBox && (
        <div className={styles.profilebox}>
          <div className={styles.title}>
            <p>My Account</p>
          </div>
          <div className={styles.profileimage}>
            <img src={Profile} alt="Profile Image" height={100} width={100} />
            <p>{username}</p>
          </div>
          <hr />
          <ul>
            <div className={styles.firstli}>
              <p className={styles.icons}>
                <TbBrandBooking />
              </p>
              <li>My Booking</li>
            </div>
            <div className={styles.secondli}>
              <p className={styles.icons}>
                <CgProfile />
              </p>
              <li>Profile</li>
            </div>
          </ul>
          <button className={styles.signout} onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      )}
    </>
  );
};

export default LoginedNavbar;
