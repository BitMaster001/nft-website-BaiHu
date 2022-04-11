import tw from "tailwind-styled-components";

const S = {
  HamburgerLine: tw.div`
  w-[30px] h-[3px] rounded-[3.38px] bg-white block mx-auto my-[4px] transition-300

  ${(p) =>
      p.$isOpen && p.$id === 1
        ? `translate-y-[11px]`
        : p.$isOpen && p.$id === 3
          ? `-translate-y-[11px]`
          : ""}
`
}

const ToggleButton = ({ isOpened, setIsOpened }) => {
  return (
    <div
      className="flex flex-col ipad:hidden cursor-pointer"
      onClick={() => setIsOpened(!isOpened)}
    >
      <S.HamburgerLine $id={1} $isOpen={isOpened}></S.HamburgerLine>
      <S.HamburgerLine $id={2} $isOpen={isOpened}></S.HamburgerLine>
      <S.HamburgerLine $id={3} $isOpen={isOpened}></S.HamburgerLine>
    </div>
  );
};

export default ToggleButton;
