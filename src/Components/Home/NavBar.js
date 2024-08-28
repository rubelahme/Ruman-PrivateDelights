import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "../HomeStyle/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Navbar>
        <Container>
          <Navbar.Brand className="PrivateDelights">
            PrivateDelights
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <span className="faLocationDot">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className="ps-2 pe-3 Locations">Locations</span>
              <span className="faLocationDot">
                {" "}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <span className="ps-2 pe-3 Locations">Search</span>
              <span className="faLocationDot">
                {" "}
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="ps-2 pe-3 Locations">Login</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
