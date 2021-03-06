import { useNavigate      } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai'  ;
import { ButtonType       } from 'types/Button'    ;
import   StyledButton       from './styled'        ;

export const SpanLabel = ({ label }: { label?: string; }) => {
  return label
    ? <span>{ label }</span>
    : null;
};

const Button = (props: ButtonType) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (props.to) {
      return navigate(props.to as string);
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <StyledButton
      onClick={ handleClick }
      onDoubleClick={ props.onDoubleClick }
      onMouseOver={ props.onMouseOver }
      { ...props }
    >
      {
        props.loading &&
        <div>
          <AiOutlineLoading />
          <SpanLabel label={ props.label } />
        </div>
      }
      {
        !props.loading &&
        <div>
          <SpanLabel label={ props.label } />
          { props.icon }
        </div>
      }
    </StyledButton>
  );
};

export default Button;