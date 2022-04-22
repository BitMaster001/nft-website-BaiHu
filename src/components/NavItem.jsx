// import { forwardRef } from 'react';
import * as s from './NavItem.Components'

// const NavItem = forwardRef(({ href, text }, ref) => (
//   <a ref={ref} href={href} rel="noreferrer">
//     {text}
//   </a>
// ));

// export default NavItem;
const NavItem = ({ isActive, children }) => {
  return (
    <s.NavItem $isActive={isActive}>
      {children}
    </s.NavItem>
  )
}

export default NavItem
