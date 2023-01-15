import React, { Component } from "react";

import "./Header.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

export default class Header extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show Navigation
            </a>
            <a className="mobile-btn" href="/#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="/">
                  Home
                </a>
              </li>
              <li className="current">
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li className="current">
                <a className="smoothscroll" href="#swipe">
                  Pictures
                </a>
              </li>
              <li className="current">
                <a className="smoothscroll" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{Data.name}.</h1>
              <h3
                className="intro"
                style={{ color: "fff", fontFamily: "sans-serif" }}
              >
                {Data.roleDescription}
              </h3>
              <hr />
              {/* <ul className="social">
                {Data.socialLinks &&
                  Data.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="instagram">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul> */}
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
