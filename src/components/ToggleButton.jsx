import * as s from './ToggleButton.Components'

const ToggleButton = ({ isOpened, setIsOpened }) => {
  return (
    <div
      className="flex flex-col ipad:hidden cursor-pointer"
      onClick={() => setIsOpened(!isOpened)}
    >
      <s.HamburgerLine $id={1} $isOpen={isOpened}></s.HamburgerLine>
      <s.HamburgerLine $id={2} $isOpen={isOpened}></s.HamburgerLine>
      <s.HamburgerLine $id={3} $isOpen={isOpened}></s.HamburgerLine>
    </div>
  );
};

export default ToggleButton;
