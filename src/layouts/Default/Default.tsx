import AppBar from 'components/AppBar/AppBar';
import Drawer from 'components/Drawer/Drawer';
import MainContainer from 'components/MainContainer/MainContainer';
import { useDispatch, useSelector } from 'react-redux';
import { ChildrenProps } from '../../interfaces/ChildrenProps';
import StyledLayout from './styled';

const DefaultLayout = ({ children }: ChildrenProps) => {

  const dispatch = useDispatch();
  const theme = useSelector((state: { theme: { dark: boolean; }; }) => state.theme);
  const isDrawerClosed = useSelector((state: { drawer: { close: boolean; }; }) => state.drawer.close);

  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_THEME',
    });
  };

  return (
    <StyledLayout
      className={ theme.dark ? 'dark-theme' : '' }
    >
      <Drawer />
      <div style={ { width: '100%', height: '100vh' } }>

        <AppBar dark={ theme.dark } />

        <MainContainer
          dark={ theme.dark }
        >
          <button
            onClick={ handleClick }
          >
            { theme.dark ? 'Light' : 'Dark' }
          </button>
          {
            isDrawerClosed &&
            <button
              onClick={ () => dispatch({
                type: 'OPEN_DRAWER'
              }) }
            >
              Open drawer
            </button>
          }
          { children }
        </MainContainer>
      </div>
    </StyledLayout>
  );
};

export default DefaultLayout;