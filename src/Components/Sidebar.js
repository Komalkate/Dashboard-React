import React from "react";
import { SidebarData } from "../Data/SidebarData.jsx";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import img1 from "../img/logo.webp"
function Sidebar() {
  return (
    <div className="SideBar">
      <Navbar bg="" expand="lg">
        <Container className="">
          <Navbar.Brand href="#home">
            <header className="text-center">
              <a href="#HOTASH" className="Brand">
                <h1 className="h4 text-center py-3 text fw-bold text-dark">
                  <Brightness5Icon className="h2" />
                  {/* <img src={img alt="" className='img-fluid ' /> */}
                  HOTASH
                </h1>
              </a>
            </header>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-md-none">
              <main className="">
                {SidebarData.map((val, key) => {
                  return (
                    <span
                      id={window.location.pathname === val.link ? "active" : ""}
                      key={key}
                      onClick={() => (window.location.pathname = val.link)}
                      className="row g-0 justify-content-center py-4 w-100"
                    >
                      <div className="col-3">{val.Icons}</div>
                      <div className="col-7">{val.Title}</div>
                    </span>
                  );
                })}
              </main>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="d-none d-lg-block">
        {SidebarData.map((val, key) => {
          return (
            <span
              id={window.location.pathname === val.link ? "active" : ""}
              key={key}
              onClick={() => (window.location.pathname = val.link)}
              className="row g-0 justify-content-center py-4 w-100"
            >
              <div className="col-3">{val.Icons}</div>
              <div className="col-7">{val.Title}</div>
            </span>
          );
        })}
      </main>
    </div>
  );
}

export default Sidebar;
