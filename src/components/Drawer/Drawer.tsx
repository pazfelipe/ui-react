import { useDispatch, useSelector } from 'react-redux';
import BackgroundDrawer from './BackgroundDrawer';
import StyledDrawer from './styled';

const Drawer = () => {

  const dispatch = useDispatch();
  const isClose = useSelector((state: { drawer: { close: boolean; }; }) => state.drawer.close);
  const theme = useSelector((state: { theme: { dark: boolean; }; }) => state.theme);

  const closeDrawer = () => {
    dispatch({
      type: 'CLOSE_DRAWER'
    });
  };

  const isMobile = window.innerWidth < 768;

  return (
    <>
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
          onClick={ closeDrawer }
        >
          Close
        </button>
      </StyledDrawer>

      <BackgroundDrawer
        isClose={ isClose }
        isMobile={ isMobile }
        closeDrawer={ closeDrawer }
      />

    </>
  );

};

export default Drawer;