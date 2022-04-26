import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Navbar from "components/Navbar";
import SocialIcons from "components/SocialIcons";
import ToggleButton from "components/ToggleButton";

import * as s from './Menu.Components'

import imgLogo from 'assets/images/logo.png'

const Menu = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <s.MenuContainer>
        <s.Menu>
          <Link href="/" passHref={true}>
            <a className="cursor-pointer relative mobile:w-[80px] mobile:h-[26.64px] desktop:w-[120px] desktop:h-[40px]">
              <Image src={imgLogo} alt="" layout="fill" quality={100} />
            </a>
          </Link>

          <div className="mobile:hidden ipad:block">
            <Navbar setIsOpened={setIsOpened} />
          </div>

          <s.NavbarContainer $isOpened={isOpened}>
            <Navbar setIsOpened={setIsOpened} />
          </s.NavbarContainer>

          <SocialIcons />

          <ToggleButton isOpened={isOpened} setIsOpened={setIsOpened} />
        </s.Menu>
      </s.MenuContainer>
    </>
  );
};

export default Menu;
