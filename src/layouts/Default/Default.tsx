import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef
  } from 'react' ;
  
  import {
  useDispatch,
  useSelector
  } from 'react-redux' ;
  
  import { ChildrenProps } from 'interfaces/ChildrenProps'               ;
  import   AppBar          from 'components/AppBar/AppBar'               ;
  import   Drawer          from 'components/Drawer/Drawer'               ;
  import   MainContainer   from 'components/MainContainer/MainContainer' ;
  import   StyledLayout    from './styled'                               ;

const DefaultLayout = ({ children }: ChildrenProps) => {

  const dispatch = useDispatch();
  const theme = useSelector((state: { theme: { dark: boolean; }; }) => state.theme);
  const isDrawerClosed = useSelector((state: { drawer: { close: boolean; }; }) => state.drawer.close);

  const elementRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_THEME',
    });
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchstartX.current = event.changedTouches[ 0 ].screenX;
  };


  let touchstartX = useRef(0);
  let touchendX = useRef(0);

  const handleGesture = useCallback(() => {
    if (touchendX.current + 50 < touchstartX.current) {
      dispatch({
        type: 'CLOSE_DRAWER',
      });
    };
    if (touchendX.current > touchstartX.current + 50) {
      dispatch({
        type: 'OPEN_DRAWER',
      });
    };
  }, [ dispatch ]);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    touchendX.current = event.changedTouches[ 0 ].screenX;
    handleGesture();
  }, [ handleGesture ]);

  useEffect(() => {
    const ef = elementRef?.current;
    if (elementRef) {

      ef?.addEventListener('touchstart', handleTouchStart);

      ef?.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      ef.removeEventListener('touchstart', handleTouchStart);
      ef.removeEventListener('touchend', handleTouchEnd);
    };
  }, [ handleTouchEnd ]);

  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      dispatch({
        type: 'CLOSE_DRAWER',
      });
    }
  }, [ dispatch ]);

  return (
    <StyledLayout
      className={ theme.dark ? 'dark-theme' : '' }
      ref={ elementRef }
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