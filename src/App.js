import React, { useState } from "react";
import "./index.css";

function App() {
  return (
    <Navbar>
      <NavItem icon="A" />
      <NavItem icon="B" />
      <NavItem icon="C" />
      <NavItem icon="D">
        <DropDownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropDownMenu() {
  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <DropDownItem>My Profile</DropDownItem>
      <DropDownItem>Friends</DropDownItem>
      <DropDownItem>Setting</DropDownItem>
    </div>
  );
}

export default App;
