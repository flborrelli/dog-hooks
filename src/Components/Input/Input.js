import React from 'react';
import * as Styled from './styles';

const Input = ({ label, type, name }) => {
  return (
    <>
      <Styled.Wrapper>
        <Styled.InputLabel htmlFor={name}>{label}</Styled.InputLabel>
        <Styled.InputField
          id={name}
          type={type}
          name={name}
          />
          <Styled.Error>Error</Styled.Error>
      </Styled.Wrapper>
    </>
  )
}

export default Input;
