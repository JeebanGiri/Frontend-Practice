import react from "react";
import Profile from "../../assets/profile.jpg";
import { TbBrandBooking } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import styles from "./profile.module.css";

const ProfileDashboard = () => {
  let username = "Jeeban Giri";
  return (
    <>
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
              <TbBrandBooking  />
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
        <button className={styles.signout}>Sign Out</button>
      </div>
    </>
  );
};
export default ProfileDashboard;
