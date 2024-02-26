import React, { useState, useEffect } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import styles from "./viewhotel.module.css";

const ViewHotel = ({ hotels }) => {
  if (!hotels) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showPopups, setShowPopups] = useState(
    Array.from({ length: 6 }, () => false)
  );

  const toggleOptions = (hotelId, index) => {
    setSelectedHotel(selectedHotel === hotelId ? null : hotelId);

    const updatedPopups = [...showPopups];
    updatedPopups[index] = !updatedPopups[index];
    setShowPopups(updatedPopups);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(`.${styles.optionsContainer}`) &&
        !event.target.closest(`.${styles.optionsButton}`) &&
        !event.target.closest(`.${styles.editDeleteContainer}`)
      ) {
        const updatedPopups = showPopups.map(() => false);
        setShowPopups(updatedPopups);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [showPopups]);

  return (
    <div className={styles.viewHotelContainer}>
      <h1>Hotel Listing Page</h1>
      <table className={styles.hotelTable}>
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Owner Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{hotel.name}</td>
                <td>{hotel.location}</td>
                <td>{hotel.rating}</td>
                <td>{hotel.owner}</td>
                <td>
                  <div className={styles.optionsContainer}>
                    <button
                      className={styles.optionsButton}
                      onClick={() => toggleOptions(hotel.id, index)}
                    >
                      <IoEllipsisVertical />
                    </button>
                    {selectedHotel === hotel.id && showPopups[index] && (
                      <div className={styles.editDeleteContainer}>
                        <button className={styles.editButton}>Edit</button>
                        <button className={styles.deleteButton}>Delete</button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewHotel;
