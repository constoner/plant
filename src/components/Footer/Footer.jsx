import React from "react";
import "./style.css";

import Logo from "../Logo/Logo";
import Icon from "../Icon/Icon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__social">
            <Logo className="footer__logo" />
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam
              nibh posuere duis eu non sit integer at placerat amet.
            </p>
            <ul className="footer__social-list social">
              <li className="social__item">
                <a className="social__link" href="#!" aria-label="Facebook.">
                  <Icon
                    sprite="/images/vector/logos.svg"
                    name="fb"
                    width="12"
                    height="22"
                  />
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#!" aria-label="Twitter.">
                  <Icon
                    sprite="/images/vector/logos.svg"
                    name="tw"
                    width="22"
                    height="18"
                  />
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#!" aria-label="Instagram.">
                  <Icon
                    sprite="/images/vector/logos.svg"
                    name="inst"
                    width="20"
                    height="20"
                  />
                </a>
              </li>
            </ul>
          </div>

          <nav className="footer__nav">
            <div className="footer__column nav-column">
              <p className="nav-column__title">Navigation</p>
              <ul className="nav-column__list">
                <li className="nav-column__item">
                  <a className="nav-column__link" href="./">
                    Home
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#help">
                    Help & Support
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#catalog">
                    Product
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__column nav-column">
              <p className="nav-column__title">About Us</p>
              <ul className="nav-column__list">
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#address">
                    Address
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#reviews">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__column nav-column">
              <p className="nav-column__title">Help</p>
              <ul className="nav-column__list">
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#services">
                    Customer Services
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#faq">
                    FAQs
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#hiring">
                    We Are Hiring
                  </a>
                </li>
                <li className="nav-column__item">
                  <a className="nav-column__link" href="#subscribe">
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;