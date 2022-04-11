import tw from "tailwind-styled-components";

const S = {
  NavItem: tw.div`
  cursor-pointer

  mobile:text-[16px]

  ipad:text-[18px]

  ${(p) =>
    p.$isActive ? `text-[#F23319] font-black` : `text-[#040404] font-bold`}
`,
};

export default S.NavItem;
