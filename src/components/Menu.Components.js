import tw from 'tailwind-styled-components'

export const MenuContainer = tw.div`
  fixed w-screen shadow-md z-50 desktop:pr-[17px] top-0 left-0
`
export const Menu = tw.div`
  flex justify-between items-center relative bg-[#0C0C0D]
  
  mobile:px-[16px] 
  mobile:py-[12px] 
  
  tablet:px-[35px] 
  tablet:py-[20px]
  
  desktop:px-[50px]
`
export const NavbarContainer = tw.div`
  ${(p) => (p.$isOpened ? "max-h-[500px] py-4" : "max-h-0")}
  absolute bg-[#0C0C0D] flex justify-center z-20 transition-300 overflow-hidden
  
  mobile:w-full 
  mobile:top-[60px] 
  mobile:left-0 
  mobile:right-0
  mobile:shadow-md

  tablet:w-[300px]   
  tablet:top-[75px]   
  tablet:left-auto
  
  ipad:shadow-none
  ipad:hidden
`