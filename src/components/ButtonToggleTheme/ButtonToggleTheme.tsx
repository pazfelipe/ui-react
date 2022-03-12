import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { MdLightMode, MdNightlightRound } from 'react-icons/md';

const ButtonToggleTheme = () => {
  const theme = useSelector((state: { theme: { dark: boolean; }; }) => state.theme);
  const dispatch = useDispatch();

  return (
    <Button
      icon={ theme.dark
        ? <MdLightMode />
        : <MdNightlightRound
          style={ {
            color: 'var(--dark-blue)',
          } }
        />
      }

      onClick={ () => dispatch({
        type: 'TOGGLE_THEME',
      }) }
    />
  );
};

export default ButtonToggleTheme;