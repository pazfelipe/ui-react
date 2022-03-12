import { Transition } from 'react-transition-group';
import styled from 'styled-components';

type BackgroundDrawerProps = {
  isMobile: boolean,
  isClose: boolean,
  closeDrawer: () => void;
};

const StyledBackgroundDrawer = styled.div`
background-color: rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
left: 0;
z-index: 99;
transition: 2s linear;

&.open {
  width: 100%;
  height: 100vh;
}
`;

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const BackgroundDrawer = ({ isMobile, isClose, closeDrawer }: BackgroundDrawerProps) => {
  return (
    <Transition in={ isMobile && !isClose } timeout={ 2 }>
      { state => <StyledBackgroundDrawer
        onClick={ () => closeDrawer() }
        style={ {
          ...defaultStyle,
          ...transitionStyles[ state ]
        } }
        className={
          [
            isMobile && !isClose ? 'open' : '',
            `fade fade-${state}`
          ].join(' ')
        }
      /> }
    </Transition>
  );
};

export default BackgroundDrawer;