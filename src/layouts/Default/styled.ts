import styled from 'styled-components';

const StyledLayout = styled.div`
width: 100%;
height: 100vh;
display: flex;
transition: .1s linear;
box-sizing: border-box;
position: relative;
background-color: var(--soft-blue);

&.dark-theme {
  background-color: var(--darker-blue);
  color: #fff;
}
`;

export default StyledLayout;