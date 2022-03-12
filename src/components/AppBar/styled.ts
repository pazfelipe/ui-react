import styled from 'styled-components';

const StyledAppBar = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding: 0 10px;

& > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

&.dark-theme {
  // background-color: var(--dark-blue);
}
`;

const StyledExtended = styled(StyledAppBar)`
box-shadow: ${(props: { $mobile: boolean; }) =>
    props.$mobile
      ? 'none'
      : '0px 2px 4px rgba(0, 0, 0, 0.25)'};
`;

export default StyledExtended;