import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

export const Footer = () => {

  return (
    <footer className="footer">
    <ContentWrapper>
        <ul className="menuItems">
            <li className="menuItem">Terms Of Use</li>
            <li className="menuItem">Privacy-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
            Movies Flix website is Here to let you know Which movies and tv series are trending their ratings and their official trailer and release information.
            this website uses tmdb api to fetch these details and let users know what to watch and chill.
        </div>
        <div className="socialIcons">
            <span className="icon">
                <FaFacebookF />
            </span>
            <span className="icon">
                <FaInstagram />
            </span>
            <span className="icon">
                <FaTwitter />
            </span>
            <span className="icon">
                <FaLinkedin />
            </span>
        </div>
    </ContentWrapper>
</footer>
  )
}
