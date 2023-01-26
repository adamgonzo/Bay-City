import React, { Component } from "react";

import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <p>Copyright © 2023 Bay City General Glass</p>
          <nav>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
      </footer>
    );
  }
}
