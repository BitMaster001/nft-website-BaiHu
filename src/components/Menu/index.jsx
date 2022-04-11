import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import ToggleButton from "./ToggleButton";

const S = {
  MenuContainer: tw.div`
  fixed w-screen shadow-md z-50 desktop:pr-[17px]
`,
 Menu: tw.div`
  flex justify-between items-center relative bg-[#F1D603]
  
  mobile:px-[16px] 
  mobile:py-[6px] 
  
  tablet:px-[35px] 
  tablet:py-4
  
  desktop:px-[50px]
  desktop:py-[10px]
`,
  NavbarContainer: tw.div`
  ${(p) => (p.$isOpened ? "max-h-[500px] py-4" : "max-h-0")}
  absolute bg-yellow flex justify-center z-20 transition-300 overflow-hidden
  
  mobile:w-full 
  mobile:top-[70px] 
  mobile:left-0 
  mobile:right-0
  mobile:shadow-md

  tablet:w-[300px]   
  tablet:top-[96px]   
  tablet:left-auto
  
  ipad:shadow-none
  ipad:hidden
`
}


const Menu = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <S.MenuContainer>
        <S.Menu>
          <Link href="/" passHref={true}>
            <a className="cursor-pointer relative mobile:w-[54px] mobile:h-[59px] desktop:w-[80px] desktop:h-[88px]">
              <Image src={"/images/logo.svg"} alt="" layout="fill" />
            </a>
          </Link>

          <div className="mobile:hidden ipad:block">
            <Navbar setIsOpened={setIsOpened} />
          </div>

          <S.NavbarContainer $isOpened={isOpened}>
            <Navbar setIsOpened={setIsOpened} />
          </S.NavbarContainer>

          <SocialIcons />

          <ToggleButton isOpened={isOpened} setIsOpened={setIsOpened} />
        </S.Menu>
      </S.MenuContainer>
    </>
  );
};

export default Menu;
