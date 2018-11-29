import React, { Component } from "react";
import Button from "@material-ui/core/Button";

require("./NavLinks.css");

class NavLinks extends Component {
  render() {
    return (
      <div>
        <ul id="headerList">
          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="#!">
                About us
              </a>
            </h6>
          </li>

          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="#!">
                Products
              </a>
            </h6>
          </li>

          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="#!">
                Awards
              </a>
            </h6>
          </li>

          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="#!">
                Help
              </a>
            </h6>
          </li>

          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="#!">
                Contact
              </a>
            </h6>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavLinks;