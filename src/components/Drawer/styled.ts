import { DrawerProps } from './../../types/Drawer';
import styled from 'styled-components';

const StyledDrawer = styled.div`
width: 250px;
transition: .1s linear;
z-index: 1;
background-color: #fff;
box-sizing: border-box;

&.dark-theme {
  background-color: var(--dark-blue);
}

padding: ${(props: DrawerProps) => props.flat ? '0' : '0 20px'};

&.close {
  width: 0;
  overflow: hidden;
  padding: 0;
}

&.mobile {
  position: fixed;
  top: 0;
  left: -200%;
  height: 100vh;
  z-index: 100;
  width: 80%;

  &.mobile-open {
    left: 0;
  }
}
`;

export default StyledDrawer;