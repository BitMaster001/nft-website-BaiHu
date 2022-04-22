import tw from "tailwind-styled-components";

export const Navbar = tw.div`
  flex items-center justify-around

  mobile:flex-col
  mobile:gap-1

  ipad:flex-row
  ipad:gap-[50px]
`