import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "../pages/Home/home.module.css";
import { FaHotel } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { LiaHomeSolid } from "react-icons/lia";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const HomeLayout = () => {
  const navigateTo = useNavigate();

  const handleExlpore = () => {
    navigateTo("/hotel-homes");
  };

  return (
    <>
      <div className={styles.imgcontainer}>
        <div className={styles.homeContent}>
          <div id={styles.titleBox}>
            <div className={styles.hotelHomes}>
              <NavLink to="/">
                <div className={styles.icon}>
                  <FaHotel />
                </div>
                <div className={styles.content}>
                  <p className={styles.active}>Hotels & Homes</p>
                </div>
              </NavLink>
            </div>
            <div className={styles.longStay}>
              <NavLink to="stay">
                <div className={styles.icon}>
                  <BsCalendar2Date />
                </div>
                <div className={styles.content}>
                  <p>Long Stay</p>
                </div>
              </NavLink>
            </div>
            <div className={styles.apartment}>
              <NavLink to="apartment">
                <div className={styles.icon}>
                  <LiaHomeSolid />
                </div>
                <div className={styles.content}>
                  <p>Apartment</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
      <div className={styles.articlecontent}>
        <h2>Reach and Explore our site</h2>
        <button className={styles.explore} onClick={handleExlpore}>
          Explore
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.top}>
          <p>Popular destination</p>
        </div>
        <div className={styles.content}>
          <div className={styles.firstcontent}>
            <img src={img1} alt="Image1" />
            <button className={styles.btn}>Pokhara</button>
          </div>

          <div className={styles.secondcontent}>
            <div className={styles.img1}>
              <img src={img2} alt="Image2" />
            </div>
            <div className={styles.img2}>
              <img src={img3} alt="Image3" />
            </div>
            <button>Kathmandu</button>
          </div>
          <div className={styles.thirdcontent}>
            <img src={img4} alt="Image4" />
            <button className={styles.btn}>Mustang</button>
          </div>
          <div className={styles.fourcontent}>
            <div className={styles.firstimg}>
              <img src={img5} alt="Image5" />
            </div>
            <div className={styles.secondimg}>
              <img src={img6} alt="Image6" />
            </div>
            <button>IIam</button>
          </div>
        </div>
      </div>

      <div className={styles.recommend}>
        <div className={styles.top}>
          <p>Recommended places to stay for your next trip!</p>
        </div>
        <div className={styles.imageside}>
          <div className={styles.box1}>
            <div className={styles.image1}>
              <img src={img1} alt="Recommend Image" />
            </div>
            <div className={styles.articles}>
              <p className={styles.hotelnames}>Hotel Manakamana Yet</p>
              <p className={styles.hotelplace}>Kathamandu</p>
              <p>Rating Value</p>
            </div>
            <div className={styles.discPrice}>
              <p className={styles.offer}>50% DISCOUNT</p>
              <p className={styles.price}>Rs. 1000</p>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.image1}>
              <img src={img3} alt="Recommend Image" />
            </div>
            <div className={styles.articles}>
              <p className={styles.hotelnames}>Hotel Lumbini Yet</p>
              <p className={styles.hotelplace}>Lumbini</p>
              <p>Rating Value</p>
            </div>
            <div className={styles.discPrice}>
              <p className={styles.offer}>20% DISCOUNT</p>
              <p className={styles.price}>Rs. 2000</p>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.image1}>
              <img src={img1} alt="Recommend Image" />
            </div>
            <div className={styles.articles}>
              <p className={styles.hotelnames}>Hotel Lumbini Yet</p>
              <p className={styles.hotelplace}>Lumbini</p>
              <p>Rating Value</p>
            </div>
            <div className={styles.discPrice}>
              <p className={styles.offer}>20% DISCOUNT</p>
              <p className={styles.price}>Rs. 2000</p>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.image1}>
              <img src={img4} alt="Recommend Image" />
            </div>
            <div className={styles.articles}>
              <p className={styles.hotelnames}>Hotel Lumbini Yet</p>
              <p className={styles.hotelplace}>Lumbini</p>
              <p>Rating Value</p>
            </div>
            <div className={styles.discPrice}>
              <p className={styles.offer}>20% DISCOUNT</p>
              <p className={styles.price}>Rs. 2000</p>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.image1}>
              <img src={img5} alt="Recommend Image" />
            </div>
            <div className={styles.articles}>
              <p className={styles.hotelnames}>Hotel Lumbini Yet</p>
              <p className={styles.hotelplace}>Lumbini</p>
              <p>Rating Value</p>
            </div>
            <div className={styles.discPrice}>
              <p className={styles.offer}>20% DISCOUNT</p>
              <p className={styles.price}>Rs. 2000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeLayout;
