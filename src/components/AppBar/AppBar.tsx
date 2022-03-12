import { useDispatch, useSelector } from 'react-redux';
import { MdLogout, MdMenu } from 'react-icons/md';

import Button from 'components/Button/Button';
import ButtonToggleTheme from 'components/ButtonToggleTheme/ButtonToggleTheme';
import StyledExtended from './styled';


const AppBar = ({ dark }: { dark: boolean; }) => {

  const isClose = useSelector((state: { drawer: { close: boolean; }; }) => state.drawer.close);
  const dispatch = useDispatch();

  const isNotMobile = window.innerWidth > 768;

  return (
    <StyledExtended
      className={ dark ? 'dark-theme' : '' }
      $mobile={ isNotMobile }
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

    </StyledExtended>
  );
};

export default AppBar;