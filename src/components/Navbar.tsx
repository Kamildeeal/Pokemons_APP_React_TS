import React from "react";
import "../styles/styles.css";
import pokemonSVG from "../images/pokemon-23.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import LinkNavbar from "./LinkNavbar";
import { Link } from "react-router-dom";
import { Screen } from "../navigation/screens";

const Navbar = () => {
  const { toggleMenu, isMobile, isMenuOpen, setIsHamburgerOpen } =
    useWindowDimensions();

  const closeOverlay = () => {
    if (isMenuOpen) {
      setIsHamburgerOpen((i) => !i);
    }
  };

  return (
    <>
      <div className={isMenuOpen ? "overlay" : "overlayOut"}></div>
      <nav className="navbar flex-jc-sb">
        <div className="header__logo">
          <Link to={Screen.Root}>
            <img src={pokemonSVG} alt="pokemon logo" />
          </Link>
        </div>

        <a
          href="#"
          onClick={toggleMenu}
          className={` header__menu hide-for-desktop ${
            isMenuOpen ? "header__menu_open" : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div
          className={` ${
            isMenuOpen && isMobile ? "" : "hide-for-mobile header__links"
          } ${isMenuOpen && isMobile ? "open-active" : ""}`}
        >
          <LinkNavbar to="Pokedex" onClick={closeOverlay}>
            Pokedex
          </LinkNavbar>

          <LinkNavbar to="News" onClick={closeOverlay}>
            News
          </LinkNavbar>
          <LinkNavbar to="Blog" onClick={closeOverlay}>
            Blog
          </LinkNavbar>
          <LinkNavbar to="Contact" onClick={closeOverlay}>
            Contact
          </LinkNavbar>
        </div>
        <button className="navBtn hide-for-mobile">
          <span className="background"></span>
          <span className="text" title="Currently doesn't work!">
            Click to<br></br>Register
          </span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
