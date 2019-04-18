import React from "react";
import styled from "styled-components";

const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const StyledLabel = styled.label`
  padding: 2px 10px;
  margin-bottom: 5px;
`;
const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;

function FormItemComponent({ name, type, id, placeholder, onChangeInput }) {
  return (
    <StyledFormItem>
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
      <StyledInput
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChangeInput}
        autoComplete="true"
      />
    </StyledFormItem>
  );
}

export default FormItemComponent;
