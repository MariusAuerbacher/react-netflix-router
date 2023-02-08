import React from "react";
import logo from "./Assets/netflix_logo.png"
import { Component } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import './styles.css'
import { Link } from "react-router-dom";

class NetflixNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar"  expand="lg">
  
          <div className="container-fluid">
            <Nav.Link
              className="navbar-brand"
              href="https://www.netflix.com/gb/">
            < img className="navbar-logo" src={logo} alt="netflix logo" />
            </Nav.Link>
            <Button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/tv-shows"
                  >
                    Tv Shows
                  </Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    className="nav-link"
                    href="https://www.netflix.com/gb/"
                  >
                    Movies
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    className="nav-link"
                    href="https://www.netflix.com/gb/"
                  >
                    Recently Added
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    className="nav-link"
                    href="https://www.netflix.com/gb/"
                  >
                    My List
                  </Nav.Link>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Nav.Link
                    className="nav-link active"
                    aria-current="page"
                    href="https://www.netflix.com/gb/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    className="nav-link"
                    href="https://www.netflix.com/gb/"
                  >
                    KIDS
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    className="nav-link"
                    href="https://www.netflix.com/gb/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bell-fill icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <Nav.Link
                          className="dropdown-item"
                          href="http://ubeytdemir.me/netflix-ui/profile.html"
                        >
                          <div className="d-flex align-items-center"></div>
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link
                          className="dropdown-item"
                          href="http://ubeytdemir.me/netflix-ui/profile.html"
                        >
                          Manage Profiles
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link
                          className="dropdown-item"
                          href="http://ubeytdemir.me/netflix-ui/accounts.html"
                        >
                          Account
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link
                          className="dropdown-item"
                          href="https://www.netflix.com/gb/"
                        >
                          Help Center
                        </Nav.Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Nav.Link
                          className="dropdown-item"
                          href="https://www.netflix.com/gb/"
                        >
                          Signout Netflix
                        </Nav.Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </Navbar>
    );
  }
}

export default NetflixNavbar;
