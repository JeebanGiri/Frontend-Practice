import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Resuable/Navbar/navbar";
import AddHotel from "./components/pages/Hotel/Register/addhotel";
import EditHotel from "./components/pages/Hotel/Edit/edithotel";
import ViewHotel from "./components/pages/Hotel/View/viewhotel";
import EmailVerification from "./components/Authentication/Verification/emailverification";
import Home from "./components/pages/Home/home";
import Register from "./components/Authentication/Register/register";
import Login from "./components/Authentication/Login/login";
import Dropdown from "./components/Resuable/Dropdown/dropdown";
import HotelLanding from "./components/pages/Hotel/hotellanding";
import Footer from "./components/pages/Footer/footer";
import SearchBar from "./components/Resuable/Searchbar/Home-Searchbar/searchbar";
import Searchbar1 from "./components/Resuable/Searchbar/Logined-Searchbar/searchbar1";
import LoginedNavbar from "./components/Resuable/Navbar/logined-navbar";
import Layout from "./components/Layouts/Layout";
import Stay from "./components/Resuable/Searchbar/Home-Searchbar/stay";
import Apartment from "./components/Resuable/Searchbar/Home-Searchbar/apartment";
import HomeLayout from "./components/Layouts/HomeLayout";
import "./App.css";

const hotelData = [
  {
    Id: "1",
    name: "Horizen",
    location: "ktm",
    rating: "3",
    owner: "Jeeban Giri",
  },
];

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const isAuthenticationPage = () => {
    // "Account"
    const pages = ["/register", "/login"];
    return pages.includes(window.location.pathname);
  };

  const handleLogin = () => {
    setIsLogin(true);
    navigate("/search");
  };

  const handleLogout = () => {
    setTimeout(() => {
      setIsLogin(false);
      sessionStorage.removeItem("token");
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout isLogin={isLogin} />}>
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/edit-hotel" element={<EditHotel />} />
          <Route path="/edit-hotel" element={<Dropdown />} />
          <Route path="/hotel-homes" element={<HotelLanding />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/view-hotel"
            element={<ViewHotel hotels={hotelData} />}
          />
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<SearchBar className="search" />} />
            <Route path="stay" element={<Stay className="search" />} />
            <Route
              path="apartment"
              element={<Apartment className="search" />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;

// function Routing() {
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   const isAuthenticationPage = () => {
//     // "Account"
//     const pages = ["/register", "/login"];
//     return pages.includes(window.location.pathname);
//   };

//   const handleLogin = () => {
//     setIsLogin(true);
//     navigate("/");
//   };

//   // sessionStorage.setItem("token", true);

//   const handleLogout = () => {
//     setTimeout(() => {
//       setIsLogin(false);
//       sessionStorage.removeItem("token");
//       navigate("/login");
//     }, 1000);
//   };

//   return (
//     <>
//       {isLogin ? <LoginedNavbar handleLogout={handleLogout} /> : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/hotels" element={<SearchBar />} />
//         <Route path="/stay" element={<SearchBar />} />
//         <Route path="/apartment" element={<SearchBar />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login handleLogin={handleLogin} />} />
//         <Route path="/edit-searchbar" element={<Searchbar1 />} />
//         <Route path="/email-verification" element={<EmailVerification />} />
//         <Route path="/add-hotel" element={<AddHotel />} />
//         <Route path="/edit-hotel" element={<EditHotel />} />
//         <Route path="/edit-hotel" element={<Dropdown />} />
//         <Route path="/hotel-homes" element={<HotelLanding />} />
//         <Route path="/view-hotel" element={<ViewHotel hotels={hotelData} />} />
//       </Routes>
//       {!isAuthenticationPage() && <Footer />}
//     </>
//   );
// }

// export default App;

// function Routing() {
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   const isAuthenticationPage = () => {
//     // "Account"
//     const pages = ["/register", "/login"];
//     return pages.includes(window.location.pathname);
//   };

//   const handleLogin = () => {
//     setIsLogin(true);
//     navigate("/");
//   };

//   // sessionStorage.setItem("token", true);

//   const handleLogout = () => {
//     setTimeout(() => {
//       setIsLogin(false);
//       sessionStorage.removeItem("token");
//       navigate("/login");
//     }, 1000);
//   };

//   return (
//     <>
//       {isLogin ? <LoginedNavbar handleLogout={handleLogout} /> : <Navbar />}
//       <Routes>
//         <Routes isAuthorized={false} />
//         <Route path="/" element={<Home />} />
//         <Route path="/hotels" element={<SearchBar />} />
//         <Route path="/stay" element={<SearchBar />} />
//         <Route path="/apartment" element={<SearchBar />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login handleLogin={handleLogin} />} />
//         <Route path="/edit-searchbar" element={<Searchbar1 />} />
//         <Route path="/email-verification" element={<EmailVerification />} />
//         <Route path="/add-hotel" element={<AddHotel />} />
//         <Route path="/edit-hotel" element={<EditHotel />} />
//         <Route path="/edit-hotel" element={<Dropdown />} />
//         <Route path="/hotel-homes" element={<HotelLanding />} />
//         <Route path="/view-hotel" element={<ViewHotel hotels={hotelData} />} />
//       </Routes>
//       {!isAuthenticationPage() && <Footer />}
//     </>
//   );
// }

// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
// } from "react-router-dom";
// import Navbar from "./components/Resuable/Navbar/navbar";
// import AddHotel from "./components/pages/Hotel/Register/addhotel";
// import EditHotel from "./components/pages/Hotel/Edit/edithotel";
// import ViewHotel from "./components/pages/Hotel/View/viewhotel";
// import EmailVerification from "./components/Authentication/Verification/emailverification";
// import Home from "./components/pages/Home/home";
// import Register from "./components/Authentication/Register/register";
// import Login from "./components/Authentication/Login/login";
// import Dropdown from "./components/Resuable/Dropdown/dropdown";
// import HotelLanding from "./components/pages/Hotel/hotellanding";
// import Footer from "./components/pages/Footer/footer";
// import SearchBar from "./components/Resuable/Searchbar/Home-Searchbar/searchbar";
// import Searchbar1 from "./components/Resuable/Searchbar/Logined-Searchbar/searchbar1";
// import LoginedNavbar from "./components/Resuable/Navbar/logined-navbar";

// const hotelData = [
//   {
//     Id: "1",
//     name: "Horizen",
//     location: "ktm",
//     rating: "3",
//     owner: "Jeeban Giri",
//   },
// ];

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routing />
//       </Router>
//     </div>
//   );
// }

// function Routing() {
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   const isAuthenticationPage = () => {
//     // "Account"
//     const pages = ["/register", "/login"];
//     return pages.includes(window.location.pathname);
//   };

//   const handleLogin = () => {
//     setIsLogin(true);
//     navigate("/");
//   };

//   // sessionStorage.setItem("token", true);

//   const handleLogout = () => {
//     setTimeout(() => {
//       setIsLogin(false);
//       sessionStorage.removeItem("token");
//       navigate("/login");
//     }, 1000);
//   };

//   return (
//     <>
//       {isLogin ? <LoginedNavbar handleLogout={handleLogout} /> : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/hotels" element={<SearchBar />} />
//         <Route path="/stay" element={<SearchBar />} />
//         <Route path="/apartment" element={<SearchBar />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login handleLogin={handleLogin} />} />
//         <Route path="/edit-searchbar" element={<Searchbar1 />} />
//         <Route path="/email-verification" element={<EmailVerification />} />
//         <Route path="/add-hotel" element={<AddHotel />} />
//         <Route path="/edit-hotel" element={<EditHotel />} />
//         <Route path="/edit-hotel" element={<Dropdown />} />
//         <Route path="/hotel-homes" element={<HotelLanding />} />
//         <Route path="/view-hotel" element={<ViewHotel hotels={hotelData} />} />
//       </Routes>
//       {!isAuthenticationPage() && <Footer />}
//     </>
//   );
// }

// export default App;
