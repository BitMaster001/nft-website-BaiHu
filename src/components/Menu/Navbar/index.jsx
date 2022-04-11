import { useState } from "react";
import tw from "tailwind-styled-components";
import NavItem from "./NavItem";
import AnchorLink from "react-anchor-link-smooth-scroll";

const S = {
  Navbar: tw.div`
  flex items-center justify-around
  
  mobile:flex-col
  mobile:gap-1
  
  ipad:flex-row
  ipad:gap-[50px]
`,
};

const Navbar = ({ setIsOpened }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const navItems = [
    { name: "home", caption: "Home" },
    { name: "about", caption: "Abount Us" },
    { name: "roadmap", caption: "Roadmap" },
    { name: "team", caption: "Team" },
    { name: "faq", caption: "Faq" },
  ];
  return (
    <S.Navbar>
      {navItems.map((navItem, index) => (
        <AnchorLink offset={() => 100} href={`#${navItem.name}`} key={index}>
          <NavItem
            $isActive={activeIndex === index}
            onClick={() => {
              setActiveIndex(index);
              setIsOpened(false);
            }}
          >
            {navItem.caption}
          </NavItem>
        </AnchorLink>
      ))}
    </S.Navbar>
  );
};

export default Navbar;
