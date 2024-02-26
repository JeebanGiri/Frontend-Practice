import React, { useState } from "react";
import styles from "./searchbar1.module.css";
import { MdKeyboardArrowDown, MdPeople } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const Searchbar1 = () => {
  const [guest, setGuests] = useState("");

  const handleGuestInput = () => {
    setGuests(guest);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles["place-label"]}>
            <div className={styles.icon}>
              <IoBedOutline />
            </div>
            <div className={styles["input-place"]}>
              <label htmlFor="destination">
                <input type="text" id="destination" />
              </label>
            </div>
          </div>
          <div className={styles["date-label"]}>
            <Space direction="vertical" size={12}>
              <RangePicker />
            </Space>
          </div>

          <div className={styles["guest-label"]}>
            <div className={styles.icon}>
              <MdPeople />
            </div>
            <div className={styles["input-guest"]} onClick={handleGuestInput}>
              <label htmlFor="guest">
                <div className="gurest-input">
                  <input type="text" id="guest" />
                  <span>{guest === 1 ? "1 Adult" : `${guest} Adults`}</span>
                </div>
                <div className={styles.selectoption}>
                  <MdKeyboardArrowDown />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Searchbar1;
