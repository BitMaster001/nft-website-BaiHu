import tw from "tailwind-styled-components";

export const NavItem = tw.div`
  cursor-pointer

  mobile:text-[16px]

  ipad:text-[18px]

  ${(p) => p.$isActive ? `
    text-[#D51D1D]
  ` : `
    text-white
  `}
`