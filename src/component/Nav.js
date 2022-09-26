import React, { useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Home from "./Home";
import Product from "./product";

function NavPar() {
  return (
    <div>
      <Navbar className="my-1" color="dark" dark>
        <NavbarBrand href="/">Amazon</NavbarBrand>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/item" element={<Product />} />
      </Routes>
    </div>
  );
}

export default NavPar;
