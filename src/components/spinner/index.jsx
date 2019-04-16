import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
	0% {
  	transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 36px;
  height: 36px;
  border-left: 6px solid ${props => props.borderColor};
  border-right: 6px solid ${props => props.borderColor};
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-radius: 50%;
  background-color: transparent;
  animation: ${rotate} 2s linear infinite;
`;
const SpinnerBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;

function SpinnerComponent({ borderColor }) {
  return (
    <SpinnerBg>
      <Spinner borderColor={borderColor} />
    </SpinnerBg>
  );
}

export default SpinnerComponent;
