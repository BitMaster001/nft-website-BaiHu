import tw from "tailwind-styled-components";

export const HamburgerLine = tw.div`
  w-[30px] h-[3px] rounded-[3.38px] bg-white block mx-auto my-[4px] transition-300

  ${(p) =>
      p.$isOpen && p.$id === 1
        ? `translate-y-[11px]`
        : p.$isOpen && p.$id === 3
          ? `-translate-y-[11px]`
          : ""}
`