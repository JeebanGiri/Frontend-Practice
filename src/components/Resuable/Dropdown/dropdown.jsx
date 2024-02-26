import React, { useState } from "react";
import styles from "./dropdown.module.css";
import { GrSubtractCircle } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(0);

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
    <div className={styles.selection}>
      <div className={styles.dropdown}>
        <div className={styles.guests}>
          <div className={styles.guestContent}>
            <p>Guest</p>
          </div>
          <div className={styles.guestActions}>
            <div className={styles.sub}>
              <GrSubtractCircle onClick={handleDecrement} />
            </div>
            <div className={styles.valuess}>
              <p>{guests}</p>
            </div>
            <div className={styles.add}>
              <MdAddCircleOutline onClick={handleIncrement} />
            </div>
          </div>
        </div>
        <div className={styles.rooms}>
          <div className={styles.roomContent}>
            <p>Room</p>
          </div>
          <div className={styles.roomActions}>
            <div className={styles.sub}>
              <GrSubtractCircle onClick={handleRoomDecrement} />
            </div>
            <div className={styles.valuess}>
              <p>{rooms}</p>
            </div>
            <div className={styles.add}>
              <MdAddCircleOutline onClick={handleRoomIncrement} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
