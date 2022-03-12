import styled from 'styled-components';

const StyledDrawer = styled.div`
width: 250px;
transition: .1s linear;
z-index: 1;
background-color: #fff;

&.dark-theme {
  background-color: var(--dark-blue);
}

&.close {
  width: 0;
  overflow: hidden;
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