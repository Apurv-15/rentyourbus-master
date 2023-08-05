import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showNav, setShowNav] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    if (user) {
      setEmail(user?.email);
      setName(user?.name);
    }
  }, [user]);

  useEffect(() => {
    if (email && name) {
      sendUserData();
    }
  }, [email, name]);

  const sendUserData = async () => {
    const res = await fetch("http://localhost:5000/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
      }),
    });
    console.log(res);
  };

  return (
    <>
      <Nav className="navbar">
        <NavLink to="/" className="nav-logo">
          <h1>Home</h1>
        </NavLink>
        <Bars onClick={toggleNav} />
        <NavMenu showNav={showNav}>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
          <NavLink to="/policy" className="nav-item">
            Policy
          </NavLink>
          <NavLink to="/contact" className="nav-item">
            Contact Us
          </NavLink>
          <NavLink to="/faqs" className="nav-item">
            FAQs
          </NavLink>
          {isAuthenticated && (
            <NavLink to="/myaccount" className="nav-item">
              My Profile
            </NavLink>
          )}
        </NavMenu>
        {isAuthenticated ? (
          <NavBtn className="nav-btn">
            <NavBtnLink
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </NavBtnLink>
          </NavBtn>
        ) : (
          <NavBtn className="nav-btn">
            <NavBtnLink onClick={() => loginWithRedirect()}>
              Log In/Register
            </NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
