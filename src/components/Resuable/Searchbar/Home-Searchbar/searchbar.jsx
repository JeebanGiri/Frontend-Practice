import React, { useState, useEffect } from "react";
import styles from "./searchbar.module.css";
import { IoBedOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import Dropdown from "../../Dropdown/dropdown";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [checkInWeekday, setCheckInWeekday] = useState("");
  const [checkOutWeekday, setCheckOutWeekday] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(0);

  useEffect(() => {
    if (checkInDate) {
      const newCheckInWeekday = format(checkInDate, "EEEE");
      setCheckInWeekday(newCheckInWeekday);
    }
  }, [checkInDate]);

  useEffect(() => {
    if (checkOutDate) {
      const newCheckOutWeekday = format(checkOutDate, "EEEE");
      setCheckOutWeekday(newCheckOutWeekday);
    }
  }, [checkOutDate]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchTerm}...`);
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleDateClick = (event) => {
    event.preventDefault();
    setIsDateOpen(!isDateOpen);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleIncrement = () => {
    setGuests(guests + 1);
  };

  const handleDecrement = () => {
    if (guests > 1) {
      setGuests((prevGuests) => prevGuests - 1);
    }
  };

  const handleRoomIncrement = () => {
    setRooms(rooms + 1);
  };

  const handleRoomDecrement = () => {
    if (rooms > 0) {
      setRooms((prevRooms) => prevRooms - 1);
    }
  };

  return (
    <>
      <div className={styles.searchbar}>
        <form className={styles["search-form"]}>
          <div className={styles.places}>
            <div className={styles.icon}>
              <IoBedOutline />
            </div>
            <div className={styles["place-label"]}>
              <label htmlFor="destination">
                <input
                  type="text"
                  name="places"
                  id="name"
                  placeholder="Enter a destination or property"
                  className={styles["inputText"]}
                />
              </label>
            </div>
          </div>
          <div className={styles["main-content"]}>
            <div className={styles.dates} onClick={handleDateClick}>
              <div className={styles["check-in-dlabel"]}>
                <div className={styles.icon}>
                  <CiCalendarDate />
                </div>
                <div className={styles["check-In-label"]}>
                  <label htmlFor="checkin">
                    <DatePicker
                      selected={checkInDate}
                      onChange={handleCheckInDateChange}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="Check-In Date"
                      className={styles["date-picker"]}
                    />
                    {checkInDate && <br />}
                    {checkInDate && checkInWeekday}
                  </label>
                </div>
              </div>
              <hr className={styles.line} />
              <div className={styles["check-out-dlabel"]}>
                <div className={styles.icon}>
                  <CiCalendarDate />
                </div>
                <div className={styles["check-out-label"]}>
                  <label htmlFor="checkout">
                    <DatePicker
                      selected={checkOutDate}
                      onChange={handleCheckOutDateChange}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="Check-Out Date"
                      className={styles["date-picker"]}
                    />
                    {checkOutDate && <br />}
                    {checkOutDate && checkOutWeekday}
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.guest}>
              <div className={styles.icon}>
                <MdPeople />
              </div>
              <div className={styles["guestlabel"]} onClick={handleIconClick}>
                <label
                  htmlFor="guest"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>{guests === 1 ? "1 Adult" : `${guests} Adults`}</span>
                  <div className={styles.selectoption}>
                    <MdKeyboardArrowDown />
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className={styles["btn-label"]}>
            <label htmlFor="search" className={styles["search-btn"]}>
              <button type="submit" name="search" id="search">
                Search
              </button>
            </label>
          </div>
        </form>
      </div>

      {isOpen && <Dropdown className={styles.popup} />}
      {/* <main> */}
      {/* <Outlet /> */}
      {/* </main> */}
    </>
  );
};

export default SearchBar;
