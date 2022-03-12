import { useDispatch, useSelector } from 'react-redux';
import StyledDrawer from './styled';

const Drawer = () => {

  const dispatch = useDispatch();
  const isClose = useSelector((state: { drawer: { close: boolean; }; }) => state.drawer.close);
  const theme = useSelector((state: { theme: { dark: boolean; }; }) => state.theme);

  const isMobile = window.innerWidth < 768;

  return (
    <StyledDrawer
      className={
        [
          isClose ? 'close' : '',
          theme.dark ? 'dark-theme' : '',
          isMobile ? 'mobile' : '',
          !isClose && isMobile ? 'mobile-open' : '',
        ].join(' ')
      }
    >
      Drawer
      <button
        onClick={ () => dispatch({
          type: 'CLOSE_DRAWER'
        }) }
      >
        Close
      </button>
    </StyledDrawer>
  );

};

export default Drawer;