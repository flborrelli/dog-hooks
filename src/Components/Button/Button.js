import React from 'react';
import * as Styled from './styles';

const Button = ({ children, ...props }) => {
  return (
    <Styled.Btn {...props}>
      {children}
    </Styled.Btn>
  )
}

export default Button;
