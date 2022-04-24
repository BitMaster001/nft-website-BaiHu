import tw from "tailwind-styled-components/dist/tailwind";

export const Container = tw.div`
  w-screen
  h-screen 
  bg-black
  p-2
  flex justify-center items-center
`
export const Flex = tw.div`
  flex justify-center items-center

  mobile:w-full
  mobile:flex-col

  ipad:w-[1000px]
  ipad:flex-row
`
export const FlexItem = tw.div`
  p-8

  mobile:w-full

  ipad:w-[500px]
`
export const NumberBox = tw.div`
  flex justify-between items-center rounded-md border-2 border-white font-bold
  
  mobile:text-[20px]
  mobile:h-[40px] 
  mobile:px-3
  mobile:py-1 
  
  ipad:text-[24px]
  ipad:h-[46px] 
  ipad:px-4
  ipad:py-1 
`
export const SpinContainer = tw.div`
  grid grid-flow-col grid-rows-2 gap-[6px]
`
export const Spin = tw.div`
  relative w-[14px] h-[8px] bg-cover bg-repeat-round
`
export const StatisticsInfo = tw.div`
  flex justify-between my-2 font-bold
`
export const ConnectButton = tw.div`
  bg-pentagon-black-long w-full imagebutton
  grid place-content-center
  text-yellow

  mobile:h-[50px]
  mobile:text-[24px]
  
  ipad:h-[60px]
  ipad:text-[24px]
`