import { useState, useEffect, createRef } from "react";
import NavItem from "./NavItem";
import { useWindowWidth } from "@react-hook/window-size";
// import ScrollSpy from 'react-scrollspy-navigation';
// import { useRouter } from 'next/router'
import AnchorLink from "react-anchor-link-smooth-scroll";

import * as s from './Navbar.Components'

const Navbar = ({ setIsOpened }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const width = useWindowWidth();
  const [screenWidth, setScreenWidth] = useState(0);

  // const router = useRouter()

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
      {/* <ScrollSpy> */}
      {navItems.map((navItem, index) => (
        <AnchorLink offset={() => screenWidth < 500 ? 71 : 108} href={`#${navItem.name}`} key={index}>
          {/* <NavItem key={index} href={`#${navItem.name}`} text={navItem.caption} ref={createRef()} onClick={() => router.push(`/#${navItem.name}`)} /> */}
          <NavItem
            isActive={activeIndex === index}
            onClick={() => {
              setActiveIndex(index);
              setIsOpened(false);
            }}>
            {navItem.caption}
          </NavItem>
        </AnchorLink>
      ))}
      {/* </ScrollSpy> */}
    </s.Navbar>
  );
};

export default Navbar;

/*
//   <NavItem
//     $isActive={activeIndex === index}
//     onClick={() => {
//       setActiveIndex(index);
//       setIsOpened(false);
//     }}
//   >
//     {navItem.caption}
//   </NavItem>
*/