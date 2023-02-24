import React, { useState } from "react"; //Component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login_registration/Login";
import About from "./Components/About";
import Signup from "./Components/Login_registration/Signup";
import NotFound from "./Components/NotFound";
import Information from "./Components/Information";
import { AddPlaces } from "./Components/AddPlaces";
// import {HotelInfo} from './Components/Hotel_Info';
import Hotel_Info from "./Components/Hotel_Info";
import { GiFogLight, GiHamburgerMenu } from "react-icons/gi";
import Street from "./Components/Street";

import logoImg from "./Images/projLogo.png";
// import emailimg from './Images/email.png';
// import passimg from './Images/pass.png';

import "./App.css";
// import Hotel_Info from './Components/Hotel_Info';

const App = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <Router>
      <div className="App">
        <nav
          id="mainNav"
          className="main-nav"
          style={{ backgroundColor: "skyblue" }}
        >
          {/* 1st logo part  */}
          <div className="logoIMG">
            <img
              src={logoImg}
              alt="logo"
              style={{ height: "50px", marginTop: "15px" }}
            />
          </div>
          <div
            id="navbarONE"
            style={{
              backgroundColor: "lightskyblue",
              boxShadow: "revert-layer",
              borderRadius: "10px",
              width: "100%",
              marginLeft: "150px",
            }}
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }
          >
            <ul className="mainbar" style={{ borderRadius: "60px" }}>
              <li className="list">
                {/* <img className='emailimg' src={emailimg} alt="emailimg"></img> */}
                <p>
                  <Link className="link" to="/home">
                    <span className="barmanu">Home</span>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="link" to="/Login">
                    <span className="barmanu">Login</span>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="link" to="/Signup">
                    <span className="barmanu">Sign Up</span>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="link" to="/">
                    <span className="barmanu">About</span>
                  </Link>
                </p>
              </li>
              {/* <li>  
                    <p><Link className='link' to="/add-products"> <span  className='barmanu'>Admin</span> </Link></p>  
                  </li>  */}
              {/* <li>  
                    <p><Link className='link' to="/Street"> <span  className='barmanu'>Street</span> </Link></p>  
                  </li> */}
            </ul>
          </div>

          {/* 3rd social media links */}
          <div className="social-media ">
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
          <Route exact path="/" element={<About />}></Route>
          <Route exact path="/Information" element={<Information />}></Route>
          <Route Component={NotFound}></Route>
          <Route exact path="/add-products" element={<AddPlaces />} />
          <Route exact path="/Hotel_Info" element={<Hotel_Info />}></Route>
          <Route exact path="/Street" element={<Street />}></Route>
          {/* <Route exact path="/HotelInfo" element={<HotelInfo />} /> */}
          {/* <Route exact path="/cart" component={Cart}/>        */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
