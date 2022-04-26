import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { useWindowWidth } from "@react-hook/window-size";
import { Link } from 'react-scroll';

import * as s from './Navbar.Components'

const Navbar = ({ setIsOpened }) => {
  const width = useWindowWidth();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(width);
  }, [width]);

  const navItems = [
    { name: "home", caption: "HOME" },
    { name: "about", caption: "ABOUT" },
    { name: "roadmap", caption: "ROADMAP" },
    { name: "team", caption: "TEAM" },
    { name: "faq", caption: "FAQ" },
  ];
  return (
    <s.Navbar>
      {navItems.map((navItem, index) => (
        <Link 
          key={index} 
          activeClass="active"
          to={navItem.name} 
          spy={true} 
          offset={screenWidth < 500 ? -57 : -80} 
          duration={500} 
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <NavItem>
            {navItem.caption}
          </NavItem>
        </Link>
      ))}
    </s.Navbar>
  );
};

export default Navbar;