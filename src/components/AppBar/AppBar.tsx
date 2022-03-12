import { useDispatch, useSelector } from 'react-redux';
import { MdLogout, MdMenu } from 'react-icons/md';

import StyledAppBar from './styled';
import Button from 'components/Button/Button';
import ButtonToggleTheme from 'components/ButtonToggleTheme/ButtonToggleTheme';

const AppBar = ({ dark }: { dark: boolean; }) => {

  const isClose = useSelector((state: { drawer: { close: boolean; }; }) => state.drawer.close);
  const dispatch = useDispatch();

  const isNotMobile = window.innerWidth > 768;

  return (
    <StyledAppBar
      className={ dark ? 'dark-theme' : '' }
    >
      <div>
        <Button
          onClick={ () => dispatch({
            type: isClose ? 'OPEN_DRAWER' : 'CLOSE_DRAWER'
          }) }
          icon={ <MdMenu /> }
          text

        />
      </div>

      {
        isNotMobile &&
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

    </StyledAppBar>
  );
};

export default AppBar;