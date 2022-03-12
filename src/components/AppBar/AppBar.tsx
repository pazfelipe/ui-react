import { useDispatch, useSelector } from 'react-redux';
import { MdLogout, MdMenu } from 'react-icons/md';

import StyledAppBar from './styled';
import Button from 'components/Button/Button';

const AppBar = ({ dark }: { dark: boolean; }) => {

  const isClose = useSelector((state: { drawer: { close: boolean; }; }) => state.drawer.close);
  const dispatch = useDispatch();

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
          color='warning'

        />
      </div>
      <div>
        <Button
          label='Logout'
          icon={ <MdLogout /> }
          color='success'
          onDoubleClick={ () => window.location.href = '/login' }
        />

      </div>
    </StyledAppBar>
  );
};

export default AppBar;