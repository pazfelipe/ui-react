import styled from 'styled-components';

const StyledAppBar = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding: 0 10px;

&.dark-theme {
  background-color: var(--dark-blue);
}
`;

export default StyledAppBar;