import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button/Button';
import ButtonToggleTheme from 'components/ButtonToggleTheme/ButtonToggleTheme';
import { MdLogout } from 'react-icons/md';
import { DrawerProps } from 'types/Drawer';
import BackgroundDrawer from './BackgroundDrawer';
import StyledDrawer from './styled';

const Drawer = (props: DrawerProps) => {

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
        { ...props }
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

        {
          isMobile &&
          <div>
            <ButtonToggleTheme />
            <Button
              label='Logout'
              icon={ <MdLogout /> }
              color='error'
              text
              onDoubleClick={ () => window.location.href = '/login' }
            />

          </div>
        }
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