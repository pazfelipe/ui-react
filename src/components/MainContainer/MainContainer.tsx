import React from 'react';
import StyledMainContainer from './styled';

interface Props {
  children: React.ReactNode;
  dark: boolean;
}

const MainContainer: React.FC<Props> =
  ({ children, dark }) => {
    return (
      <StyledMainContainer className={ dark ? 'dark-theme' : '' }>
        { children }
      </StyledMainContainer>
    );
  };

export default MainContainer;