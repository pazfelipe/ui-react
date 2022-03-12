import { ButtonType } from 'types/Button';
import styled from 'styled-components';

const verifyColor = (props: ButtonType) => {
  if (props.disabled) return 'var(--dark-grey)';
  return /^#([a-f0-9]{6,8})$/gi.test(props.color as string)
    ? props.color
    : String('var(--' + props.color + ')');
};

const backgroundColor = (props: ButtonType) => {
  if (props.disabled) return 'var(--soft-grey)';
  if (props.text || props.bordered) return 'transparent';
  return verifyColor(props);
};

const colorText = (props: ButtonType) => {
  if (props.text || props.bordered) {
    return verifyColor(props);
  }

  if (props.disabled) {
    return 'var(--dark-grey)';
  }

  return props.color === 'white'
    ? 'black'
    : 'white';
};

const rounded = (props: ButtonType) => {
  if (props.rounded) return '50%';
  return props.flat ? '0' : '4px';
};

const padding = (props: ButtonType) => {
  if (props.rounded) return '13px';
  return '8px 16px';
};

const StyledButton = styled.button`
outline: none;
box-shadow: none;
transition: .2s linear;
box-sizing: border-box;
position: relative;

border: ${(props: ButtonType) =>
    props.text
      ? 'none'
      : '2px solid transparent'};

border-color: ${(props: ButtonType) =>
    props.bordered
      ? verifyColor(props)
      : 'transparent'};
    
background-color: ${(props: ButtonType) => backgroundColor(props)};
    
color: ${(props: ButtonType) => colorText(props)} !important;
    
& > div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

cursor: ${(props: ButtonType) =>
    props.disabled ||
      props.loading
      ? 'not-allowed'
      : 'pointer'};
  
border-radius: ${(props: ButtonType) => rounded(props)};
padding:${(props: ButtonType) => padding(props)};
      
opacity: ${(props: ButtonType) =>
    props.loading ||
      props.disabled
      ? '0.5 !important'
      : 1};

& svg {
  animation: ${(props: ButtonType) =>
    props.loading
      ? 'spin 1s linear infinite'
      : 'none'};
  position: ${(props: ButtonType) =>
    props.loading
      ? 'absolute'
      : 'static'};
  };
  color: ${(props: ButtonType) =>
    props.color === 'white'
      ? 'black'
      : 'white'};
  font-size: 1.6rem;
}

& span {
  opacity: ${(props: ButtonType) => props.loading ? 0 : 1};
  font-size: 1rem;
}

&:hover {
  opacity: 0.8;
}

`;

export default StyledButton;