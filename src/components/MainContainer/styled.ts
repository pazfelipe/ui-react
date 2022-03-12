import styled from 'styled-components';

const StyledMainContainer = styled.main`
padding: 10px 20px;
padding-top: 30px;
box-sizing: border-box;
width: 97%;
height: calc(100vh - 70px);
margin: 0 auto;
overflow-y: auto;
scrollbar-width: none;
-ms-overflow-style: none;

// &.dark-theme {
//   background-color: #0D1535;
// }

&::-webkit-scrollbar {
  display: none;
}

`;

export default StyledMainContainer;